"use client";

import { Globe, Building2, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Position {
  title: string;
  company: string;
  location: string;
  website: string;
  comingSoon?: boolean;
  description?: string;
}

function WebsiteButton({ 
  href, 
  comingSoon
}: { 
  href: string; 
  comingSoon?: boolean;
}) {
  return (
    <motion.div
      whileHover={!comingSoon ? { scale: 1.02 } : undefined}
      whileTap={!comingSoon ? { scale: 0.98 } : undefined}
    >
      {!comingSoon ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <button className={cn(
            "inline-flex items-center gap-3",
            "px-6 py-3 rounded-2xl",
            "bg-[#111827] text-white",
            "transition-all duration-300",
            "hover:bg-[#1c2736] hover:shadow-md",
            "text-sm font-medium"
          )}>
            <div className="p-2 bg-white/10 rounded-full">
              <Globe className="w-4 h-4" />
            </div>
            <span>Visit Website</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </button>
        </a>
      ) : (
        <button 
          disabled
          className={cn(
            "inline-flex items-center gap-3",
            "px-6 py-3 rounded-2xl",
            "bg-white text-gray-400",
            "border border-gray-100",
            "transition-all duration-300",
            "text-sm font-medium",
            "cursor-not-allowed"
          )}
        >
          <div className="p-2 bg-gray-100 rounded-full">
            <Globe className="w-4 h-4" />
          </div>
          <span>Website Coming Soon</span>
        </button>
      )}
    </motion.div>
  );
}

function PositionCard({ position }: { position: Position }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="group"
    >
      <div className={cn(
        "p-8 rounded-2xl",
        "bg-white border border-gray-100",
        "transition-all duration-300",
        "hover:shadow-lg"
      )}>
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <div className="space-y-4">
            {/* Icon and Title */}
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-100 rounded-full">
                <Building2 className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {position.title}
                </h3>
                <p className="text-xl text-gray-600 mt-1">
                  {position.company}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 ml-14">
              <MapPin className="w-4 h-4" />
              <p className="text-base">{position.location}</p>
            </div>

            {/* Description */}
            {position.description && (
              <p className="text-gray-600 text-base leading-relaxed ml-14">
                {position.description}
              </p>
            )}
          </div>

          <div className="flex-shrink-0">
            <WebsiteButton
              href={position.website}
              comingSoon={position.comingSoon}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
    company: "BVI Company",
    location: "British Virgin Islands",
    website: "#",
    comingSoon: true,
    description: "Global Investment Solutions & International Business Development"
  }
];

export function ProfilePositions() {
  return (
    <div className="space-y-6">
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
        {positions.map((position) => (
          <PositionCard 
            key={position.company}
            position={position}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function PositionsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">
        Professional Positions
      </h2>
      <ProfilePositions />
    </div>
  );
}
