"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mic,
  PhoneOff,
  Phone,
  CheckCircle,
  Circle,
} from "lucide-react";
import { useBolnaCall } from "@/lib/useBolnaCall";
import { useFormData } from "@/components/providers/FormProvider";

export default function VoicePanel() {
  const { state, error, start, stop } = useBolnaCall();
  const { form } = useFormData();

  const isActive =
    state === "connecting" ||
    state === "ringing" ||
    state === "active";

  const statusLabel =
    state === "idle"
      ? "Ready"
      : state === "connecting"
      ? "Connecting"
      : state === "ringing"
      ? "Calling"
      : state === "active"
      ? "Live conversation"
      : "Completed";

  const steps = [
    { label: "Full Name", done: !!form.full_name },
    { label: "Mobile Number", done: !!form.phone_number },
    { label: "District", done: !!form.district },
    { label: "New Address", done: !!form.new_address },
  ];

  const completedCount = steps.filter((s) => s.done).length;

  return (
    <Card className="p-6">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Voice-enabled citizen service
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#1f2454]">
          తెలుగు Voice Assistant
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Speak in Telugu and the application will be filled automatically.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Service
            </p>
            <p className="font-semibold text-[#1f2454]">
              Address Update Assistance
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
            </p>
            <p className="font-semibold text-emerald-700">
              {statusLabel}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm">
          <Mic className="h-10 w-10 text-[#1f2454]" />
        </div>
      </div>

      <div className="mt-8">
        {isActive ? (
          <Button
            onClick={stop}
            className="h-12 w-full bg-red-600 text-white hover:bg-red-700"
          >
            <PhoneOff className="mr-2 h-4 w-4" />
            End Voice Session
          </Button>
        ) : (
          <Button
            onClick={start}
            className="h-12 w-full bg-[#1f2454] text-white hover:bg-[#161a43]"
          >
            <Phone className="mr-2 h-4 w-4" />
            Start Voice Session
          </Button>
        )}
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Voice Progress
          </p>

          <span className="text-xs font-semibold text-emerald-700">
            {completedCount}/4 completed
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
            >
              <span className="text-sm text-slate-700">
                {step.label}
              </span>

              {step.done ? (
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              ) : (
                <Circle className="h-5 w-5 text-slate-400" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-600">
          {state === "idle" &&
            "Start the Telugu voice session to begin filling the application."}

          {state === "connecting" &&
            "Connecting to the voice assistant service..."}

          {state === "ringing" &&
            "Voice assistant is joining the conversation..."}

          {state === "active" &&
            "Speak naturally. Confirm each detail when the assistant repeats it back."}

          {state === "ended" &&
            "Voice conversation completed successfully. You can download the application PDF."}
        </p>

        {error && (
          <p className="mt-3 text-sm text-red-600">
            Error: {error}
          </p>
        )}
      </div>
    </Card>
  );
}