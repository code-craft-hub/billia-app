"use client";
import React, { Suspense } from "react";
import { Header } from "@/components/globals/Header";
import { AISection } from "@/components/features/home/AISection";
import { DownloadSection } from "@/components/features/home/DownloadSection";
import { TestimonialsSection } from "@/components/features/home/TestimonialsSection";
import { Footer } from "@/components/globals/Footer";
import { LoadingFallback } from "@/components/globals/Loader";
import { FeaturesSection } from "@/components/features/home/FeaturesSection";
import { HeroSection } from "@/components/features/home/HeroSection";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AISection />
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default page;
