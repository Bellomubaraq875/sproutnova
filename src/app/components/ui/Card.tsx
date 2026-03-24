import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-white/5
        backdrop-blur-md
        border border-white/10
        rounded-[2rem]
        p-8
        text-white
        transition-all duration-300
        ${hoverEffect ? "hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}