import Header from "@/components/Header";
import VoicePanel from "@/components/VoicePanel";
import CitizenForm from "@/components/CitizenForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f8]">
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Aadhar Address Update
          </h2>

          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Complete a government-style address update application through a
            simple Telugu voice conversation. This is a prototype demonstration
            inspired by the UIDAI address update workflow.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <div className="lg:sticky lg:top-6">
            <VoicePanel />
          </div>

          <div>
            <CitizenForm />
          </div>
        </div>
      </div>
    </main>
  );
}