"use client";

import { Phone, MessageSquare, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const contactInfo = {
  phone: "+855 76 710 5939",
  telegram: "+855 76 710 5939",
  companies: [
    {
      name: "Atrium Consultancy",
      location: "Macau",
      icon: Building2
    },
    {
      name: "Seayeen Group",
      location: "Phnom Penh",
      icon: Building2
    },
    {
      name: "BVI Company",
      location: "British Virgin Islands",
      icon: Building2,
      disabled: true
    }
  ]
};

function ContactCard({ 
  icon: Icon,
  label,
  sublabel,
  href,
  variant = "default",
  disabled = false
}: {
  icon: any;
  label: string;
  sublabel: string;
  href: string;
  variant?: "default" | "dark";
  disabled?: boolean;
}) {
  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      className={cn("relative w-full", disabled && "opacity-50")}
    >
      <a 
        href={disabled ? "#" : href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(
          "flex items-center gap-4 p-4 sm:p-6 rounded-2xl",
          "transition-all duration-300",
          {
            "bg-[#111827] text-white": variant === "dark",
            "bg-white text-gray-900": variant === "default",
            "cursor-not-allowed": disabled,
            "hover:shadow-md": !disabled
          }
        )}
      >
        <div className={cn(
          "p-3 rounded-full",
          variant === "dark" ? "bg-white/10" : "bg-gray-100"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="flex flex-col">
          <span className="text-lg font-medium">{label}</span>
          <span className={cn(
            "text-sm",
            variant === "dark" ? "text-gray-300" : "text-gray-500"
          )}>
            {sublabel}
          </span>
        </div>
      </a>
    </motion.div>
  );
}

export function ContactSection() {
  return (
    <div className="space-y-4">
      {/* Communication Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ContactCard
          icon={Phone}
          label={contactInfo.phone}
          sublabel="Phone & WhatsApp"
          href={`tel:${contactInfo.phone}`}
          variant="dark"
        />
        
        <ContactCard
          icon={MessageSquare}
          label="Telegram"
          sublabel={contactInfo.telegram}
          href={`https://t.me/${contactInfo.telegram}`}
          variant="dark"
        />
      </div>

      {/* Company Cards */}
      <div className="grid grid-cols-1 gap-4">
        {contactInfo.companies.map((company, index) => (
          <ContactCard
            key={company.name}
            icon={company.icon}
            label={company.name}
            sublabel={company.location}
            href="#"
            variant="dark"
            disabled={company.disabled}
          />
        ))}
      </div>
    </div>
  );
}
