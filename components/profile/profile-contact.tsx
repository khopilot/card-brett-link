"use client";

import { Phone, MapPin, Building2, MessageSquare, ExternalLink, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  href: string;
  disabled?: boolean;
}

function ContactButton({ 
  icon: Icon, 
  label, 
  sublabel,
  href,  
  disabled = false,
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
      className="relative"
    >
      <Button 
        variant="ghost"
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "w-full h-auto p-4",
          "flex items-center gap-4",
          "rounded-2xl",
          "transition-all duration-300",
          {
            "bg-[#111827] text-white hover:bg-[#1c2736]": !disabled,
            "bg-white border border-gray-100 text-gray-400": disabled
          }
        )}
      >
        <div className={cn(
          "p-2 rounded-full",
          disabled ? "bg-gray-100" : "bg-white/10"
        )}>
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="flex flex-col items-start">
          <span className="text-base font-medium">{label}</span>
          <span className={cn(
            "text-sm",
            disabled ? "text-gray-400" : "text-gray-300"
          )}>
            {sublabel}
          </span>
        </div>
      </Button>
    </motion.div>
  );
}

const contacts = [
  {
    icon: Phone,
    label: "+855 76 710 5939",
    sublabel: "Phone & WhatsApp",
    href: "tel:+85576710593",
  },
  {
    icon: MessageSquare,
    label: "Telegram",
    sublabel: "+855 76 710 5939",
    href: "https://t.me/+85576710593",
  },
  {
    icon: Building2,
    label: "Atrium Consultancy",
    sublabel: "Macau",
    href: "https://atrium-consultancy.com",
  },
  {
    icon: Building2,
    label: "Seayeen Group",
    sublabel: "Phnom Penh",
    href: "https://seayeengroup.com",
  },
  {
    icon: Building2,
    label: "BVI Company",
    sublabel: "British Virgin Islands",
    href: "#",
    disabled: true
  }
];

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

export function ProfileContact() {
  return (
    <motion.div 
      variants={animations.container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {contacts.map((contact, index) => (
        <motion.div 
          key={`contact-${contact.label}-${index}`}
          variants={animations.item}
          className={cn(
            "w-full",
            // Les entreprises prennent toute la largeur sur mobile
            (index >= 2) && "col-span-2"
          )}
        >
          <ContactButton {...contact} />
        </motion.div>
      ))}
    </motion.div>
  );
}
