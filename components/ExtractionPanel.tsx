import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExtractionPanel() {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Live extraction</h3>
          <Badge className="bg-emerald-500/20 text-emerald-300">
            Telugu
          </Badge>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-lg border border-white/10 bg-slate-950/40 p-3">
            <p className="text-xs text-slate-500">Full Name</p>
            <p className="text-slate-200">Ravi Kumar</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/40 p-3">
            <p className="text-xs text-slate-500">District</p>
            <p className="text-slate-200">East Godavari</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/40 p-3">
            <p className="text-xs text-slate-500">PIN Code</p>
            <p className="text-slate-200">533201</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/60 p-4 font-mono text-xs text-emerald-300">
{`{
  "language": "te",
  "confidence": 0.98,
  "district": "East Godavari",
  "pincode": "533201"
}`}
        </div>
      </div>
    </Card>
  );
}