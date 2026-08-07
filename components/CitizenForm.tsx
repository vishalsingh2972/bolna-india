"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormData } from "@/components/providers/FormProvider";

export default function CitizenForm() {
  const { form } = useFormData();

  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white">
          Address Update Form
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Fields will be filled automatically from the voice conversation.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Full Name
            </label>
            <Input
              value={form.full_name}
              readOnly
              placeholder="Will appear automatically"
              className="border-white/10 bg-slate-900/60 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Mobile Number
            </label>
            <Input
              value={form.phone_number}
              readOnly
              placeholder="Will appear automatically"
              className="border-white/10 bg-slate-900/60 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              District
            </label>
            <Input
              value={form.district}
              readOnly
              placeholder="Will appear automatically"
              className="border-white/10 bg-slate-900/60 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              New Address
            </label>
            <Input
              value={form.new_address}
              readOnly
              placeholder="Will appear automatically"
              className="border-white/10 bg-slate-900/60 text-white"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}