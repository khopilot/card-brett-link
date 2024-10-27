"use client";

import { Phone, MapPin, Building2 } from "lucide-react";
import { ContactButton } from "./contact-button";

export function ProfileContact() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50/50 p-8 rounded-2xl border border-gray-200/50">
      <ContactButton
        icon={Phone}
        label="+855 76 710 5939"
        href="tel:+85576710593"
      />
      <ContactButton
        icon={MapPin}
        label="Macau & Phnom Penh"
        href="#"
      />
      <ContactButton
        icon={Building2}
        label="Atrium Consultancy"
        href="https://atrium-consultancy.com"
      />
      <ContactButton
        icon={Building2}
        label="Seayeen Group"
        href="https://seayeengroup.com"
      />
    </div>
  );
}