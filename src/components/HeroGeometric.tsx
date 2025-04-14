"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric({
  badge = "MirrorFi",
  title1 = "Earn Yields",
  title2 = "With One Click",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 z-10">
        <InteractiveGridPattern
          width={65}
          height={65}
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            "skew-y-12 opacity-10"
          )}
          squaresClassName="stroke-white/20 [&:hover]:fill-white/10"
        />
      </div>

      {/* Multi-layered background gradients */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-mirrorfi-darkblue/20 via-[#030303] to-mirrorfi-blue/20" />

        {/* Accent gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-mirrorfi-cyan/5 via-transparent to-mirrorfi-blue/5" />
        <div className="absolute inset-0 bg-gradient-to-bl from-mirrorfi-darkblue/5 via-transparent to-mirrorfi-cyan/5" />

        {/* Center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(81,214,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,122,253,0.05),transparent_70%)]" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-[-20%] -left-[10%] w-[40%] h-[40%]">
        <div className="absolute inset-0 bg-gradient-to-r from-mirrorfi-cyan/10 to-mirrorfi-blue/10 blur-[120px] rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-[-10%] -right-[5%] w-[35%] h-[35%]">
        <div className="absolute inset-0 bg-gradient-to-l from-mirrorfi-blue/10 to-mirrorfi-darkblue/10 blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-mirrorfi-cyan/[0.25]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] z-20"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-mirrorfi-blue/[0.25]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%] z-20"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-mirrorfi-cyan/[0.25]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] z-20"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-mirrorfi-darkblue/[0.25]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%] z-20"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-mirrorfi-blue/[0.25]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%] z-20"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] mb-8 md:mb-12"
          >
            <Image
              src="MirrorFi-Logo-Blue.svg"
              alt="MirrorFi"
              width={18}
              height={18}
            />
            <span className="text-sm text-white/60 tracking-wide font-univa">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md :text-8xl mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 font-satoshi">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mirrorfi-cyan/80 via-mirrorfi-blue/80 to-mirrorfi-darkblue/80 font-satoshi">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed tracking-wide max-w-xl mx-auto px-4 font-univa">
              Social yield-strategy sharing platform where users can share their
              yield strategies and users can execute the same position in one
              click
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent pointer-events-none" />
    </div>
  );
}
