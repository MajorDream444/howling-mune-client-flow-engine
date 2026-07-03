import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowDown, ChevronRight, Moon, Shield } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToFlow = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("client-flow");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("the-work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToVault = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("visual-vault");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-brand-deep">
      {/* Background Graphic Asset with gold-amber and forest-green mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/lunar_ambient_bg_1783013529183.jpg"
          alt="Howling MUNE Ambient Backdrop"
          className="w-full h-full object-cover opacity-35 filter scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-transparent to-brand-deep/90" />
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Moon className="w-5 h-5 text-brand-gold animate-pulse" />
          <span className="font-serif text-xl tracking-[0.25em] text-brand-cream font-medium">
            MUNE
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#the-work"
            onClick={scrollToWork}
            className="text-xs font-mono uppercase tracking-widest text-brand-gray hover:text-brand-cream transition-colors"
          >
            The Work
          </a>
          <a
            href="#client-flow"
            onClick={scrollToFlow}
            className="text-xs font-mono uppercase tracking-widest text-brand-gray hover:text-brand-cream transition-colors"
          >
            The Pathway
          </a>
          <a
            href="#visual-vault"
            onClick={scrollToVault}
            className="text-xs font-mono uppercase tracking-widest text-brand-gray hover:text-brand-cream transition-colors"
          >
            The Vault
          </a>
        </nav>
        <div>
          <a
            href="#client-flow"
            onClick={scrollToFlow}
            className="text-xs font-mono uppercase tracking-widest border border-brand-gold/20 hover:border-brand-gold/60 bg-brand-gold/5 px-5 py-2.5 rounded-full text-brand-gold transition-all duration-300"
          >
            Initiate Return
          </a>
        </div>
      </header>

      {/* Hero Body Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center my-auto">
        {/* Sacred Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-moss/30 border border-brand-gold/15 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-gold">
            Bali Sacred Identity Sanctuary
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif text-brand-cream font-medium tracking-tight leading-[1.1] mb-6"
        >
          Return to the self <br className="hidden md:block" />
          beneath the noise.
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-brand-gray/90 max-w-2xl mx-auto leading-relaxed mb-12 font-sans font-light"
        >
          A quiet doorway into embodiment, emotional repair, visual identity, and the client pathway that helps the work become easier to enter.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#client-flow"
            onClick={scrollToFlow}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-amber-light text-brand-charcoal font-medium tracking-wide text-xs uppercase flex items-center justify-center transition-all duration-300 shadow-xl shadow-brand-gold/10 group cursor-pointer"
          >
            Start the client flow
            <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#the-work"
            onClick={scrollToWork}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-brand-gold/35 hover:bg-white/5 text-brand-cream font-medium text-xs uppercase transition-all duration-300"
          >
            Explore the pathway
          </a>
        </motion.div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
        <div className="flex items-center space-x-3 text-xs text-brand-gray/60">
          <Shield className="w-4 h-4 text-brand-rose" />
          <span className="font-mono uppercase tracking-wider">No exaggerated promises. Pure somatic truth.</span>
        </div>
        <button
          onClick={scrollToWork}
          className="text-xs font-mono uppercase tracking-widest text-brand-gold hover:text-brand-amber-light transition-colors flex items-center space-x-2 animate-bounce"
        >
          <span>Descend deeper</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
