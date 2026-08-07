import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Bolna India</h1>
          <p className="text-sm text-slate-400">
            Talk instead of filling forms.
          </p>
        </div>

        <Badge variant="outline" className="border-emerald-400/30 text-emerald-300">
          Prototype
        </Badge>
      </div>
    </header>
  );
}