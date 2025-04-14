"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const initialValue = 0;

          function animate(currentTime: number) {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(initialValue + progress * value));
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-satoshi">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-mirrorfi-cyan to-mirrorfi-blue">
        ${count}B+
      </span>
    </div>
  );
}

export default function VisionSection() {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-black/60 to-[#030303]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,122,253,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-28"
          >
            <h2 className="text-3xl md:text-5xl font-satoshi mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Unlock{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mirrorfi-cyan via-mirrorfi-blue to-mirrorfi-darkblue">
                Billions
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                {" "}
                in Idle Liquidity on Solana
              </span>
            </h2>
            <Counter value={50} duration={2500} />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-mirrorfi-blue via-mirrorfi-cyan to-transparent" />
              <p className="text-white/60 text-lg font-univa leading-relaxed">
                With better tools—not more education—we lower the barrier to
                entry and bring new and experienced users into yield-generating
                activities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-mirrorfi-cyan via-mirrorfi-blue to-transparent" />
              <p className="text-white/60 text-lg font-univa leading-relaxed">
                By simplifying interfaces and incentivizing strategists,
                MirrorFi supercharges liquidity and growth across the Solana
                DeFi ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
