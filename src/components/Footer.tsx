"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-white/60 hover:text-white transition-colors duration-200 font-univa"
    >
      {children}
    </a>
  );
}

function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className={cn(
          "px-4 py-2 bg-white/5 border border-white/10 rounded-lg",
          "text-white placeholder:text-white/40",
          "focus:outline-none focus:ring-2 focus:ring-mirrorfi-blue/50",
          "font-univa"
        )}
      />
      <button
        type="submit"
        className={cn(
          "px-6 py-2 bg-gradient-to-r from-mirrorfi-blue to-mirrorfi-cyan",
          "text-white font-medium rounded-lg",
          "hover:shadow-[0_0_20px_rgba(1,122,253,0.3)]",
          "transition-shadow duration-300",
          "font-satoshi"
        )}
      >
        Subscribe
      </button>
    </form>
  );
}

export default function Footer() {
  const staggerDelay = 0.1;

  return (
    <footer className="w-full py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <Image
              src="/MirrorFi-Logo-Blue.svg"
              alt="MirrorFi"
              width={120}
              height={30}
              className="mb-6"
            />
            <p className="text-white/60 font-univa mb-6">
              The premier social yield farming platform on Solana. Build, share,
              and mirror successful DeFi strategies.
            </p>
            <div className="flex gap-4">
              <FooterLink href="#">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <i className="fab fa-twitter text-lg" />
                </div>
              </FooterLink>
              <FooterLink href="#">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <i className="fab fa-discord text-lg" />
                </div>
              </FooterLink>
              <FooterLink href="#">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <i className="fab fa-github text-lg" />
                </div>
              </FooterLink>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: staggerDelay }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-white font-satoshi font-medium mb-4">
              Platform
            </h3>
            <div className="space-y-3 flex flex-col">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Developers</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: staggerDelay * 2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-white font-satoshi font-medium mb-4">
              Company
            </h3>
            <div className="space-y-3 flex flex-col">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Press Kit</FooterLink>
            </div>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: staggerDelay * 3 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h3 className="text-white font-satoshi font-medium mb-4">
              Join Our Community
            </h3>
            <p className="text-white/60 font-univa mb-4">
              Stay updated with the latest features and releases.
            </p>
            <NewsletterForm />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 font-univa text-sm">
              © 2025 MirrorFi. All rights reserved.
            </div>
            <div className="flex gap-6">
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Security</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
