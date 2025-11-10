'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cardVariants, fadeInUp, staggerContainer, staggerItem, linkHover } from '@/lib/animations'

const programs = [
  {
    name: "Kindergarten",
    ageRange: "Ages 3-5",
    students: "150+ Students",
    description: "Nurturing young minds through play-based learning and gentle guidance in a safe, stimulating environment.",
    image: "/images/SKA-57.jpg",
  },
  {
    name: "Primary School",
    ageRange: "Grades 1-8",
    students: "500+ Students",
    description: "Comprehensive curriculum covering core subjects while emphasizing critical thinking, creativity, and character development.",
    image: "/images/SKA-48.jpg",
  },
  {
    name: "High School",
    ageRange: "Grades 9-12",
    students: "400+ Students",
    description: "Rigorous academic curriculum meeting national standards while preparing students for higher education and beyond.",
    image: "/images/SKA-85.jpg",
  },
]

export default function Programs() {
  return (
    <motion.section
      className="bg-white py-24 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header - World-Class Typography */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <div className="text-sm font-semibold text-[#1C74BB] uppercase tracking-wider mb-4">
            Academic Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Our Programs
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto leading-[1.7]">
            Comprehensive educational programs designed to nurture young minds and prepare students for success at every stage
          </p>
        </motion.div>

        {/* Programs Grid - Sophisticated Card Hover */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              initial="rest"
              whileHover="hover"
            >
              <motion.div
                className="bg-white border border-[#E8E8E8] rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                variants={cardVariants}
              >

              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content - World-Class Spacing (32px padding) */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#1A1A1A]">
                  {program.name}
                </h3>

                <div className="flex gap-4 text-sm text-[#666666]">
                  <span>{program.ageRange}</span>
                  <span>•</span>
                  <span>{program.students}</span>
                </div>

                <p className="text-[#555555] leading-[1.7]">
                  {program.description}
                </p>

                {/* Link with Animated Arrow */}
                <motion.div
                  variants={linkHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <Link
                    href="/departments"
                    className="inline-flex items-center gap-2 text-[#1C74BB] font-semibold transition-colors duration-150"
                  >
                    Learn More
                    <span className="inline-block">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Elegant Button */}
        <motion.div className="text-center pt-8" variants={fadeInUp}>
          <motion.div
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/departments"
              className="inline-block border-2 border-[#1C74BB] text-[#1C74BB] px-8 py-4 font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(28,116,187,0.05)] hover:border-[#155A96]"
            >
              View All Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
