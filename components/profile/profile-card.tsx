"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";
import { ProfileContact } from "./profile-contact";
import { ProfilePositions } from "./profile-positions";
import { ExpertiseBadge } from "./expertise-badge";

const positions = [
  {
    title: "CEO & Founder",
    company: "Atrium Consultancy",
    location: "Macau",
    website: "https://atrium-consultancy.com",
    comingSoon: true
  },
  {
    title: "Co-founder",
    company: "Seayeen Group",
    location: "Phnom Penh, Cambodia",
    website: "https://seayeengroup.com",
    comingSoon: true
  }
];

const expertise = [
  "Investment Dispute Resolution",
  "Strategic Negotiations",
  "Asset Recovery",
  "Government Relations",
  "Cross-border Solutions",
  "Investment Protection",
  "Development Rights",
  "Infrastructure Projects"
];

export function ProfileCard() {
  return (
    <Card className="glass-card shadow-2xl rounded-3xl overflow-hidden border-0 hover-lift">
      <div className="relative">
        {/* Header Background */}
        <div className="absolute inset-0 h-64">
          <Image
            src="/image/brettbusiness.jpg"
            alt="Background"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
        
        {/* Content */}
        <div className="relative px-6 sm:px-8 md:px-12 pt-16 pb-12">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="w-36 h-36 rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-white transform -rotate-3 hover:rotate-0 transition-all duration-500 relative z-10 animate-float">
                <Image
                  src="/image/brettbusiness.jpg"
                  alt="Brett Goulding"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="font-display text-5xl text-black bg-white/95 px-6 py-3 rounded-xl inline-block backdrop-blur-sm">
                  Brett Goulding
                </h1>
                <p className="text-2xl text-gray-100 font-medium mt-4 font-display">International Business Consultant</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-900 bg-white/95 px-4 py-1.5 rounded-full shadow-sm border border-gray-200/50">
                  Macau
                </span>
                <span className="text-white/80">•</span>
                <span className="text-sm font-medium text-gray-900 bg-white/95 px-4 py-1.5 rounded-full shadow-sm border border-gray-200/50">
                  Phnom Penh
                </span>
                <span className="text-white/80">•</span>
                <span className="text-sm font-medium text-gray-900 bg-white/95 px-4 py-1.5 rounded-full shadow-sm border border-gray-200/50">
                  BVI
                </span>
              </div>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Executive Overview</h2>
            <p className="text-gray-700 leading-relaxed font-medium tracking-wide">
              Accomplished international consultant and business strategist, specializing in complex dispute resolution and high-stakes negotiations across Asia. Expert in resolving sophisticated international business challenges, particularly in investment recovery and cross-border solutions.
            </p>
          </div>

          {/* Professional Positions */}
          <div className="mb-16">
            <SectionHeading>Professional Positions</SectionHeading>
            <ProfilePositions />
          </div>

          {/* Areas of Expertise */}
          <div className="mb-16">
            <SectionHeading>Areas of Expertise</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <ExpertiseBadge key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <SectionHeading>Contact Information</SectionHeading>
            <ProfileContact />
          </div>
        </div>
      </div>
    </Card>
  );
}
