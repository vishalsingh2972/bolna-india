import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

export default function VoicePanel() {
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
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10">
            <Mic className="h-10 w-10 text-emerald-300" />
          </div>
        </div>

        <Button className="w-full max-w-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400">
          Start voice session
        </Button>

        <div className="w-full rounded-xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Live transcript
          </p>
          <p className="mt-2 text-slate-300">
            Namaskaram. Mee address update cheyyali kada?
          </p>
        </div>
      </div>
    </Card>
  );
}