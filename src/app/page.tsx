"use client";

import HeroGeometric from "@/components/HeroGeometric";
import StrategyFlowDemo from "@/components/StrategyFlowDemo";
import SolutionSection from "@/components/SolutionSection";
import VisionSection from "@/components/VisionSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <HeroGeometric />
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-black/60 to-[#030303]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[30%] h-[40%] bg-mirrorfi-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[30%] h-[40%] bg-mirrorfi-cyan/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-satoshi text-white/90 text-center mb-6">
            Mirror Yield Strategies with Ease
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-univa">
            Explore how MirrorFi enables seamless strategy mirroring. Connect
            with expert yield farmers, validate strategies through our platform,
            and automatically mirror their successful approaches.
          </p>
          <StrategyFlowDemo />
          <div className="mt-12 text-center">
            <button className="px-8 py-3 text-lg font-satoshi font-medium text-white bg-gradient-to-r from-mirrorfi-blue to-mirrorfi-cyan rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_8px_32px_0_rgba(1,122,253,0.3)]">
              Try Beta
            </button>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#030303] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <SolutionSection />
        <VisionSection />
      </div>
    </div>
  );
}
