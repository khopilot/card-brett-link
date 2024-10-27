"use client";

import { Phone, MapPin, Building2, MessageSquare, Globe, ExternalLink, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Types
interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  variant?: "default" | "outline" | "primary" | "ghost"; // {{ edit_1 }}
  disabled?: boolean;
  sublabel?: string;
  showExternalIcon?: boolean;
}

interface Contact extends ContactButtonProps {
  variant: "default" | "outline" | "primary";
}

// Button Component
function ContactButton({ 
  icon: Icon, 
  label, 
  sublabel,
  href, 
  variant = "outline",
  disabled = false,
  showExternalIcon = false
}: ContactButtonProps) {
  const handleClick = () => {
    if (!disabled) {
      if (href.startsWith('tel:')) {
        window.location.href = href;
      } else if (href !== '#') {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      className="relative group"
    >
      <Button 
        variant="ghost"
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "w-full p-4 h-auto",
          "flex items-center gap-3",
          "text-sm font-medium",
          "transition-all duration-300",
          "relative overflow-hidden",
          {
            "bg-gray-900 text-white hover:bg-gray-800": variant === "primary",
            "bg-white hover:bg-gray-50": variant === "default",
            "bg-transparent border border-gray-200 hover:bg-gray-50": variant === "outline",
            "opacity-60 cursor-not-allowed": disabled,
            "cursor-pointer": !disabled
          }
        )}
      >
        <div className="flex items-center gap-3 z-10">
          <div className={cn(
            "p-2 rounded-lg transition-colors",
            {
              "bg-white/10": variant === "ghost",
              "bg-gray-100": variant !== "ghost"
            }
          )}>
            <Icon className="w-4 h-4" />
          </div>
          
          <div className="flex flex-col items-start min-w-0">
            <span className="truncate">{label}</span>
            {sublabel && (
              <span className="text-xs opacity-70 group-hover:opacity-90 transition-opacity">
                {sublabel}
              </span>
            )}
          </div>
        </div>

        {showExternalIcon && !disabled && (
          <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        )}

        <div className="
          absolute inset-0 
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:translate-x-full
          transition-transform duration-1000
        "/>
      </Button>
    </motion.div>
  );
}

// Contact Data
const contacts: Contact[] = [
  {
    icon: Phone,
    label: "+855 76 710 5939",
    sublabel: "Phone & WhatsApp",
    href: "tel:+85576710593",
    variant: "primary"
  },
  {
    icon: MessageSquare,
    label: "Telegram",
    sublabel: "+855 76 710 5939",
    href: "https://t.me/+85576710593",
    variant: "primary"
  },
  {
    icon: Building2,
    label: "Atrium Consultancy",
    sublabel: "Macau",
    href: "https://atrium-consultancy.com",
    variant: "primary",
    showExternalIcon: true
  },
  {
    icon: Building2,
    label: "Seayeen Group",
    sublabel: "Phnom Penh",
    href: "https://seayeengroup.com",
    variant: "primary",
    showExternalIcon: true
  },
  {
    icon: Building2,
    label: "BVI Company",
    sublabel: "British Virgin Islands",
    href: "#",
    variant: "outline",
    disabled: true
  }
];

// Animations
const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
};

// Main Component
export function ProfileContact() {
  return (
    <motion.div 
      variants={animations.container}
      initial="hidden"
      animate="show"
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-4",
        "bg-gradient-to-br from-gray-50/50 to-white/50",
        "p-8 rounded-2xl",
        "border border-gray-200/50",
        "backdrop-blur-sm",
        "shadow-sm hover:shadow-md",
        "transition-shadow duration-300"
      )}
    >
      {contacts.map((contact, index) => (
        <motion.div 
          key={`contact-${contact.label}-${index}`}
          variants={animations.item}
          className="w-full"
        >
          <ContactButton {...contact} />
        </motion.div>
      ))}
    </motion.div>
  );
}
