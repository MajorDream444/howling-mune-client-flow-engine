import React from "react";
import { Moon, Shield, Mail, Compass } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-deep border-t border-white/5 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative ambient spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-moss/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-white/5">
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <Moon className="w-5 h-5 text-brand-gold" />
              <span className="font-serif text-xl tracking-[0.25em] text-brand-cream font-medium">
                MUNE
              </span>
            </div>
            <p className="text-xs text-brand-gray max-w-sm leading-relaxed font-sans font-light">
              Howling MUNE is a private somatic and visual identity sanctuary in Bali. Led by Z, we assist guides, founders, and creators traversing profound life and identity shifts.
            </p>
            <div className="flex items-center space-x-2 text-[10px] font-mono text-brand-gray/60">
              <Shield className="w-4 h-4 text-brand-rose" />
              <span>Bali Sanctuary • Completely Confidential</span>
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-gold">
              Navigational Paths
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#the-work"
                  className="text-xs text-brand-gray hover:text-brand-cream transition-colors font-sans"
                >
                  The Alignment Strategy
                </a>
              </li>
              <li>
                <a
                  href="#client-flow"
                  className="text-xs text-brand-gray hover:text-brand-cream transition-colors font-sans"
                >
                  Configure Somatic Flow
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={scrollToTop}
                  className="text-xs text-brand-gray hover:text-brand-cream transition-colors font-sans"
                >
                  Back to Threshold
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-gold">
              The Sanctuary Coordinates
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-xs text-brand-gray font-sans">
                <Compass className="w-4 h-4 text-brand-rose shrink-0" />
                <span>Ubud & Canggu, Bali, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-xs text-brand-gray font-sans">
                <Mail className="w-4 h-4 text-brand-rose shrink-0" />
                <span>contact@howlingmune.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-brand-gray/40 uppercase tracking-widest">
          <span>© 2026 HOWLING MUNE. ALL RIGHTS RESERVED.</span>
          <span>GIVING YOU BACK TO YOU.</span>
        </div>
      </div>
    </footer>
  );
};
