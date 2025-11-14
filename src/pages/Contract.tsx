import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contract = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[-1]" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.04"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0.02"/>
            </linearGradient>
          </defs>
          <g stroke="url(#g)" strokeWidth="1">
            <g>
              <path d="M100 0 L100 900"/>
              <path d="M300 0 L300 900"/>
              <path d="M500 0 L500 900"/>
              <path d="M700 0 L700 900"/>
              <path d="M900 0 L900 900"/>
              <path d="M1100 0 L1100 900"/>
              <path d="M1300 0 L1300 900"/>
            </g>
            <g>
              <path d="M0 120 L1600 120"/>
              <path d="M0 300 L1600 300"/>
              <path d="M0 480 L1600 480"/>
              <path d="M0 660 L1600 660"/>
            </g>
          </g>
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 pt-12 pb-20">
        {/* Header */}
        <header className="flex items-center justify-between mb-14 flex-col md:flex-row gap-4 md:gap-0">
          <Link to="/" className="flex items-center gap-3.5 no-underline">
            <span className="w-11 h-11 rounded-lg inline-grid place-items-center bg-gradient-to-b from-white/[0.03] to-white/[0.01] shadow-[0_6px_18px_rgba(2,6,23,0.6)] border border-white/[0.03]">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeOpacity="0.06"/>
                <path d="M6 15 L10 9 L14 13 L18 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
              </svg>
            </span>
            <h1 className="font-normal text-base tracking-[0.06em] m-0 text-foreground">DS Soft</h1>
          </Link>
          <nav className="flex gap-5 items-center">
            <Link to="/#capabilities" className="text-muted-foreground no-underline text-[13px] hover:text-foreground transition-colors">
              Capabilities
            </Link>
            <Link to="/#work" className="text-muted-foreground no-underline text-[13px] hover:text-foreground transition-colors">
              Work
            </Link>
            <Link to="/contract" className="text-foreground no-underline text-[13px] font-semibold">
              Contract
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-muted-foreground text-[13px] tracking-[0.16em] uppercase mb-4">
              Project inquiries
            </div>
            <h2 className="font-light text-[48px] m-0 mb-6 text-foreground leading-[1.05]">
              Get in touch on Telegram
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Available for reverse engineering contracts, security research, custom embedded solutions, and hardware modifications.
            </p>
            <Button 
              className="bg-gradient-to-b from-primary/[0.12] to-primary/[0.06] border-primary/25 text-foreground hover:from-primary/[0.18] hover:to-primary/[0.10] text-base h-12 px-8"
              onClick={() => window.open('https://t.me/the_hackintosh', '_blank')}
            >
              Contact on Telegram
            </Button>
          </div>

          {/* Hyperscooter Section */}
          <section className="mt-20">
            <div className="mb-8">
              <h3 className="font-normal text-2xl mb-2">Hyperscooter builds</h3>
              <p className="text-muted-foreground text-sm">
                Custom high-performance electric scooters with military-grade battery systems
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-8 rounded-xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.03]">
                <div className="flex justify-between items-start mb-4 flex-col sm:flex-row gap-2">
                  <div>
                    <h4 className="font-semibold text-xl m-0 mb-1">Ninebot G30 — 147 km/h</h4>
                    <div className="text-muted-foreground text-sm">Modified frame with custom power system</div>
                  </div>
                  <div className="text-accent font-semibold text-lg">147 km/h</div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                    <div className="text-xs text-muted-foreground mb-1">Battery System</div>
                    <div className="font-semibold">72V 800A discharge</div>
                    <div className="text-xs text-muted-foreground mt-1">Military-grade custom build</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                    <div className="text-xs text-muted-foreground mb-1">Cell Configuration</div>
                    <div className="font-semibold">INR21700 EVE 40PL 20S6P</div>
                    <div className="text-xs text-muted-foreground mt-1">High-discharge lithium cells</div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.03]">
                <div className="flex justify-between items-start mb-4 flex-col sm:flex-row gap-2">
                  <div>
                    <h4 className="font-semibold text-xl m-0 mb-1">Xiaomi Essential — 122 km/h</h4>
                    <div className="text-muted-foreground text-sm">Performance-tuned featherweight platform</div>
                  </div>
                  <div className="text-accent font-semibold text-lg">122 km/h</div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                    <div className="text-xs text-muted-foreground mb-1">Battery System</div>
                    <div className="font-semibold">72V 370A discharge</div>
                    <div className="text-xs text-muted-foreground mt-1">Self-built pack assembly</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                    <div className="text-xs text-muted-foreground mb-1">Cell Technology</div>
                    <div className="font-semibold">INR21700 EVE 50PL 20S3P</div>
                    <div className="text-xs text-muted-foreground mt-1">Optimized thermal management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-white/[0.01] border border-white/[0.02]">
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> These builds represent extreme performance modifications requiring advanced electrical engineering, thermal management, and safety systems. Custom battery packs feature military-grade BMS, fusing, and thermal monitoring. Not for public roads.
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contract;
