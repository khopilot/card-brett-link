"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ContactButtonProps {
  icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
}

export function ContactButton({ icon: Icon, children, href }: ContactButtonProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <Button 
      variant="outline" 
      className="flex items-center gap-2 w-full"
      onClick={handleClick}
    >
      <Icon className="w-4 h-4" />
      {children}
    </Button>
  );
}