"use client";

import HeroGeometric from "@/components/HeroGeometric";
import MirrorStrategySection from "@/components/MirrorStrategySection";
import SolutionSection from "@/components/SolutionSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <HeroGeometric />
      <MirrorStrategySection />
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#030303] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <SolutionSection />
        <VisionSection />
        <Footer />
      </div>
    </div>
  );
}
