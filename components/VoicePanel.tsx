"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, PhoneOff } from "lucide-react";
import { useBolnaCall } from "@/lib/useBolnaCall";

export default function VoicePanel() {
  const { state, volume, error, start, stop } = useBolnaCall();

  const isActive =
    state === "connecting" ||
    state === "ringing" ||
    state === "active";

  const scale = 1 + volume * 0.6;

  return (
    <Card className="h-full border-white/10 bg-white/5 backdrop-blur">
      <div className="flex h-full flex-col items-center justify-center gap-8 p-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-slate-400">
            Voice assistant
          </p>

          <h2 className="mt-2 text-3xl font-bold">Speak in Telugu</h2>

          <p className="mt-2 text-slate-400">
            Click the microphone and answer naturally.
          </p>

          <p className="mt-3 text-sm capitalize text-emerald-300">
            {state}
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="absolute h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl transition-all duration-200"
            style={{ transform: `scale(${scale})` }}
          />

          <div
            className="flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 transition-all duration-200"
            style={{ transform: `scale(${scale})` }}
          >
            <Mic className="h-10 w-10 text-emerald-300" />
          </div>
        </div>

        {isActive ? (
          <Button
            onClick={stop}
            className="w-full max-w-xs bg-red-500 text-white hover:bg-red-400"
          >
            <PhoneOff className="mr-2 h-4 w-4" />
            End call
          </Button>
        ) : (
          <Button
            onClick={start}
            className="w-full max-w-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400"
          >
            <Mic className="mr-2 h-4 w-4" />
            Start voice session
          </Button>
        )}

        <div className="w-full rounded-xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Conversation status
          </p>

          <p className="mt-2 text-slate-300">
            {state === "idle" && "Waiting for conversation..."}
            {state === "connecting" &&
              "Connecting to your Bolna voice agent..."}
            {state === "ringing" &&
              "Agent is joining the conversation..."}
            {state === "active" &&
              "Live Telugu conversation in progress."}
            {state === "ended" && "Call ended successfully."}
          </p>

          {error && (
            <p className="mt-3 text-sm text-red-400">Error: {error}</p>
          )}
        </div>
      </div>
    </Card>
  );
}