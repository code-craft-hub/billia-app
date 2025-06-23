"use client";
import { CoreValuesSection } from "@/components/features/about/CoreValuesSection";
import { DownloadSection } from "@/components/features/about/DownloadSection";
import { WhyWeStartedSection } from "@/components/features/about/GetStartedSection";
import { HeroSection } from "@/components/features/about/HeroSection";
import { MissionVisionSection } from "@/components/features/about/MissionSection";
import { Footer } from "@/components/globals/Footer";
import { Header } from "@/components/globals/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyWeStartedSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default HomePage;
