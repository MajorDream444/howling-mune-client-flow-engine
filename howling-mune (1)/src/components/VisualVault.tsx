import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, 
  Tag, 
  FileText, 
  Compass, 
  Inbox, 
  ArrowRight, 
  ChevronRight, 
  User, 
  Mail, 
  MessageSquare, 
  Check, 
  Lock,
  Sparkle,
  Image as ImageIcon,
  BookOpen
} from "lucide-react";
import { VAULT_ITEMS } from "../data";
import { VaultItem } from "../types";
import { GlassCard } from "./ui/GlassCard";
import { ShimmerImage } from "./ui/ShimmerImage";
import { cn } from "@/src/lib/utils";

export const VisualVault: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<VaultItem>(VAULT_ITEMS[0]);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [isInquiring, setIsInquiring] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryDetails, setInquiryDetails] = useState({
    name: "",
    email: "",
    usageIntention: "",
    notes: ""
  });
  
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(VAULT_ITEMS.flatMap((item) => item.tags))
  );

  const filteredItems = selectedTag 
    ? VAULT_ITEMS.filter(item => item.tags.includes(selectedTag))
    : VAULT_ITEMS;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsInquiring(true);
    
    setTimeout(() => {
      const data = {
        ...inquiryDetails,
        artworkTitle: selectedItem.title,
        artworkId: selectedItem.id,
        submittedAt: new Date().toISOString()
      };
      localStorage.setItem(`howling_mune_inquiry_${selectedItem.id}`, JSON.stringify(data));
      setIsInquiring(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section 
      className="relative bg-brand-deep py-20 md:py-32 overflow-hidden border-t border-white/5" 
      id="visual-vault"
    >
      {/* Editorial Watermark Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif font-bold text-brand-moss/5 tracking-[0.2em] uppercase select-none pointer-events-none z-0">
        ARCHIVE
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Segment */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold mb-3 block">
            The Living Archive
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-cream font-medium tracking-tight mb-4">
            The Visual Vault
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="text-brand-gray max-w-2xl mx-auto font-sans text-sm md:text-base leading-relaxed">
            “Some images are not just photographs. They are records of becoming.”
            <span className="block mt-2 text-xs font-mono text-brand-rose">
              Howling MUNE is a living sanctuary for Theo’s fine art photography, visual identity study, and transition archives.
            </span>
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT PANEL: The Archive Grid list */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                <span className="text-xs font-mono text-brand-gray tracking-wider">
                  Selected Plates
                </span>
                <span className="text-[10px] font-mono text-brand-gold">
                  {filteredItems.length} Available
                </span>
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={cn(
                    "text-[10px] font-mono px-3 py-1 rounded-full border transition-all",
                    selectedTag === null 
                      ? "bg-brand-gold/10 border-brand-gold text-brand-gold" 
                      : "border-white/5 text-brand-gray hover:border-white/10 hover:text-white"
                  )}
                >
                  All Plates
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={cn(
                      "text-[10px] font-mono px-3 py-1 rounded-full border transition-all",
                      selectedTag === tag 
                        ? "bg-brand-gold/10 border-brand-gold text-brand-gold" 
                        : "border-white/5 text-brand-gray hover:border-white/10 hover:text-white"
                    )}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 no-scrollbar">
                {filteredItems.map((item) => {
                  const isSelected = item.id === selectedItem.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedItem(item);
                        setShowInquiryForm(false);
                        setIsSubmitted(false);
                      }}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-center space-x-4",
                        isSelected 
                          ? "bg-brand-moss/30 border-brand-gold/40 shadow-md shadow-brand-gold/5" 
                          : "bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10"
                      )}
                    >
                      <div className="w-12 h-16 rounded overflow-hidden shrink-0 border border-white/5">
                        <ShimmerImage 
                          src={item.imageUrl} 
                          alt={item.title} 
                          imgClassName="grayscale opacity-80"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-mono text-brand-rose block mb-1">
                          {item.collection}
                        </span>
                        <h4 className={cn(
                          "text-sm font-serif font-medium truncate",
                          isSelected ? "text-brand-cream" : "text-brand-gray"
                        )}>
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-brand-gray/60 block mt-0.5">
                          {item.usageType}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className={cn(
                          "text-[9px] font-mono px-2 py-0.5 rounded-full border",
                          item.licensingStatus === "Available" && "border-brand-gold/20 bg-brand-gold/5 text-brand-gold",
                          item.licensingStatus === "Reserved" && "border-brand-rose/20 bg-brand-rose/5 text-brand-rose",
                          item.licensingStatus === "Licensed" && "border-white/10 bg-white/5 text-brand-gray"
                        )}>
                          {item.licensingStatus}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Strategic Context Card */}
            <div className="mt-6 p-4 rounded-xl bg-brand-moss/15 border border-brand-moss/20">
              <h4 className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Photography Lessons & Education
              </h4>
              <p className="text-[11px] text-brand-gray leading-relaxed">
                Z’s visual methodologies teach creators and therapists how to use natural low-light photography as an instrument of psychological mirror-work, integration modeling, and nervous system mapping.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: Large Focal Piece Display */}
          <div className="lg:col-span-7">
            <GlassCard className="h-full flex flex-col justify-between p-6 md:p-8" glowColor="amber">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Large high-end fine art image display */}
                <div className="md:col-span-6">
                  <div className="relative group overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-charcoal aspect-[3/4] shadow-2xl">
                    <ShimmerImage 
                      src={selectedItem.imageUrl} 
                      alt={selectedItem.title} 
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-20">
                      <span className="text-[9px] font-mono text-brand-gold uppercase tracking-wider">
                        Plate Reference: {selectedItem.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conceptual metadata and write-up */}
                <div className="md:col-span-6 space-y-5">
                  <div>
                    <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block mb-1">
                      {selectedItem.collection}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif text-brand-cream font-medium tracking-tight">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <p className="text-xs text-brand-gray leading-relaxed font-sans font-light italic">
                    "{selectedItem.story}"
                  </p>

                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-brand-gray/60 font-mono">Format</span>
                      <span className="text-brand-cream font-mono text-[11px]">{selectedItem.usageType}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-brand-gray/60 font-mono">Status</span>
                      <span className="text-brand-gold font-mono text-[11px]">{selectedItem.licensingStatus}</span>
                    </div>
                  </div>

                  {/* Tags block */}
                  <div className="pt-2">
                    <span className="text-[9px] font-mono text-brand-gray uppercase tracking-wider block mb-2">
                      Somatic Keynotes:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[9px] font-mono bg-brand-charcoal text-brand-rose border border-white/5 px-2 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic CTAs / Inquiry overlay */}
              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={() => {
                    const scrollElement = document.getElementById("client-flow");
                    if (scrollElement) {
                      scrollElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/10 hover:border-brand-gold/30 text-brand-cream text-xs font-mono uppercase tracking-wider flex items-center justify-center transition-all duration-300"
                >
                  <Camera className="w-3.5 h-3.5 mr-2 text-brand-gold" />
                  Explore the Visual Vault
                </button>

                <button
                  onClick={() => setShowInquiryForm(!showInquiryForm)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-gold hover:bg-brand-amber-light text-brand-charcoal text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center transition-all duration-300"
                >
                  Inquire About Licensing
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* COLLAPSIBLE INQUIRY DRAWER */}
        <AnimatePresence>
          {showInquiryForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <GlassCard className="p-8 max-w-3xl mx-auto mb-12 border-brand-rose/20 bg-brand-moss/5" glowColor="none">
                <div className="text-center mb-8">
                  <span className="text-[10px] font-mono text-brand-rose uppercase tracking-widest block mb-1">
                    Confidential Submission
                  </span>
                  <h4 className="text-xl font-serif text-brand-cream font-medium">
                    Licensing & Co-creative Inquiry
                  </h4>
                  <p className="text-xs text-brand-gray mt-1">
                    You are inquiring regarding: <strong className="text-brand-gold">"{selectedItem.title}"</strong>
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-5 h-5 text-brand-gold" />
                    </div>
                    <p className="text-sm text-brand-cream">Inquiry successfully registered with the archive</p>
                    <p className="text-xs text-brand-gray mt-2 max-w-md mx-auto">
                      Theo or Z will get in touch with you directly via email within 2 business days to discuss usage rates, print options, or physical frame shipping.
                    </p>
                    <button
                      onClick={() => {
                        setShowInquiryForm(false);
                        setIsSubmitted(false);
                      }}
                      className="mt-6 text-xs font-mono text-brand-rose hover:text-white uppercase tracking-wider"
                    >
                      Close Inquiry Drawer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-wider text-brand-gray block mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-gray" />
                          <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={inquiryDetails.name}
                            onChange={(e) => setInquiryDetails({ ...inquiryDetails, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-lg text-xs text-brand-cream outline-none font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[9px] font-mono uppercase tracking-wider text-brand-gray block mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-gray" />
                          <input
                            type="email"
                            required
                            placeholder="you@domain.com"
                            value={inquiryDetails.email}
                            onChange={(e) => setInquiryDetails({ ...inquiryDetails, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-lg text-xs text-brand-cream outline-none font-sans"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-[9px] font-mono uppercase tracking-wider text-brand-gray block mb-1">
                        Intended Usage & Medium
                      </label>
                      <select
                        value={inquiryDetails.usageIntention}
                        onChange={(e) => setInquiryDetails({ ...inquiryDetails, usageIntention: e.target.value })}
                        className="w-full px-3 py-2.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-lg text-xs text-brand-cream outline-none font-sans appearance-none cursor-pointer"
                      >
                        <option>Exclusive Digital Brand License (Single Entity)</option>
                        <option>Editorial / Book Cover / Podcast Art</option>
                        <option>Archival Giclée Print for Private/Studio Space</option>
                        <option>Co-creative Educational Alliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] font-mono uppercase tracking-wider text-brand-gray block mb-1">
                        Notes & Alignment Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please share where you intend to display the image or how it aligns with your brand's somatic direction..."
                        value={inquiryDetails.notes}
                        onChange={(e) => setInquiryDetails({ ...inquiryDetails, notes: e.target.value })}
                        className="w-full px-3 py-2.5 bg-brand-charcoal border border-white/10 focus:border-brand-gold/50 rounded-lg text-xs text-brand-cream outline-none font-sans resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2 text-[10px] text-brand-gray/60 pt-1">
                      <Lock className="w-3 h-3 text-brand-gold" />
                      <span>Confidential secure form routing. Strictly no unsolicited emails or promotional material.</span>
                    </div>

                    <div className="pt-2 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowInquiryForm(false)}
                        className="py-2.5 px-5 rounded-full border border-white/10 hover:bg-white/5 text-[10px] font-mono uppercase tracking-wider text-brand-gray"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isInquiring}
                        className="py-2.5 px-6 rounded-full bg-brand-gold hover:bg-brand-amber-light text-brand-charcoal font-medium text-[10px] font-mono uppercase tracking-wider"
                      >
                        {isInquiring ? "Submitting Inquiry..." : "Submit Inquiry to Theo"}
                      </button>
                    </div>
                  </form>
                )}
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
