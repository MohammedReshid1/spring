"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, imageVariants, buttonVariants } from '@/lib/animations'

export default function DrivenByExcellence() {
  const features = [
    {
      title: 'Academic Excellence',
      description: 'Rigorous curriculum exceeding national standards'
    },
    {
      title: 'Experienced Faculty',
      description: 'Dedicated teachers with 12+ years average experience'
    },
    {
      title: 'Modern Learning',
      description: 'Innovative teaching methods and state-of-the-art resources'
    },
    {
      title: 'Proven Results',
      description: '98% success rate with outstanding achievements'
    }
  ]

  return (
    <motion.section
      className="bg-[#FAFAFA] py-24 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image Side - Reactive Hover */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={staggerItem}
          >
            <motion.div
              className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <Image
                src="/images/SKA-75.jpg"
                alt="Excellence at Spring of Knowledge Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          {/* Content Side - Staggered Reveal */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            variants={staggerItem}
          >
            {/* Header */}
            <motion.div variants={fadeInUp}>
              <div className="text-sm font-semibold text-[#1C74BB] uppercase tracking-wider mb-4">
                Our Story
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                Driven by Excellence
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div className="space-y-5" variants={fadeInUp}>
              <p className="text-lg text-[#333333] leading-[1.7]">
                Spring of Knowledge Academy S.C. was established in 2006 with a clear mission: to contribute to the human capital development of our nation through excellence in education.
              </p>
              <p className="text-lg text-[#555555] leading-[1.7]">
                For over 18 years, we've been nurturing young minds, fostering critical thinking, and building strong foundations for tomorrow's leaders. Our commitment to educational excellence has made us a trusted institution for families seeking the best for their children.
              </p>
            </motion.div>

            {/* Features - Staggered Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6 pt-4"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-[#1C74BB] pl-4"
                  variants={fadeInUp}
                >
                  <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-[1.6]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div className="pt-4" variants={fadeInUp}>
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/about"
                  className="inline-block bg-[#1C74BB] text-white px-8 py-4 font-semibold rounded-md transition-colors duration-200 hover:bg-[#155A96] hover:shadow-[0_4px_16px_rgba(28,116,187,0.15)]"
                >
                  Discover Our Story
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
