import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar } from "lucide-react";
import { ContactButton } from "./contact-button";
import { SocialButton } from "./social-button";

export function ProfileCard() {
  return (
    <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-sm shadow-xl">
      <div className="p-6 sm:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">JD</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">John Doe</h1>
            <p className="text-lg text-slate-600 mt-1">Senior Software Engineer</p>
            <p className="text-sm text-slate-500 mt-1">San Francisco, CA</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">About</h2>
          <p className="text-slate-600 leading-relaxed">
            Passionate software engineer with 8+ years of experience in building scalable web applications.
            Specialized in React, Node.js, and cloud architecture. Always eager to learn and share knowledge
            with the community.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <ContactButton icon={Mail} href="mailto:john.doe@example.com">
            john.doe@example.com
          </ContactButton>
          <ContactButton icon={Phone} href="tel:+15551234567">
            +1 (555) 123-4567
          </ContactButton>
          <ContactButton icon={MapPin}>
            San Francisco, CA
          </ContactButton>
          <ContactButton icon={Calendar}>
            Available for projects
          </ContactButton>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL", "Next.js", "PostgreSQL"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <SocialButton 
            icon={Github} 
            href="https://github.com/johndoe" 
          />
          <SocialButton 
            icon={Linkedin} 
            href="https://linkedin.com/in/johndoe" 
          />
        </div>
      </div>
    </Card>
  );
}