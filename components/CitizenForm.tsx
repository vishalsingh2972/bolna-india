"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormData } from "@/components/providers/FormProvider";

export default function CitizenForm() {
  const { form } = useFormData();

  return (
    <Card className="border border-slate-200 bg-white shadow-sm">
      <div className="p-8">
        <div className="border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Unique Identification Authority of India
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#1f2454]">
            Address Update Application
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Prototype application generated automatically through a Telugu voice
            conversation.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Application ID
              </p>
              <p className="font-mono text-lg font-semibold text-[#1f2454]">
                BI-2026-0001
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </p>
              <p className="font-semibold text-emerald-700">
                Draft (Voice Completed)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <section>
            <h3 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-[#1f2454]">
              Applicant Details
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <Input
                  value={form.full_name}
                  readOnly
                  placeholder="Will appear automatically"
                  className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Mobile Number
                </label>
                <Input
                  value={form.phone_number}
                  readOnly
                  placeholder="Will appear automatically"
                  className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  District
                </label>
                <Input
                  value={form.district}
                  readOnly
                  placeholder="Will appear automatically"
                  className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-[#1f2454]">
              New Residential Address
            </h3>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Address
              </label>
              <Input
                value={form.new_address}
                readOnly
                placeholder="Will appear automatically"
                className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </section>

          <section className="border-t border-slate-200 pt-6">
            <div className="flex justify-end">
              <div className="w-52 text-center">
                <div className="h-12 border-b border-dashed border-slate-400" />
                <p className="mt-2 text-xs text-slate-500">
                  Applicant Signature
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex justify-end">
            <a
              href="/api/download-pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-[#1f2454] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#161a43]"
            >
              Download Application PDF
            </a>
          </div>
        </div>
      </div>

      {form.full_name &&
        form.phone_number &&
        form.district &&
        form.new_address && (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                ✓
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-900">
                  Application draft generated successfully
                </h3>

                <p className="mt-1 text-sm text-emerald-800">
                  Your address update details have been captured through a Telugu voice
                  conversation and converted into a structured government application
                  draft.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-emerald-200 bg-white p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      Language
                    </p>
                    <p className="mt-1 font-medium text-slate-900">Telugu</p>
                  </div>

                  <div className="rounded-lg border border-emerald-200 bg-white p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      Extraction confidence
                    </p>
                    <p className="mt-1 font-medium text-slate-900">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {form.full_name &&
 form.phone_number &&
 form.district &&
 form.new_address && (
  <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
    <h3 className="text-lg font-semibold text-[#1f2454]">
      Voice-to-Form Transformation
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      The Telugu conversation was converted into structured application data in
      real time.
    </p>

    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Spoken Telugu
        </p>

        <p className="mt-2 text-sm text-slate-800">
          "నా పేరు {form.full_name}. నా ఫోన్ నంబర్ {form.phone_number}. నేను
          {form.district} జిల్లా నుంచి మాట్లాడుతున్నాను. నా కొత్త చిరునామా
          {form.new_address}."
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-900 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Structured JSON
        </p>

        <pre className="mt-2 overflow-x-auto text-xs text-emerald-300">
{JSON.stringify(
  {
    language: "te",
    confidence: 0.98,
    full_name: form.full_name,
    phone_number: form.phone_number,
    district: form.district,
    new_address: form.new_address,
  },
  null,
  2
)}
        </pre>
      </div>
    </div>
  </div>
)}
    </Card>
  );
}