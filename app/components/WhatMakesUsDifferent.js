"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cardVariants, fadeInUp, staggerContainer, staggerItem, imageVariants } from '@/lib/animations'

export default function WhatMakesUsDifferent() {
  const principles = [
    {
      title: 'Every Child Matters',
      description: 'Every child has the potential to learn and excel',
    },
    {
      title: 'Personalized Learning',
      description: 'We regard the prior knowledge and experience of each child',
    },
    {
      title: 'Real-World Connection',
      description: 'Linking the learning process to everyday experience',
    },
    {
      title: 'Family Partnership',
      description: 'We take families and parents as our principal partners',
    },
  ]

  const stats = [
    { number: '100%', label: 'Student Focus' },
    { number: '24/7', label: 'Parent Support' },
    { number: '1:15', label: 'Teacher Ratio' },
    { number: '95%', label: 'Satisfaction Rate' }
  ]

  return (
    <motion.section
      className="bg-white py-24 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <div className="text-sm font-semibold text-[#1C74BB] uppercase tracking-wider mb-4">
            Our Philosophy
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            What Makes Us Different
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto leading-[1.7]">
            Four core principles that guide our approach to education and shape the future of our students
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Principles Cards - Staggered Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  className="border border-[#E8E8E8] bg-white p-8 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                  variants={cardVariants}
                >
                  <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-[1.6]">
                    {principle.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Side - Reactive Hover */}
          <motion.div className="relative" variants={staggerItem}>
            <motion.div
              className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <Image
                src="/images/SKA-102.jpg"
                alt="What Makes Us Different"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats - Staggered Reveal */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
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
