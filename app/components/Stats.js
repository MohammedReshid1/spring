'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import NumberTicker from "@/components/ui/number-ticker"
import { GraduationCap, Users, Award, TrendingUp, BookOpen, Globe, Star, Target } from 'lucide-react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    {
      icon: Users,
      label: 'Students Enrolled',
      value: 2000,
      suffix: '+',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Across all programs'
    },
    {
      icon: GraduationCap,
      label: 'Expert Educators',
      value: 100,
      suffix: '+',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      description: 'Dedicated professionals'
    },
    {
      icon: Award,
      label: 'Years of Excellence',
      value: 18,
      suffix: '+',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      description: 'Since 2006'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: 98,
      suffix: '%',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      description: 'Student achievement'
    },
    {
      icon: Globe,
      label: 'Campus Locations',
      value: 3,
      suffix: '+',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      description: 'Across the city'
    },
    {
      icon: BookOpen,
      label: 'Programs Offered',
      value: 12,
      suffix: '+',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      description: 'Comprehensive curriculum'
    },
    {
      icon: Star,
      label: 'Parent Satisfaction',
      value: 95,
      suffix: '%',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      description: 'Positive feedback'
    },
    {
      icon: Target,
      label: 'College Acceptance',
      value: 95,
      suffix: '%',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      description: 'University admissions'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary-lighter/30 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-academic-gold/10 rounded-full blur-3xl -z-0"></div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-semibold text-lg mb-3 block">Our Impact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Excellence in <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable results and transforming lives through quality education since 2006
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`${stat.bgColor} p-8 rounded-3xl shadow-md hover:shadow-premium transition-all duration-300 h-full flex flex-col items-center text-center border border-transparent hover:border-white group-hover:scale-105`}>
                {/* Icon with Gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Animated Number */}
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  <NumberTicker
                    initialValue={0}
                    targetValue={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                    start={isVisible}
                  />
                </div>

                {/* Label */}
                <h3 className="font-bold text-lg mb-2 text-gray-900">{stat.label}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-3xl p-12 text-white shadow-premium-lg"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Story?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Become part of a community that values excellence, innovation, and personal growth
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
