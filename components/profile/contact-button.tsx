"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  variant?: "default" | "outline";
  disabled?: boolean;
}

export function ContactButton({ 
  icon: Icon, 
  label, 
  href, 
  variant = "outline",
  disabled = false 
}: ContactButtonProps) {
  return (
    <Button 
      variant={variant}
      className={`
        flex items-center gap-3 w-full h-12 
        text-sm font-medium tracking-wide
        transition-all duration-300 
        ${variant === "default" 
          ? "bg-transparent hover:bg-gray-50 text-gray-900 border border-gray-900 hover:border-gray-900 shadow-sm hover:shadow-md" 
          : "bg-transparent text-gray-900 hover:bg-white border border-gray-900 hover:border-gray-900"}
        ${disabled ? "opacity-60 cursor-not-allowed hover:scale-100" : "hover:scale-[1.02]"}
      `}
      onClick={() => !disabled && window.open(href, '_blank')}
      disabled={disabled}
    >
      <Icon className={`w-4 h-4 ${variant === "default" ? "stroke-[1.5]" : ""}`} />
      <span>{label}</span>
    </Button>
  );
}