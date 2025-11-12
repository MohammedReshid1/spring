'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  buttonVariants,
  fadeInUp,
  staggerContainer,
  staggerItem,
  imageVariants,
  DURATION,
  viewportConfig
} from '@/lib/worldclass-animations'

// ═══════════════════════════════════════════════════════════════════════════
// HERO SECTION - WORLD-CLASS SPECIFICATIONS
// ═══════════════════════════════════════════════════════════════════════════
// Height: 600px FIXED (NOT 100vh - avoid awkward mobile scrolling)
// Background: Single high-quality image OR white + light-blue accent
// Content: Centered, generous spacing (80-120px section gap)
// Typography: 56px H1, 20px subheadline, 18px body
// Buttons: Primary + Secondary with -2px hover lift (200ms)
// Scroll indicator: Subtle bounce animation at bottom
// ═══════════════════════════════════════════════════════════════════════════

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/*
        CRITICAL: Fixed 600px height per specification
        NOT 100vh to avoid mobile scrolling issues
      */}
      <div className="relative h-[600px] flex items-center">

        {/* Container - Max-width 1280px, Centered */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1280px] w-full">

          {/* Two-column grid: Content left, Image right */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* ─────────────────────────────────────────────────────────── */}
            {/* LEFT COLUMN: Content */}
            {/* ─────────────────────────────────────────────────────────── */}
            <motion.div
              className="space-y-8 z-10"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >

              {/* Overline - Small, uppercase, brand blue */}
              <motion.div
                className="text-sm font-semibold text-[#1C74BB] uppercase tracking-wider"
                variants={staggerItem}
              >
                Excellence in Education Since 2006
              </motion.div>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* H1 HEADLINE - 56px, Bold, Charcoal */}
              {/* Line-height 1.2, Letter-spacing -0.01em */}
              {/* ═══════════════════════════════════════════════════════ */}
              <motion.h1
                className="text-5xl lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.01em]"
                variants={staggerItem}
              >
                Spring of Knowledge Academy
              </motion.h1>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* TAGLINE - 20px, Medium Gray */}
              {/* ═══════════════════════════════════════════════════════ */}
              <motion.p
                className="text-xl text-[#555555] font-light leading-relaxed"
                variants={staggerItem}
              >
                Where Excellence Is A Habit, Not A Goal
              </motion.p>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* DESCRIPTION - 18px Body, Line-height 1.7 */}
              {/* ═══════════════════════════════════════════════════════ */}
              <motion.p
                className="text-lg text-[#555555] leading-[1.7] max-w-xl"
                variants={staggerItem}
              >
                A premier educational institution in Addis Ababa, Ethiopia, providing world-class K-12 education with a proven track record of academic excellence and student success.
              </motion.p>

              {/* ═══════════════════════════════════════════════════════ */}
              {/* CTA BUTTONS - Primary + Secondary */}
              {/* Hover: -2px lift + shadow expansion (200ms) */}
              {/* ═══════════════════════════════════════════════════════ */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={staggerItem}
              >

                {/* PRIMARY BUTTON */}
                <motion.div
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-[#1C74BB] text-white px-8 py-[14px] text-base font-semibold rounded-md transition-all duration-200 hover:bg-[#155A96] hover:shadow-[0_4px_16px_rgba(28,116,187,0.15)]"
                  >
                    Apply Now
                  </Link>
                </motion.div>

                {/* SECONDARY BUTTON */}
                <motion.div
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href="/about"
                    className="inline-block border-2 border-[#1C74BB] text-[#1C74BB] px-8 py-[12px] text-base font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(28,116,187,0.05)] hover:border-[#155A96]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* ─────────────────────────────────────────────────────────── */}
            {/* RIGHT COLUMN: Hero Image */}
            {/* Reactive hover: 1.02 scale + brightness +5% (300ms) */}
            {/* ─────────────────────────────────────────────────────────── */}
            <motion.div
              className="relative h-[400px] lg:h-[500px]"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                className="relative w-full h-full rounded-lg overflow-hidden"
                variants={imageVariants}
                initial="rest"
                whileHover="hover"
              >
                <Image
                  src="/images/SKA-1.jpg"
                  alt="Spring of Knowledge Academy - Students in classroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SCROLL INDICATOR - Subtle bounce animation */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#666666] font-medium uppercase tracking-wider">
              Scroll
            </span>
            <svg
              className="w-6 h-6 text-[#1C74BB]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
