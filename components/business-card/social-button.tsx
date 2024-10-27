"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  href: string;
}

export function SocialButton({ icon: Icon, href }: SocialButtonProps) {
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={handleClick}
    >
      <Icon className="w-4 h-4" />
    </Button>
  );
}