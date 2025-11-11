'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cardVariants, fadeInUp, staggerContainer, staggerItem, imageVariants, buttonVariants } from '@/lib/animations'

export default function TheCampus() {
  const campusFeatures = [
    {
      src: "/images/campus2.jpg",
      alt: "Our Branches",
      title: "Multiple Branches",
      description: "Conveniently located campuses across the city",
      link: "/branches"
    },
    {
      src: "/images/SKA-84.jpg",
      alt: "Student Activities",
      title: "Vibrant Activities",
      description: "Rich extracurricular programs and events",
      link: "/branches"
    },
    {
      src: "/images/SKA-26.jpg",
      alt: "Modern Facilities",
      title: "World-Class Facilities",
      description: "State-of-the-art learning environments",
      link: "/branches"
    },
  ]

  const stats = [
    { number: '3+', label: 'Campus Locations' },
    { number: '50+', label: 'Classrooms' },
    { number: '2', label: 'Libraries' },
    { number: '15+', label: 'Labs & Facilities' }
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

        {/* Section Header - World-Class Typography */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <div className="text-sm font-semibold text-[#1C74BB] uppercase tracking-wider mb-4">
            Campus Life
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Experience Our Campus
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto leading-[1.7]">
            Our state-of-the-art campuses provide the perfect environment for learning, growth, and personal development
          </p>
        </motion.div>

        {/* Campus Features Grid - Sophisticated Card Hover */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
        >
          {campusFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              initial="rest"
              whileHover="hover"
            >
              <Link href={feature.link}>
                <motion.div
                  className="bg-white border border-[#E8E8E8] rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                  variants={cardVariants}
                >
                  {/* Image - Reactive Hover */}
                  <motion.div
                    className="relative aspect-[4/3] bg-gray-100"
                    variants={imageVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Image
                      src={feature.src}
                      alt={feature.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Content - World-Class Spacing */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                    <p className="text-[#555555] leading-[1.7] mb-4">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#1C74BB] font-semibold transition-colors duration-150">
                      Explore <span>→</span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Campus Stats - Elegant CTA Section */}
        <motion.div
          className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg p-12"
          variants={fadeInUp}
        >
          {/* Stats Grid - Staggered Reveal */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={staggerItem}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#1C74BB] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#666666]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center pt-8 border-t border-[#E8E8E8]"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Ready to Visit Our Campus?</h3>
            <p className="text-[#555555] leading-[1.7] mb-8 max-w-2xl mx-auto">
              Schedule a visit to experience our world-class facilities and meet our dedicated faculty
            </p>

            {/* CTA Buttons - Elegant Hover States */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/contact"
                  className="inline-block bg-[#1C74BB] text-white px-8 py-4 text-center font-semibold rounded-md transition-colors duration-200 hover:bg-[#155A96] hover:shadow-[0_4px_16px_rgba(28,116,187,0.15)]"
                >
                  Schedule a Tour
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/gallery"
                  className="inline-block border-2 border-[#1C74BB] text-[#1C74BB] px-8 py-4 text-center font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(28,116,187,0.05)] hover:border-[#155A96]"
                >
                  View Gallery
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
