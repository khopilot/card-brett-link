"use client";

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface ExpertiseBadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

export function ExpertiseBadge({ 
  text, 
  icon = <Award className="w-4 h-4" />, 
  variant = 'default' 
}: ExpertiseBadgeProps) {
  // Définition des variantes de couleurs
  const variants = {
    default: {
      base: "bg-white/90 text-gray-900 border-gray-200/50 hover:border-gray-300",
      gradient: "from-gray-50/50 to-white/50",
      hover: "hover:bg-white hover:shadow-[0_8px_16px_-8px_rgba(0,0,0,0.1)]",
    },
    primary: {
      base: "bg-slate-900/90 text-white border-slate-700 hover:border-slate-600",
      gradient: "from-slate-800/50 to-slate-900/50",
      hover: "hover:bg-slate-900 hover:shadow-[0_8px_16px_-8px_rgba(0,0,0,0.3)]",
    },
    secondary: {
      base: "bg-blue-50/90 text-blue-900 border-blue-200/50 hover:border-blue-300",
      gradient: "from-blue-50/50 to-white/50",
      hover: "hover:bg-blue-50 hover:shadow-[0_8px_16px_-8px_rgba(59,130,246,0.2)]",
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`
        inline-flex
        items-center
        gap-2
        px-6 
        py-3
        rounded-2xl
        text-sm
        font-medium
        tracking-wide
        shadow-sm
        border
        backdrop-blur-sm
        transition-all
        duration-300
        cursor-default
        select-none
        ${selectedVariant.base}
        ${selectedVariant.hover}
        group
        relative
        overflow-hidden
      `}
    >
      {/* Icône */}
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      {/* Texte */}
      <span className="relative z-10 transition-transform duration-300">
        {text}
      </span>

      {/* Effet de gradient au survol */}
      <div className={`
        absolute 
        inset-0 
        bg-gradient-to-r 
        ${selectedVariant.gradient}
        opacity-0
        group-hover:opacity-100
        transition-all 
        duration-500
        ease-out
      `} />

      {/* Effet de brillance au survol */}
      <div className="
        absolute 
        inset-0 
        -translate-x-full
        group-hover:translate-x-full
        bg-gradient-to-r 
        from-transparent 
        via-white/10 
        to-transparent
        transition-transform 
        duration-1000
        ease-out
      " />
    </motion.span>
  );
}

// Exemple d'utilisation :
export function ExpertiseSection() {
  const expertises = [
    { text: "Investment Dispute Resolution", icon: <Award className="w-4 h-4" /> },
    { text: "Strategic Negotiations", icon: <Award className="w-4 h-4" /> },
    { text: "Asset Recovery", icon: <Award className="w-4 h-4" /> },
    // ... autres expertises
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {expertises.map((expertise, index) => (
        <ExpertiseBadge
          key={index}
          text={expertise.text}
          icon={expertise.icon}
          variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'default'}
        />
      ))}
    </div>
  );
}

