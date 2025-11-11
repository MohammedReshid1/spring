'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cardVariants, fadeInUp, staggerContainer, staggerItem, buttonVariants } from '@/lib/animations'

const stats = [
  { value: '2,000+', label: 'Students Enrolled' },
  { value: '100+', label: 'Expert Educators' },
  { value: '18+', label: 'Years of Excellence' },
  { value: '98%', label: 'Success Rate' },
  { value: '3+', label: 'Campus Locations' },
  { value: '12+', label: 'Programs Offered' },
  { value: '95%', label: 'Parent Satisfaction' },
  { value: '95%', label: 'College Acceptance' },
]

export default function Stats() {
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
            Our Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Excellence in Numbers
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto leading-[1.7]">
            Delivering measurable results and transforming lives through quality education since 2006
          </p>
        </motion.div>

        {/* Stats Grid - Staggered Reveal */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              initial="rest"
              whileHover="hover"
            >
              <motion.div
                className="text-center p-8 border border-[#E8E8E8] bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                variants={cardVariants}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#1C74BB] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#666666]">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Elegant Design */}
        <motion.div
          className="bg-[#FAFAFA] p-12 text-center border border-[#E8E8E8] rounded-lg"
          variants={fadeInUp}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-lg text-[#555555] mb-8 max-w-2xl mx-auto leading-[1.7]">
            Become part of a community that values excellence, innovation, and personal growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="inline-block bg-[#1C74BB] text-white px-8 py-4 font-semibold rounded-md transition-colors duration-200 hover:bg-[#155A96] hover:shadow-[0_4px_16px_rgba(28,116,187,0.15)]"
              >
                Apply Now
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/about"
                className="inline-block border-2 border-[#1C74BB] text-[#1C74BB] px-8 py-4 font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(28,116,187,0.05)] hover:border-[#155A96]"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
