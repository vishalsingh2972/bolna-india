import Header from "@/components/Header";
import VoicePanel from "@/components/VoicePanel";
import CitizenForm from "@/components/CitizenForm";
import ExtractionPanel from "@/components/ExtractionPanel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-bold tracking-tight">
            Government services should feel like a conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            A multilingual voice copilot that helps Indian citizens complete
            forms entirely through speech.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="min-h-[620px]">
            <VoicePanel />
          </div>

          <div className="grid gap-6">
            <CitizenForm />
            <ExtractionPanel />
          </div>
        </div>
      </div>
    </main>
  );
}