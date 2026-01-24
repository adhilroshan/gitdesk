interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", hover = false, glow = false, onClick }: GlassCardProps) {
  const baseClasses = "glass-card rounded-2xl p-6";
  const hoverClasses = hover ? "glass-card-hover cursor-pointer" : "";
  const glowClasses = glow ? "glow-accent" : "";
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
