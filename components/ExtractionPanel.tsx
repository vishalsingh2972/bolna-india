"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useFormData } from "@/components/providers/FormProvider";

export default function ExtractionPanel() {
  const { form } = useFormData();

  const confidence =
    form.full_name || form.phone_number ? 0.98 : 0;

  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Live Extraction
            </h2>
          </div>

          <Badge
            variant="outline"
            className="border-emerald-400/30 text-emerald-300"
          >
            Telugu
          </Badge>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-lg border border-white/10 bg-slate-950/40 p-3">
            <p className="text-xs text-slate-500">Full Name</p>
            <p className="text-slate-200">
              {form.full_name || "Waiting for voice input..."}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/40 p-3">
            <p className="text-xs text-slate-500">
              Mobile Number
            </p>
            <p className="text-slate-200">
              {form.phone_number || "Waiting for voice input..."}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/60 p-4 font-mono text-xs text-emerald-300">
          <pre>
            {JSON.stringify(
              {
                language: "te",
                confidence,
                full_name: form.full_name || null,
                phone_number: form.phone_number || null,
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </Card>
  );
}