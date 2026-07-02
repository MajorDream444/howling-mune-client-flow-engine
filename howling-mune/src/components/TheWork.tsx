import React from "react";
import { Compass, Camera, Sparkles, Heart, CheckCircle, Quote } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export const TheWork: React.FC = () => {
  return (
    <section className="relative bg-brand-deep py-20 md:py-32 overflow-hidden border-t border-white/5" id="the-work">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[30%] -left-48 w-96 h-96 bg-brand-moss/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-48 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Positioning / Diagnostic Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20 md:mb-32">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold block mb-3">
              The Alignment Gap
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-cream font-medium tracking-tight leading-tight mb-6">
              The medicine exists.<br />The pathway around the medicine does not.
            </h2>
            <div className="w-16 h-[1px] bg-brand-gold/30 mb-6" />
            <p className="text-xs font-mono text-brand-rose uppercase tracking-wider mb-4">
              A Message from Z — Identity Transition Guide
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-brand-gray text-base leading-relaxed font-sans font-light">
              We live in an era saturated with healing modalites, rapid-fire workshops, and generic coaching funnels. Yet, most transitions collapse the moment we pack our bags. We experience temporary ecstatic openings, only to return to our everyday environments where our bodies default back into old somatic patterns of tension and protection.
            </p>
            <p className="text-brand-gray text-base leading-relaxed font-sans font-light">
              <strong>Howling MUNE</strong> was built to solve this exact fracture. True alignment is not achieved by chasing spiritual peaks, but by establishing somatic safety. By pairing physical embodiment with honest photographic mirroring and raw digital strategy, we build a physical and visual container that allows the transformation to endure.
            </p>
          </div>
        </div>

        {/* The Three Pillars of Z's Craft */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 md:mb-36">
          {/* Pillar 1: Somatic Embodiment */}
          <GlassCard className="p-8 group" glowColor="none">
            <div className="w-12 h-12 rounded-xl bg-brand-moss/30 border border-brand-gold/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/30 transition-all duration-300">
              <Compass className="w-5 h-5 text-brand-gold" />
            </div>
            <h3 className="text-xl font-serif font-medium text-brand-cream mb-4">
              Somatic Repair
            </h3>
            <p className="text-xs text-brand-gray leading-relaxed font-sans mb-6">
              Somatic memory is absolute. We do not analyze your story with words; we maps the physical bracing in your jaw, the collapse in your chest, and the shallow rhythms of your breathing. By clearing these holding patterns, we make it comfortable for your nervous system to rest.
            </p>
            <div className="text-[10px] font-mono text-brand-rose uppercase tracking-wider">
              Embodiment & Emotional Cleansing
            </div>
          </GlassCard>

          {/* Pillar 2: Photographic Mirroring */}
          <GlassCard className="p-8 group" glowColor="none">
            <div className="w-12 h-12 rounded-xl bg-brand-moss/30 border border-brand-gold/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/30 transition-all duration-300">
              <Camera className="w-5 h-5 text-brand-gold" />
            </div>
            <h3 className="text-xl font-serif font-medium text-brand-cream mb-4">
              Honest Mirroring
            </h3>
            <p className="text-xs text-brand-gray leading-relaxed font-sans mb-6">
              Photography is used not to flatter, but to witness. Through custom, slow-focus cinematic portraiture in Bali's raw landscapes, Z captures your skin and posture as your defense mechanisms melt away. Seeing your true face in soft, somatic stillness is a massive emotional catalyst.
            </p>
            <div className="text-[10px] font-mono text-brand-rose uppercase tracking-wider">
              Photography & Sacred Vulnerability
            </div>
          </GlassCard>

          {/* Pillar 3: Sovereign Presence */}
          <GlassCard className="p-8 group" glowColor="none">
            <div className="w-12 h-12 rounded-xl bg-brand-moss/30 border border-brand-gold/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/30 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-brand-gold" />
            </div>
            <h3 className="text-xl font-serif font-medium text-brand-cream mb-4">
              Visual Authority
            </h3>
            <p className="text-xs text-brand-gray leading-relaxed font-sans mb-6">
              Your public persona must match your internal shift. We synthesize your realigned identity into clean, authentic typography and quiet branding structures. No marketing hype, no overdesigned layouts. Just a clear, authoritative visual representation of your truth.
            </p>
            <div className="text-[10px] font-mono text-brand-rose uppercase tracking-wider">
              Visual Identity & Digital Alignment
            </div>
          </GlassCard>
        </div>

        {/* Deep Grounded Quote Section */}
        <div className="py-16 border-y border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-deep px-4">
            <Quote className="w-6 h-6 text-brand-gold/30" />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl md:text-4xl font-serif text-brand-cream leading-relaxed font-light mb-6">
              "We are not looking to build a new version of you. We are dismantling the protective noise that keeps you from inhabiting the one that has been waiting all along."
            </h4>
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase">
              — Z, HOWLING MUNE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
