"use client";

import { motion } from "framer-motion";
import StrategyFlowDemo from "./StrategyFlowDemo";

export default function MirrorStrategySection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div
      custom={0}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-black/60 to-[#030303]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[30%] h-[40%] bg-mirrorfi-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[30%] h-[40%] bg-mirrorfi-cyan/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl font-satoshi text-white/90 text-center mb-10"
          >
            Mirror Yield Strategies with Ease
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-white/60 text-center mb-12 max-w-2xl mx-auto font-univa"
          >
            Explore how MirrorFi enables seamless strategy mirroring. Connect
            with expert yield farmers, validate strategies through our platform,
            and automatically mirror their successful approaches.
          </motion.p>
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="lg:mx-10"
          >
            <StrategyFlowDemo />
          </motion.div>
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 text-center"
          >
            <button className="px-8 py-3 text-lg font-satoshi font-medium text-white bg-gradient-to-r from-mirrorfi-blue to-mirrorfi-cyan rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_8px_32px_0_rgba(1,122,253,0.3)]">
              Try Beta
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
