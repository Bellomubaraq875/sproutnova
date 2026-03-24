// app/components/ui/Button.tsx
import { ReactNode, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react"; 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "pill";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode; 
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {

  // Base structural classes
  const baseClasses = "group relative font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-3 active:scale-95";

  // 1. Variant Styles
  const variants = {
    
    primary: "bg-[var(--lab-sky)] text-white hover:bg-[var(--lab-sky-light)] shadow-lg hover:shadow-xl",

  
    secondary: "bg-[var(--lab-blue)] text-white hover:bg-[var(--lab-blue-dark)] shadow-lg",

    
    outline: "border-2 border-[var(--lab-blue)] text-[var(--lab-blue)] hover:bg-[var(--lab-blue)] hover:text-white",

    // THE NEW "EXPLORE MORE" STYLE
    // Transparent background, thin border, specific layout for icon
    pill: "bg-white/5 border border-white/20 text-white hover:bg-[var(--lab-blue)]/10 hover:border-[var(--lab-sky-dark)]/50 backdrop-blur-sm",
  };

  // 2. Size Styles
  
  const sizes = {
    sm: variant === 'pill' ? "pl-1 pr-4 py-1 text-sm" : "px-4 py-2 text-sm",
    md: variant === 'pill' ? "pl-2 pr-6 py-2 text-base" : "px-6 py-3 text-base",
    lg: variant === 'pill' ? "pl-2 pr-8 py-2 text-lg" : "px-8 py-4 text-lg",
  };

  // 3. Icon Circle Sizing (Only used for 'pill' variant)
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      {...props}
    >
      {/* If it's a 'pill' variant, we wrap the icon in the blue circle */}
      {variant === 'pill' ? (
        <span className={`${iconSizes[size]} rounded-full bg-[var(--lab-blue)] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-md`}>
          {icon || <ArrowUpRight size={size === 'sm' ? 16 : 20} />}
        </span>
      ) : (
        // For other variants, just render icon normally if it exists
        icon && <span>{icon}</span>
      )}

      {/* Button Text */}
      <span className={variant === 'pill' ? "group-hover:text-[var(--lab-blue-light)] transition-colors" : ""}>
        {children}
      </span>
    </button>
  );
}