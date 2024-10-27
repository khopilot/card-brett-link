import { ProfileCard } from "@/components/profile/profile-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 sm:p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <ProfileCard />
      </div>
    </main>
  );
}