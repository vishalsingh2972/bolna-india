import { Badge } from "@/components/ui/badge";
import LogoWithTitle from "../public/logoWithTitle.svg";
import BolnaLogo from "../public/bolna-logo.svg";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="bg-[#1f2454] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <span>Government of India Prototype</span>
          <div className="flex items-center gap-4 text-slate-200">
            <span>English</span>
            <Badge
              variant="outline"
              className="border-white/30 bg-transparent text-white"
            >
              Prototype
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-5">
        {/* Left: UIDAI Logo */}
        <div className="flex-shrink-0">
          <img
            src={LogoWithTitle.src || LogoWithTitle}
            alt="UIDAI Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Center: Empty space or can add something here */}

        {/* Right: Bolna Logo and Text */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-900">
              Voice AI powered by
            </p>
            <div className="flex items-center justify-end gap-2">
              <div className="flex-shrink-0">
                <img
                  src={BolnaLogo.src || BolnaLogo}
                  alt="Bolna Logo"
                  className="h-25 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}