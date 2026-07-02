import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Volume2, 
  Compass, 
  Eye, 
  Sparkles, 
  Layers, 
  Activity, 
  ShieldAlert, 
  Heart, 
  Calendar, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Send, 
  Sparkle, 
  Clock, 
  Camera, 
  Waves, 
  MessageSquare,
  Lock,
  User,
  Mail,
  Smartphone
} from "lucide-react";
import { PATHWAYS, REFLECTION_QUESTIONS, CLIENT_LETTERS } from "../data";
import { GlassCard } from "./ui/GlassCard";
import { cn } from "@/src/lib/utils";

// Simple Icon Resolver Helper
const getIcon = (name: string) => {
  switch (name) {
    case "Brain": return <Brain className="w-5 h-5 text-brand-gold" />;
    case "VolumeX": return <Volume2 className="w-5 h-5 text-brand-gold" />;
    case "Compass": return <Compass className="w-5 h-5 text-brand-gold" />;
    case "Eye": return <Eye className="w-5 h-5 text-brand-gold" />;
    case "Sparkles": return <Sparkles className="w-5 h-5 text-brand-gold" />;
    case "Layers": return <Layers className="w-5 h-5 text-brand-gold" />;
    case "Activity": return <Activity className="w-5 h-5 text-brand-gold" />;
    case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-brand-gold" />;
    case "Heart": return <Heart className="w-5 h-5 text-brand-gold" />;
    default: return <Sparkle className="w-5 h-5 text-brand-gold" />;
  }
};

