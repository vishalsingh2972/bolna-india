import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CitizenForm() {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur">
      <div className="p-6">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-widest text-slate-400">
            Citizen Service Copilot
          </p>
          <h2 className="mt-1 text-2xl font-bold">
            Address Update Application
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Prototype demonstration only.
          </p>
        </div>

        <div className="grid gap-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Date of Birth" />
          <Input placeholder="Mobile Number" />
          <Input placeholder="District" />
          <Input placeholder="Village / Town" />
          <Input placeholder="New Address" />
          <Input placeholder="PIN Code" />
        </div>

        <Button className="mt-6 w-full bg-slate-200 text-slate-900 hover:bg-white">
          Generate acknowledgement
        </Button>
      </div>
    </Card>
  );
}