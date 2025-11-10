"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Award, Users, BookOpen, Trophy, ArrowRight, Sparkles, Target, Zap, Heart } from 'lucide-react'

const words = ["Excellence", "Innovation", "Growth", "Success"]

export default function DrivenByExcellence() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

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

  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Rigorous curriculum exceeding national standards",
      gradient: "from-amber-500 to-orange-600",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Dedicated teachers with 12+ years average experience",
      gradient: "from-blue-500 to-cyan-600",
      delay: 0.2
    },
    {
      icon: BookOpen,
      title: "Modern Learning",
      description: "Innovative teaching methods and state-of-the-art resources",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.3
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "98% success rate with outstanding student achievements",
      gradient: "from-green-500 to-emerald-600",
      delay: 0.4
    }
  ]

  return (
    <section ref={sectionRef} className="relative section-padding bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-brand-primary/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-academic-gold/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #1C74BB 1px, transparent 1px), linear-gradient(to bottom, #1C74BB 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image Side - Completely Redesigned */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary via-purple-500 to-academic-gold rounded-3xl opacity-20 blur-xl" />

              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/SKA-75.jpg"
                    alt="Excellence at Spring of Knowledge Academy"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-academic-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-brand-primary/50 rounded-3xl transition-all duration-500" />
              </motion.div>

              {/* Floating Badge - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 }}
                className="absolute -top-6 -left-6 z-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-academic-gold rounded-2xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-br from-academic-gold to-orange-500 text-white p-6 rounded-2xl shadow-2xl">
                    <Trophy className="w-10 h-10 mb-2" />
                    <div className="font-black text-2xl">Since</div>
                    <div className="font-black text-3xl">2006</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.4 }}
                className="absolute -bottom-8 -right-8 z-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary rounded-3xl blur-2xl opacity-60" />
                  <div className="relative bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white p-8 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-6 h-6 text-academic-gold" />
                      <div className="text-sm font-semibold opacity-90">Legacy of</div>
                    </div>
                    <div className="text-5xl font-black mb-1">18+</div>
                    <div className="text-lg font-semibold">Years Excellence</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-1/4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content Side - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="space-y-10 order-1 lg:order-2"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-6 py-3 rounded-full mb-6"
              >
                <Heart className="w-5 h-5 text-brand-primary" />
                <span className="text-brand-primary font-bold text-lg">Our Story</span>
              </motion.div>

              {/* Animated Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1]">
                <span className="text-gray-900">Driven by </span>
                <br />
                <span className="relative inline-block min-h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[currentWord]}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -50, rotateX: 90 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute left-0 bg-gradient-to-r from-brand-primary via-purple-600 to-academic-gold bg-clip-text text-transparent"
                      style={{ transformOrigin: '50% 50%', perspective: '1000px' }}
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="invisible">{words[0]}</span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-5"
            >
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Spring of Knowledge Academy S.C. was established in 2006 with a clear mission:
                <span className="font-semibold text-brand-primary"> to contribute to the human capital development of our nation through excellence in education.</span>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 18 years, we've been nurturing young minds, fostering critical thinking, and
                building strong foundations for tomorrow's leaders. Our commitment to educational excellence
                has made us a trusted institution for families seeking the best for their children.
              </p>
            </motion.div>

            {/* Feature Cards - Redesigned */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.7 + feature.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />

                  {/* Card Content */}
                  <div className="relative p-6 rounded-2xl bg-white border-2 border-gray-100 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-300">
                    {/* Icon with Gradient Background */}
                    <div className="relative mb-4 inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-30`} />
                      <div className={`relative bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-dark to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                {/* Content */}
                <span className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
