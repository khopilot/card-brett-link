"use client";

import { Globe } from "lucide-react";
import { ContactButton } from "./contact-button";

interface Position {
  title: string;
  company: string;
  location: string;
  website: string;
  comingSoon?: boolean;
}

export function ProfilePositions({ positions }: { positions: Position[] }) {
  return (
    <div className="grid gap-6">
      {positions.map((position, index) => (
        <div 
          key={index} 
          className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between bg-gray-50/50 p-8 rounded-2xl border border-gray-200/50 hover:bg-gray-50/80 transition-colors duration-200"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
            <p className="text-lg text-gray-700 font-medium mt-2">{position.company}</p>
            <p className="text-sm text-gray-500 mt-1">{position.location}</p>
          </div>
          <ContactButton
            icon={Globe}
            label={position.comingSoon ? "Website Coming Soon" : "Visit Website"}
            href={position.website}
            variant="default"
            disabled={position.comingSoon}
          />
        </div>
      ))}
    </div>
  );
}