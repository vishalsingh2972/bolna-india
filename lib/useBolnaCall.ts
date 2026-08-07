"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BolnaWebCall } from "@bolna/web-call";

type CallState =
  | "idle"
  | "connecting"
  | "ringing"
  | "active"
  | "ended";

export function useBolnaCall() {
  const callRef = useRef<BolnaWebCall | null>(null);

  const [state, setState] = useState<CallState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(0);

  const start = useCallback(async () => {
    try {
      setError(null);

      const call = new BolnaWebCall({
        sessionUrl: "/api/bolna-session",
        debug: true,
      });

      call.on("state-change", (nextState: CallState) => {
        console.log("State:", nextState);
        setState(nextState);
      });

      call.on("call-start", () => {
        console.log("Call started");
      });

      call.on("call-end", ({ reason }: { reason: string }) => {
        console.log("Call ended:", reason);
        setState("ended");

        setTimeout(() => setState("idle"), 1000);
      });

      call.on("volume-level", (level: number) => {
        setVolume(level);
      });

      call.on("error", (e: any) => {
        console.error("Bolna error:", e);
        setError(e.message || "Unknown error");
      });

      callRef.current = call;

      await call.start({
        userData: {
          language: "Telugu",
          app: "Bolna India",
        },
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to start call");
      setState("idle");
    }
  }, []);

  const stop = useCallback(async () => {
    await callRef.current?.stop();
    setState("idle");
    setVolume(0);
  }, []);

  useEffect(() => {
    return () => {
      callRef.current?.stop();
    };
  }, []);

  return {
    state,
    volume,
    error,
    start,
    stop,
  };
}