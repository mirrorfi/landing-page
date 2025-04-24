"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  index: number;
}

function Feature({ title, description, index }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <div
        className={cn(
          "mt-2 w-2 h-2 rounded-full",
          "bg-gradient-to-r from-mirrorfi-blue to-mirrorfi-cyan",
          "group-hover:scale-150 transition-transform duration-300"
        )}
      />
      <div>
        <h3 className="font-satoshi font-medium text-lg text-white mb-2">
          {title}
        </h3>
        <p className="font-univa text-white/60">{description}</p>
      </div>
    </motion.div>
  );
}

export default function SolutionSection() {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-black/60 to-[#030303]/80" />
        <div className="absolute top-0 left-1/4 w-[40%] h-[60%] bg-mirrorfi-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[60%] bg-mirrorfi-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-satoshi text-center mb-28"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Social Alpha Meets{" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-mirrorfi-cyan via-mirrorfi-blue to-mirrorfi-darkblue">
            Yield Farming
          </span>
        </motion.h2>

        <div className="flex flex-col space-y-20 md:space-y-0 md:flex-row justify-evenly space-x-8">
          {/* For Experts */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="absolute -top-8 left-0 text-sm font-univa tracking-wider text-mirrorfi-blue/60"
            >
              FOR EXPERTS
            </motion.div>
            <div className="space-y-10 relative">
              <Feature
                title="Build yield strategies visually"
                description="Create sophisticated yield farming strategies using our intuitive visual builder"
                index={0}
              />
              <Feature
                title="Share strategies with the community"
                description="Publish your successful strategies and build your reputation"
                index={1}
              />
              <Feature
                title="Earn commissions from mirrored yield"
                description="Get rewarded when others mirror and succeed with your strategies"
                index={2}
              />
            </div>
          </div>

          {/* For Everyone Else */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="absolute -top-8 text-sm font-univa tracking-wider text-mirrorfi-cyan/60"
            >
              FOR EVERYONE ELSE
            </motion.div>
            <div className="space-y-10">
              <Feature
                title="Copy strategies in 1 click"
                description="Mirror successful strategies instantly without any complexity"
                index={3}
              />
              <Feature
                title="No complex setups or integrations"
                description="Everything is handled automatically in the background"
                index={4}
              />
              <Feature
                title="Trust the experts and earn"
                description="Follow proven strategists and earn yields effortlessly"
                index={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
