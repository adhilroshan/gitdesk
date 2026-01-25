interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", hover = false, glow = false, onClick }: GlassCardProps) {
  const baseClasses = "glass-card rounded-2xl p-6 border border-border-subtle bg-panel/30";
  const hoverClasses = hover ? "hover:translate-y-[-2px] hover:bg-panel/50 hover:border-ui-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer" : "";
  const glowClasses = glow ? "shadow-[0_0_30px_rgba(88,166,255,0.15)]" : "";
  const clickProp = onClick ? { onClick } : {};

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}
      {...clickProp}
    >
      {children}
    </div>
  );
}