export const ClientFlowEngine: React.FC<{ initialStep?: number }> = ({ initialStep = 0 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  
  // Reflections state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [matchedPathwayId, setMatchedPathwayId] = useState<string>("");
  
  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    contact: "",
    month: "October 2026",
    reflections: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedBooking, setSavedBooking] = useState<any>(null);

  // Active pathway for the detail view (defaults to matched, or can be toggled)
  const [activePathwayId, setActivePathwayId] = useState<string>("grounded-presence");

  // Read saved state if any
  useEffect(() => {
    const localData = localStorage.getItem("howling_mune_booking");
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        setSavedBooking(parsed);
        setIsSubmitted(true);
        setBookingForm(parsed);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Calculate matched pathway based on reflections
  const handleAnswerSelect = (questionId: string, pathwayId: string) => {
    const updated = { ...selectedAnswers, [questionId]: pathwayId };
    setSelectedAnswers(updated);
    
    // If all questions are answered, determine the match
    if (Object.keys(updated).length === REFLECTION_QUESTIONS.length) {
      // Find mode of pathwayIds
      const counts: Record<string, number> = {};
      (Object.values(updated) as string[]).forEach((id) => {
        counts[id] = (counts[id] || 0) + 1;
      });
      
      let bestMatch = "grounded-presence";
      let maxCount = 0;
      Object.entries(counts).forEach(([id, count]) => {
        if (count > maxCount) {
          bestMatch = id;
          maxCount = count;
        }
      });
      
      setMatchedPathwayId(bestMatch);
      setActivePathwayId(bestMatch);
    }

    // Go to next question or auto-route
    if (currentQuestionIndex < REFLECTION_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 350);
    } else {
      setTimeout(() => {
        setCurrentStep(2); // Jump to Route phase
      }, 500);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const data = {
        ...bookingForm,
        matchedPathway: activePathwayId,
        submittedAt: new Date().toISOString()
      };
      localStorage.setItem("howling_mune_booking", JSON.stringify(data));
      setSavedBooking(data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Auto move to Follow
      setTimeout(() => {
        setCurrentStep(4);
      }, 1500);
    }, 1500);
  };

  const resetFlow = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setMatchedPathwayId("");
    setCurrentStep(1); // Back to Reflect
  };

  const steps = [
    { label: "Arrive", desc: "Intention & Breath" },
    { label: "Reflect", desc: "Somatic Inquiry" },
    { label: "Route", desc: "Your Ritual Map" },
    { label: "Book", desc: "Sacred Inquiry" },
    { label: "Follow", desc: "The Preparation" },
    { label: "Review", desc: "Client Notes" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20" id="client-flow">
      {/* Visual Header & Stepper */}
      <div className="mb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold mb-2 block">
          Interactive Gateway
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-brand-cream font-medium tracking-tight mb-4">
          The Client Flow Engine
        </h2>
        <p className="text-brand-gray max-w-2xl mx-auto font-sans text-sm md:text-base">
          A modular container where you can cross the threshold, evaluate your physical holding patterns, and map your return to essence.
        </p>

        {/* Tactile Stepper */}
        <div className="mt-12 overflow-x-auto no-scrollbar pb-4">
          <div className="flex justify-between items-center min-w-[700px] border-b border-white/5 pb-6">
            {steps.map((step, idx) => {
              const isActive = currentStep === idx;
              const isPast = currentStep > idx;
              return (
                <button
                  key={step.label}
                  onClick={() => setCurrentStep(idx)}
                  className="flex-1 flex flex-col items-center relative group text-left px-2 outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <span 
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono border transition-all duration-500",
                        isActive && "border-brand-gold bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]",
                        isPast && "border-brand-rose bg-brand-rose/5 text-brand-rose",
                        !isActive && !isPast && "border-white/10 text-brand-gray group-hover:border-white/30"
                      )}
                    >
                      {isPast ? <Check className="w-3.5 h-3.5" /> : `0${idx + 1}`}
                    </span>
                    <div className="flex flex-col">
                      <span className={cn(
                        "text-xs font-mono uppercase tracking-wider transition-colors duration-300",
                        isActive ? "text-brand-cream" : "text-brand-gray group-hover:text-white"
                      )}>
                        {step.label}
                      </span>
                      <span className="text-[10px] text-brand-gray/60 font-sans hidden md:block">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeStepLine"
                      className="absolute bottom-[-25px] left-0 right-0 h-[2px] bg-brand-gold shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Flow Canvas with Glass Container */}
      <div className="min-h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 0: ARRIVE */}
          {currentStep === 0 && (
            <motion.div
              key="step-arrive"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl"
            >
              <GlassCard className="text-center py-16 px-8 md:px-16" glowColor="amber">
                <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-brand-gold/20 flex items-center justify-center bg-brand-gold/5 relative">
                  {/* Subtle pulsing rings */}
                  <div className="absolute inset-0 rounded-full border border-brand-gold/40 animate-ping opacity-25" />
                  <Sparkle className="w-6 h-6 text-brand-gold animate-pulse" />
                </div>

                <h3 className="text-2xl md:text-4xl font-serif text-brand-cream font-medium tracking-wide mb-4">
                  Cross the Threshold
                </h3>
                <p className="text-brand-gray text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  Before analyzing schedules or logistics, allow your nervous system to land. Rest your eyes, take one complete breath, and release the tension in your jaw.
                </p>

                {/* Simulated Bali soundscape cue / breathing guide */}
                <div className="py-4 px-6 rounded-lg bg-brand-moss/20 border border-brand-moss/30 mb-10 max-w-md mx-auto flex items-center space-x-4">
                  <div className="flex space-x-1 items-end h-4 w-4">
                    <div className="w-1 bg-brand-rose h-2 rounded animate-pulse" />
                    <div className="w-1 bg-brand-gold h-4 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-1 bg-brand-rose h-3 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <span className="text-xs font-mono tracking-wider text-brand-rose uppercase">
                    Ambient Water Soundscape Active
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-amber-light text-brand-charcoal font-medium tracking-wide text-sm flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-lg shadow-brand-gold/10"
                  >
                    Start the reflection
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => {
                      setCurrentStep(2);
                      setActivePathwayId("grounded-presence");
                    }}
                    className="px-8 py-4 rounded-full border border-white/15 hover:border-brand-gold/40 hover:bg-white/5 text-brand-cream text-sm transition-all duration-300"
                  >
                    Skip to Pathways
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* STEP 1: REFLECT */}
          {currentStep === 1 && (
            <motion.div
              key="step-reflect"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl"
            >
              <GlassCard className="py-12 px-6 md:px-12" glowColor="none">
                {/* Question progress */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-mono tracking-widest text-brand-gold uppercase">
                    Reflective Question {currentQuestionIndex + 1} of {REFLECTION_QUESTIONS.length}
                  </span>
                  <div className="flex space-x-1.5">
                    {REFLECTION_QUESTIONS.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-1.5 w-8 rounded-full transition-all duration-500",
                          i === currentQuestionIndex 
                            ? "bg-brand-gold" 
                            : i < currentQuestionIndex 
                              ? "bg-brand-rose/50" 
                              : "bg-white/10"
                        )}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-serif text-brand-cream font-medium tracking-normal mb-8 leading-tight">
                      {REFLECTION_QUESTIONS[currentQuestionIndex].text}
                    </h3>

                    <div className="space-y-4">
                      {REFLECTION_QUESTIONS[currentQuestionIndex].choices.map((choice, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleAnswerSelect(REFLECTION_QUESTIONS[currentQuestionIndex].id, choice.pathwayId)}
                          className={cn(
                            "w-full text-left p-5 md:p-6 rounded-xl border transition-all duration-300 group flex items-start space-x-4",
                            selectedAnswers[REFLECTION_QUESTIONS[currentQuestionIndex].id] === choice.pathwayId
                              ? "bg-brand-moss/30 border-brand-gold/60 shadow-lg shadow-brand-gold/5"
                              : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                          )}
                        >
                          <div className="mt-1 p-2 rounded-lg bg-brand-charcoal/80 border border-white/5 flex items-center justify-center">
                            {getIcon(choice.iconName)}
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium font-sans text-brand-cream group-hover:text-brand-gold transition-colors block mb-1">
                              {choice.text}
                            </span>
                            <span className="text-xs text-brand-gray leading-relaxed block">
                              {choice.description}
                            </span>
                          </div>
                          <div className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center mt-1 group-hover:border-brand-gold/40 transition-colors">
                            {selectedAnswers[REFLECTION_QUESTIONS[currentQuestionIndex].id] === choice.pathwayId && (
                              <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between">
                  <button
                    onClick={() => {
                      if (currentQuestionIndex > 0) {
                        setCurrentQuestionIndex(currentQuestionIndex - 1);
                      } else {
                        setCurrentStep(0);
                      }
                    }}
                    className="flex items-center text-xs font-mono uppercase tracking-wider text-brand-gray hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </button>
                  <span className="text-xs font-mono text-brand-gray/40">
                    Your responses shape your customized ritual path.
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* STEP 2: ROUTE */}
          {currentStep === 2 && (
            <motion.div
              key="step-route"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left side: Navigation panel of pathways */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="p-4 rounded-xl bg-brand-moss/10 border border-brand-moss/20 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block mb-1">
                      Analysis Complete
                    </span>
                    <span className="text-xs text-brand-gray">
                      Based on your reflections, Z recommends the following ritual pathway:
                    </span>
                  </div>

                  {PATHWAYS.map((p) => {
                    const isMatched = p.id === matchedPathwayId;
                    const isActive = p.id === activePathwayId;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setActivePathwayId(p.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between",
                          isActive 
                            ? "bg-brand-moss border-brand-gold/50 shadow-md shadow-brand-gold/5" 
                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                        )}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className={cn(
                            "text-xs font-mono",
                            isActive ? "text-brand-gold" : "text-brand-gray"
                          )}>
                            {p.duration}
                          </span>
                          {isMatched && (
                            <span className="text-[9px] font-mono uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded-full">
                              Match
                            </span>
                          )}
                        </div>
                        <h4 className={cn(
                          "text-lg font-serif font-medium",
                          isActive ? "text-brand-cream" : "text-brand-gray"
                        )}>
                          {p.title}
                        </h4>
                        <span className="text-xs text-brand-gray/60 truncate mt-1">
                          {p.subtitle}
                        </span>
                        {isActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-gold" />
                        )}
                      </button>
                    );
                  })}

                  <button
                    onClick={resetFlow}
                    className="w-full text-center py-3 rounded-xl border border-white/5 text-xs font-mono uppercase tracking-wider text-brand-rose hover:bg-white/5 transition-all mt-4"
                  >
                    Reset and Recalibrate
                  </button>
                </div>

                {/* Right side: Detailed presentation of the chosen pathway */}
                <div className="lg:col-span-8">
                  {(() => {
                    const p = PATHWAYS.find((item) => item.id === activePathwayId)!;
                    return (
                      <GlassCard className="p-8 md:p-10" glowColor="amber">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8">
                          <div>
                            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-1">
                              Ritual Configuration
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif text-brand-cream font-medium">
                              {p.title}
                            </h3>
                          </div>
                          <div className="text-left md:text-right">
                            <span className="text-xs text-brand-gray font-mono block">Duration</span>
                            <span className="text-sm font-mono text-brand-rose">{p.duration}</span>
                          </div>
                        </div>

                        <p className="text-brand-gray leading-relaxed mb-8 text-sm md:text-base font-sans">
                          {p.description}
                        </p>

                        {/* Split specifications */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div className="p-4 rounded-xl bg-brand-charcoal/50 border border-white/5">
                            <span className="text-[10px] font-mono text-brand-rose uppercase tracking-wider block mb-2">
                              Somatic Focus
                            </span>
                            <p className="text-xs text-brand-cream leading-relaxed font-sans">
                              {p.somaticFocus}
                            </p>
                          </div>
                          <div className="p-4 rounded-xl bg-brand-charcoal/50 border border-white/5">
                            <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider block mb-2">
                              Photography Focus
                            </span>
                            <p className="text-xs text-brand-cream leading-relaxed font-sans">
                              {p.photographyFocus}
                            </p>
                          </div>
                        </div>

                        {/* Who this is for */}
                        <div className="mb-8">
                          <span className="text-xs font-mono text-brand-gray uppercase tracking-widest block mb-3">
                            Ideal Resonance
                          </span>
                          <ul className="space-y-2">
                            {p.suitableFor.map((suit, sIdx) => (
                              <li key={sIdx} className="flex items-center text-xs text-brand-cream font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-rose mr-3" />
                                {suit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pathway step breakdown */}
                        <div className="mb-10">
                          <span className="text-xs font-mono text-brand-gray uppercase tracking-widest block mb-4">
                            The Ritual Process
                          </span>
                          <div className="space-y-4">
                            {p.ritualProcess.map((step, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="text-xs font-mono text-brand-gold mr-4 mt-0.5">
                                  0{idx + 1}
                                </span>
                                <div className="flex-1">
                                  <p className="text-xs md:text-sm text-brand-cream leading-relaxed font-sans">
                                    {step}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Dynamic CTA leading to booking */}
                        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                          <span className="text-xs text-brand-gray/60 font-sans">
                            Ready to make contact with Z?
                          </span>
                          <button
                            onClick={() => setCurrentStep(3)}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-amber-light text-brand-charcoal font-medium tracking-wide text-xs uppercase flex items-center justify-center transition-all duration-300 cursor-pointer"
                          >
                            Book This Pathway
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </button>
                        </div>
                      </GlassCard>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: BOOK */}
          {currentStep === 3 && (
            <motion.div
              key="step-book"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl"
            >
              <GlassCard className="p-8 md:p-12" glowColor="amber">
                <div className="text-center mb-10">
                  <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-1">
                    Discovery Session Request
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-brand-cream font-medium tracking-wide mb-2">
                    Initiate Your Request
                  </h3>
                  <p className="text-brand-gray text-xs md:text-sm max-w-lg mx-auto font-sans">
                    Each container is highly private. Fill out this somatic pre-assessment. Your responses are read directly and solely by Z.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-6 h-6 text-brand-gold animate-bounce" />
                    </div>
                    <h4 className="text-xl font-serif text-brand-cream mb-2">Your request is registered</h4>
                    <p className="text-brand-gray text-xs max-w-sm mx-auto mb-6">
                      Z reviews each application personally. You will receive a bespoke scheduling calendar link and WhatsApp message within 24 hours.
                    </p>
                    <div className="p-4 rounded-xl bg-brand-moss/20 border border-brand-moss/30 max-w-md mx-auto text-left mb-8">
                      <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider block mb-1">Registered details:</span>
                      <p className="text-xs text-brand-cream font-mono"><span className="text-brand-gray">Name:</span> {savedBooking?.name}</p>
                      <p className="text-xs text-brand-mono"><span className="text-brand-gray">Pathway:</span> {PATHWAYS.find(p => p.id === activePathwayId)?.title}</p>
                      <p className="text-xs text-brand-mono"><span className="text-brand-gray">Month:</span> {savedBooking?.month}</p>
                    </div>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-3 rounded-full border border-white/10 hover:border-brand-gold/40 hover:bg-white/5 text-xs font-mono uppercase tracking-wider text-brand-gold transition-all duration-300 cursor-pointer"
                    >
                      View Somatic Preparation Map
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-brand-gray block mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" />
                          <input
                            type="text"
                            required
                            placeholder="How shall we call you?"
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-xl text-sm text-brand-cream outline-none font-sans transition-all"
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-brand-gray block mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" />
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-xl text-sm text-brand-cream outline-none font-sans transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* WhatsApp / Contact */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-brand-gray block mb-2">
                          Telegram / WhatsApp
                        </label>
                        <div className="relative">
                          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" />
                          <input
                            type="text"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={bookingForm.contact}
                            onChange={(e) => setBookingForm({ ...bookingForm, contact: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-xl text-sm text-brand-cream outline-none font-sans transition-all"
                          />
                        </div>
                      </div>

                      {/* Preferred timeframe */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-brand-gray block mb-2">
                          Preferred Months (Bali, 2026)
                        </label>
                        <select
                          value={bookingForm.month}
                          onChange={(e) => setBookingForm({ ...bookingForm, month: e.target.value })}
                          className="w-full px-4 py-3.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-xl text-sm text-brand-cream outline-none font-sans transition-all appearance-none cursor-pointer"
                        >
                          <option>July - August 2026</option>
                          <option>September - October 2026</option>
                          <option>November - December 2026</option>
                          <option>Early 2027</option>
                        </select>
                      </div>
                    </div>

                    {/* Somatic intention text area */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-brand-gray">
                          What is standing at your crossroads?
                        </label>
                        <span className="text-[9px] font-sans text-brand-rose">Private Transmission</span>
                      </div>
                      <textarea
                        required
                        rows={4}
                        placeholder="Briefly share where you feel stuck or braced. What is waiting to dissolve or emerge?"
                        value={bookingForm.reflections}
                        onChange={(e) => setBookingForm({ ...bookingForm, reflections: e.target.value })}
                        className="w-full px-4 py-3.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-xl text-sm text-brand-cream outline-none font-sans transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2 text-[10px] text-brand-gray/60 py-2">
                      <Lock className="w-3.5 h-3.5 text-brand-gold/60" />
                      <span>This data is stored encrypted locally and is strictly confidential. No tracking cookies.</span>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="flex items-center justify-center py-3.5 px-6 rounded-full border border-white/10 hover:bg-white/5 text-xs font-mono uppercase tracking-wider text-brand-gray hover:text-white transition-all duration-300"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Modify Pathway
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center py-3.5 px-8 rounded-full bg-brand-gold hover:bg-brand-amber-light text-brand-charcoal font-medium tracking-wide text-xs uppercase transition-all duration-300 shadow-md shadow-brand-gold/10"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 border-2 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
                            <span>Aligning Energies...</span>
                          </div>
                        ) : (
                          <>
                            <span>Request Discovery Session</span>
                            <Send className="w-3.5 h-3.5 ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </GlassCard>
            </motion.div>
          )}

          {/* STEP 4: FOLLOW */}
          {currentStep === 4 && (
            <motion.div
              key="step-follow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl"
            >
              <GlassCard className="p-8 md:p-12" glowColor="moss">
                <span className="text-xs font-mono tracking-widest text-brand-gold uppercase block mb-2 text-center">
                  Integration Roadmap
                </span>
                <h3 className="text-2xl md:text-4xl font-serif text-brand-cream font-medium tracking-wide text-center mb-12">
                  The Integration Map
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {/* Visual Connector Line */}
                  <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-brand-gold/10 via-brand-gold/40 to-brand-gold/10 z-0" />

                  {/* Stage 1: The Gateway */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border border-brand-gold/20 bg-brand-charcoal flex items-center justify-center mb-6 shadow-md shadow-brand-gold/5">
                      <span className="font-mono text-xs text-brand-gold">01</span>
                    </div>
                    <h4 className="text-lg font-serif font-medium text-brand-cream mb-2">Pre-arrival Mapping</h4>
                    <p className="text-xs text-brand-gray leading-relaxed font-sans px-2">
                      Two weeks before departure, you receive a custom Somatic Workbook. We chart your nervous system map, sleep metrics, and posture bracing notes.
                    </p>
                  </div>

                  {/* Stage 2: The Bali Space */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border border-brand-rose/20 bg-brand-charcoal flex items-center justify-center mb-6 shadow-md shadow-brand-rose/5">
                      <span className="font-mono text-xs text-brand-rose">02</span>
                    </div>
                    <h4 className="text-lg font-serif font-medium text-brand-cream mb-2">The Bali Intensive</h4>
                    <p className="text-xs text-brand-gray leading-relaxed font-sans px-2">
                      A beautifully sequenced, completely bespoke retreat combining deep somatic tissue work, vocal assertion, nature ritual, and unposed portraiture.
                    </p>
                  </div>

                  {/* Stage 3: The Anchor */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border border-brand-gold/20 bg-brand-charcoal flex items-center justify-center mb-6 shadow-md shadow-brand-gold/5">
                      <span className="font-mono text-xs text-brand-gold">03</span>
                    </div>
                    <h4 className="text-lg font-serif font-medium text-brand-cream mb-2">60-Day Anchoring</h4>
                    <p className="text-xs text-brand-gray leading-relaxed font-sans px-2">
                      Two post-immersion integration video sessions to secure changes in your everyday life. We adjust your visual identity files and narrative expressions.
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-brand-moss/10 border border-brand-moss/20">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-brand-gold mb-3 flex items-center">
                    <Sparkle className="w-4 h-4 mr-2" />
                    Crucial Principle: The Medicine & The Pathway
                  </h5>
                  <p className="text-xs text-brand-gray leading-relaxed font-sans">
                    Most profound transformations collapse because the transition back is too violent. We build "the pathway around the medicine." Every session begins and ends with nervous system mapping, making the next version of yourself comfortable and natural for your body to inhabit.
                  </p>
                </div>

                <div className="mt-10 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="flex items-center text-xs font-mono uppercase text-brand-gray hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Booking
                  </button>
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="flex items-center text-xs font-mono uppercase text-brand-gold hover:text-brand-amber-light transition-colors cursor-pointer"
                  >
                    Read Client Notes
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* STEP 5: REVIEW */}
          {currentStep === 5 && (
            <motion.div
              key="step-review"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CLIENT_LETTERS.map((letter, lIdx) => (
                  <GlassCard key={letter.id} className="p-6 md:p-8 flex flex-col justify-between" glowColor="none">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <MessageSquare className="w-5 h-5 text-brand-gold/40" />
                        <span className="text-[10px] font-mono text-brand-rose">{letter.date}</span>
                      </div>
                      
                      <p className="text-xs italic text-brand-cream/95 leading-relaxed font-sans mb-8">
                        "{letter.text}"
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                      <span className="text-sm font-serif font-medium text-brand-gold block">{letter.author}</span>
                      <span className="text-[10px] text-brand-gray font-mono block">{letter.location}</span>
                      <span className="text-[9px] text-brand-gray/50 font-sans block mt-1">{letter.context}</span>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Central final flow CTA */}
              <div className="text-center mt-12">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setCurrentQuestionIndex(0);
                  }}
                  className="px-8 py-4 rounded-full border border-brand-gold/30 hover:border-brand-gold/60 bg-brand-gold/5 text-brand-gold text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/5"
                >
                  Return and Recalibrate Your Stance
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
