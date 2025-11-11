'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { buttonVariants, fadeInUp, staggerContainer, staggerItem, imageVariants } from '@/lib/animations'

export default function Hero() {
  return (
    <motion.section
      className="relative bg-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Container - World-Class Spacing (120px gap) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center py-24 lg:py-32">

          {/* Left Content */}
          <motion.div className="space-y-8" variants={staggerItem}>
            {/* Overline */}
            <motion.div
              className="text-sm font-semibold text-[#1C74BB] uppercase tracking-wider"
              variants={fadeInUp}
            >
              Excellence in Education Since 2006
            </motion.div>

            {/* Main Headline - 56px Bold Charcoal */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight"
              variants={fadeInUp}
            >
              Spring of Knowledge Academy
            </motion.h1>

            {/* Tagline - 20px Medium Gray */}
            <motion.p
              className="text-2xl text-[#333333] font-light leading-relaxed"
              variants={fadeInUp}
            >
              Where Excellence Is A Habit, Not A Goal
            </motion.p>

            {/* Description - 18px Body */}
            <motion.p
              className="text-lg text-[#555555] leading-[1.7]"
              variants={fadeInUp}
            >
              A premier educational institution in Addis Ababa, Ethiopia, providing world-class K-12 education with a proven track record of academic excellence and student success.
            </motion.p>

            {/* CTA Buttons - Sophisticated Hover States */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={fadeInUp}
            >
              {/* Primary Button - World-Class Hover */}
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/contact"
                  className="inline-block bg-[#1C74BB] text-white px-8 py-3.5 text-center font-semibold rounded-md transition-colors duration-200 hover:bg-[#155A96] hover:shadow-[0_4px_16px_rgba(28,116,187,0.15)]"
                >
                  Apply Now
                </Link>
              </motion.div>

              {/* Secondary Button - Elegant Transition */}
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/about"
                  className="inline-block border-2 border-[#1C74BB] text-[#1C74BB] px-8 py-3.5 text-center font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(28,116,187,0.05)] hover:border-[#155A96]"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators - Staggered Reveal */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-[#E8E8E8]"
              variants={fadeInUp}
            >
              <div>
                <div className="text-3xl font-bold text-[#1C74BB]">18+</div>
                <div className="text-sm text-[#666666] mt-1">Years Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1C74BB]">2,000+</div>
                <div className="text-sm text-[#666666] mt-1">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1C74BB]">100+</div>
                <div className="text-sm text-[#666666] mt-1">Educators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1C74BB]">98%</div>
                <div className="text-sm text-[#666666] mt-1">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Reactive Hover */}
          <motion.div
            className="relative"
            variants={staggerItem}
          >
            <motion.div
              className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <Image
                src="/images/SKA-1.jpg"
                alt="Spring of Knowledge Academy Campus"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}
