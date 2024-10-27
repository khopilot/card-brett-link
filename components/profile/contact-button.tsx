"use client";

import { Phone, MessageSquare, Building2, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = {
  phone: "+855 76 710 5939",
  telegram: "+855 76 710 5939",
  companies: [
    {
      name: "Atrium Consultancy",
      location: "Macau",
      website: "https://atrium-consultancy.com",
      primary: true
    },
    {
      name: "Seayeen Group",
      location: "Phnom Penh, Cambodia",
      website: "https://seayeengroup.com"
    },
    {
      name: "BVI Company",
      location: "British Virgin Islands",
      comingSoon: true
    }
  ]
};

export function ContactSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden"
        >
          <a 
            href={`tel:${contactInfo.phone}`}
            className="
              block p-6
              bg-gradient-to-br from-gray-900 to-gray-800
              rounded-2xl
              transition-all duration-300
              hover:shadow-xl
              relative z-10
            "
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-medium text-white">{contactInfo.phone}</p>
                <p className="text-sm text-gray-300">Phone & WhatsApp</p>
              </div>
            </div>
            {/* Gradient overlay */}
            <div className="
              absolute inset-0 
              bg-gradient-to-r from-white/0 via-white/5 to-white/0
              translate-x-[-100%] group-hover:translate-x-[100%]
              transition-transform duration-1000
              z-0
            "/>
          </a>
        </motion.div>

        {/* Telegram Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden"
        >
          <a 
            href={`https://t.me/${contactInfo.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block p-6
              bg-white
              border border-gray-200
              rounded-2xl
              transition-all duration-300
              hover:shadow-xl
              relative z-10
            "
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <MessageSquare className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">Telegram</p>
                <p className="text-sm text-gray-500">{contactInfo.telegram}</p>
              </div>
            </div>
            {/* Gradient overlay */}
            <div className="
              absolute inset-0 
              bg-gradient-to-r from-blue-50/0 via-blue-50/30 to-blue-50/0
              translate-x-[-100%] group-hover:translate-x-[100%]
              transition-transform duration-1000
              z-0
            "/>
          </a>
        </motion.div>
      </div>

      {/* Companies Section */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        {contactInfo.companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden"
          >
            <div className={`
              p-6
              rounded-2xl
              transition-all duration-300
              hover:shadow-xl
              relative z-10
              ${company.primary 
                ? 'bg-gradient-to-br from-gray-100 to-white border border-gray-200' 
                : 'bg-white border border-gray-200'
              }
            `}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`
                    p-3 rounded-xl
                    ${company.primary ? 'bg-gray-900' : 'bg-gray-100'}
                  `}>
                    <Building2 className={`
                      w-6 h-6
                      ${company.primary ? 'text-white' : 'text-gray-600'}
                    `} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{company.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-500">{company.location}</p>
                    </div>
                  </div>
                </div>
                {!company.comingSoon && (
                  <motion.a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      text-sm font-medium
                      rounded-xl
                      transition-all duration-300
                      hover:bg-gray-100
                    "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
