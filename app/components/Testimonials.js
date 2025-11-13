"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cardVariants, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My experience here has been transformative. The faculty and resources have prepared me for a successful career in technology.",
      author: "Mohammed Abdulwasi",
      role: "Computer Science Graduate",
    },
    {
      quote: "The diverse community and innovative programs have broadened my perspective and opened up new opportunities beyond my expectations.",
      author: "Mahi Imran",
      role: "Business Administration Student",
    },
    {
      quote: "I've gained practical skills and industry connections that have jumpstarted my career and given me confidence in my abilities.",
      author: "Umer Ali",
      role: "Engineering Graduate",
    },
    {
      quote: "The supportive environment and challenging curriculum have helped me grow both personally and professionally in remarkable ways.",
      author: "Nejat Mohammed",
      role: "Medicine Student",
    }
  ]

  const stats = [
    { number: '2000+', label: 'Happy Students' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '95%', label: 'College Acceptance' },
    { number: '100+', label: 'Success Stories' }
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

        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <div className="text-sm font-semibold text-[#1C74BB] uppercase tracking-wider mb-4">
            Student Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            What Our Students Say
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto leading-[1.7]">
            Hear from our students about their transformative experiences at Spring of Knowledge Academy
          </p>
        </motion.div>

        {/* Testimonials Grid - Staggered Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              initial="rest"
              whileHover="hover"
            >
              <motion.div
                className="bg-white border border-[#E8E8E8] p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                variants={cardVariants}
              >
                {/* Quote Text */}
                <p className="mb-6 text-[#333333] leading-[1.7] text-base italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#E8E8E8]">
                  <div className="w-12 h-12 bg-[#1C74BB] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 rounded">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A1A]">{testimonial.author}</div>
                    <div className="text-sm text-[#666666]">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats - Staggered Reveal */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
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
                  {stat.number}
                </div>
                <div className="text-sm text-[#666666]">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
