"use client";

import { Globe, Building2, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Position {
  title: string;
  company: string;
  location: string;
  website: string;
  comingSoon?: boolean;
  description?: string;
}

// Données des positions
const positions: Position[] = [
  {
    title: "CEO & Founder",
    company: "Atrium Consultancy",
    location: "Macau",
    website: "https://atrium-consultancy.com",
    description: "International Investment Advisory & Strategic Business Solutions"
  },
  {
    title: "Co-founder",
    company: "Seayeen Group",
    location: "Phnom Penh, Cambodia",
    website: "https://seayeengroup.com",
    description: "Strategic Business Development & Investment Solutions"
  },
  {
    title: "CEO & Founder",
    company: "BVI Consultancy",
    location: "British Virgin Islands",
    website: "#",
    comingSoon: true,
    description: "Global Investment Solutions & International Business Development"
  }
];

// Composant pour le bouton de contact
function WebsiteButton({ 
  href, 
  comingSoon, 
  variant = 'default' 
}: { 
  href: string; 
  comingSoon?: boolean;
  variant: 'default' | 'primary';
}) {
  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-xl
    font-medium text-sm tracking-wide transition-all duration-300
    ${comingSoon ? 'cursor-not-allowed opacity-80' : 'hover:shadow-lg'}
  `;

  const variants = {
    default: `
      bg-white text-gray-900 border border-gray-200/50
      ${!comingSoon && 'hover:bg-white hover:border-gray-300'}
    `,
    primary: `
      bg-gray-900 text-white border border-gray-800
      ${!comingSoon && 'hover:bg-gray-800'}
    `
  };

  const buttonContent = (
    <>
      <Globe className="w-4 h-4" />
      <span>{comingSoon ? "Website Coming Soon" : "Visit Website"}</span>
      {!comingSoon && href !== '#' && <ExternalLink className="w-3 h-3 ml-1" />}
    </>
  );

  if (comingSoon || href === '#') {
    return (
      <motion.button
        className={`${baseClasses} ${variants[variant]}`}
        disabled={comingSoon}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="no-underline"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {buttonContent}
      </motion.button>
    </a>
  );
}

// Composant pour une position individuelle
function PositionCard({ position, isFirst }: { position: Position; isFirst: boolean }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="group relative overflow-hidden"
    >
      <div className="
        flex flex-col sm:flex-row sm:items-center gap-6 justify-between
        bg-white/80 p-8 rounded-2xl border border-gray-200/50
        hover:bg-white/90 transition-all duration-300
        backdrop-blur-sm shadow-sm hover:shadow-md
      ">
        <div className="space-y-3">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-50 rounded-lg">
              <Building2 className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
              <p className="text-lg text-gray-700 font-medium mt-1">{position.company}</p>
              <div className="flex items-center gap-2 mt-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">{position.location}</p>
              </div>
            </div>
          </div>
          {position.description && (
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {position.description}
            </p>
          )}
        </div>

        <div className="flex-shrink-0">
          <WebsiteButton
            href={position.website}
            comingSoon={position.comingSoon}
            variant={isFirst ? 'primary' : 'default'}
          />
        </div>

        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-gray-50/50 via-white/50 to-gray-50/50
          transition-opacity duration-500 pointer-events-none
        " />
      </div>
    </motion.div>
  );
}

// Composant principal
export function ProfilePositions() {
  return (
    <motion.div 
      className="grid gap-6"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
      initial="hidden"
      animate="show"
    >
      {positions.map((position, index) => (
        <PositionCard 
          key={position.company} 
          position={position} 
          isFirst={index === 0} 
        />
      ))}
    </motion.div>
  );
}

export function PositionsSection() {
  return <ProfilePositions />;
}
