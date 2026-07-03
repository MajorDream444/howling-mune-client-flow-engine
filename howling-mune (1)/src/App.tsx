import React from "react";
import { Hero } from "./components/Hero";
import { TheWork } from "./components/TheWork";
import { ClientFlowEngine } from "./components/ClientFlowEngine";
import { VisualVault } from "./components/VisualVault";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-brand-deep min-h-screen relative font-sans text-brand-cream overflow-hidden">
      {/* Absolute Ambient Background Lights for Lunar Vibe */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[5%] w-[400px] h-[400px] bg-brand-moss/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-brand-gold/30 rounded-full blur-[180px] pointer-events-none z-0 mix-blend-screen opacity-15" />

      {/* Main Sections */}
      <div className="relative z-10">
        <Hero />
        
        <TheWork />
        
        <div className="bg-gradient-to-b from-brand-deep via-brand-forest to-brand-deep relative py-12">
          {/* Tactile Golden Divider Accent */}
          <div className="gold-divider mb-16 opacity-50" />
          
          <ClientFlowEngine />
        </div>

        <div className="gold-divider opacity-30" />

        <VisualVault />
        
        <Footer />
      </div>
    </div>
  );
}

