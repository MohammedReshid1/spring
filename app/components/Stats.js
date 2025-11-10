'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NumberTicker from "@/components/ui/number-ticker"
import { GraduationCap, Users, Award, TrendingUp, BookOpen, Globe, Star, Target, Sparkles, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const stats = [
    {
      icon: Users,
      label: 'Students Enrolled',
      value: 2000,
      suffix: '+',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.5)',
      description: 'Across all programs',
      iconBg: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: GraduationCap,
      label: 'Expert Educators',
      value: 100,
      suffix: '+',
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.5)',
      description: 'Dedicated professionals',
      iconBg: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Award,
      label: 'Years of Excellence',
      value: 18,
      suffix: '+',
      gradient: 'from-amber-600 via-amber-500 to-orange-500',
      glowColor: 'rgba(245, 158, 11, 0.5)',
      description: 'Since 2006',
      iconBg: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: 98,
      suffix: '%',
      gradient: 'from-green-600 via-green-500 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.5)',
      description: 'Student achievement',
      iconBg: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: Globe,
      label: 'Campus Locations',
      value: 3,
      suffix: '+',
      gradient: 'from-red-600 via-red-500 to-rose-500',
      glowColor: 'rgba(239, 68, 68, 0.5)',
      description: 'Across the city',
      iconBg: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      icon: BookOpen,
      label: 'Programs Offered',
      value: 12,
      suffix: '+',
      gradient: 'from-indigo-600 via-indigo-500 to-blue-500',
      glowColor: 'rgba(99, 102, 241, 0.5)',
      description: 'Comprehensive curriculum',
      iconBg: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      icon: Star,
      label: 'Parent Satisfaction',
      value: 95,
      suffix: '%',
      gradient: 'from-yellow-600 via-yellow-500 to-amber-500',
      glowColor: 'rgba(234, 179, 8, 0.5)',
      description: 'Positive feedback',
      iconBg: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: Target,
      label: 'College Acceptance',
      value: 95,
      suffix: '%',
      gradient: 'from-teal-600 via-teal-500 to-cyan-500',
      glowColor: 'rgba(20, 184, 166, 0.5)',
      description: 'University admissions',
      iconBg: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20'
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
    <section ref={sectionRef} className="relative section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Large Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-academic-gold/10 to-orange-500/10 rounded-full blur-3xl" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #1C74BB 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
      </motion.div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 via-purple-500/10 to-academic-gold/10 border border-brand-primary/20 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-bold text-lg">Our Impact</span>
            <Sparkles className="w-5 h-5 text-academic-gold" />
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-gray-900">Excellence in </span>
            <span className="bg-gradient-to-r from-brand-primary via-purple-600 to-academic-gold bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Delivering measurable results and transforming lives through quality education since 2006
          </p>
        </motion.div>

        {/* Stats Grid - Redesigned */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${stat.glowColor}, transparent 70%)`,
                  filter: 'blur(20px)'
                }}
              />

              {/* Card */}
              <div className={`relative bg-white rounded-3xl p-8 border-2 ${stat.borderColor} group-hover:border-transparent shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>

                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                    opacity: 0.03
                  }} />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-xl`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Floating Sparkle */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className={`w-5 h-5 text-yellow-500`} />
                  </motion.div>
                </div>

                {/* Number */}
                <div className={`text-6xl font-black mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent relative`}>
                  <NumberTicker
                    initialValue={0}
                    targetValue={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                    start={isVisible}
                  />
                </div>

                {/* Label */}
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-brand-primary transition-colors">
                  {stat.label}
                </h3>

                {/* Description - Hidden by default, shown on hover */}
                <motion.p
                  className="text-sm text-gray-600 mt-auto"
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: 'auto' }}
                >
                  {stat.description}
                </motion.p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Completely Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-purple-600 to-academic-gold rounded-3xl opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />

          {/* Floating Orbs */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-64 h-64 bg-academic-gold/20 rounded-full blur-3xl"
              animate={{
                y: [0, -30, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          {/* Content */}
          <div className="relative p-12 md:p-16 text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">Join Us Today</span>
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Ready to Join Our
                <br />
                <span className="text-academic-gold">Success Story?</span>
              </h3>

              <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Become part of a community that values excellence, innovation, and personal growth
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 bg-white text-brand-primary px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-3">
                    <Award className="w-5 h-5" />
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
