import React from "react";
import { cn } from "@/src/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: "amber" | "moss" | "none";
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowColor = "none",
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500",
        hoverEffect && "glass-card-hover",
        className
      )}
      {...props}
    >
      {/* Decorative Glow Dots */}
      {glowColor === "amber" && (
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
      )}
      {glowColor === "moss" && (
        <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-brand-moss/30 rounded-full blur-2xl pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
