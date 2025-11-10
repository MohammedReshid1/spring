'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from 'framer-motion'
import { ArrowRight, Play, Award, TrendingUp, Users, GraduationCap, Sparkles } from 'lucide-react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const words = ['Excellence', 'Innovation', 'Growth', 'Success']
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-academic-navy"
    >
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <Image
          src="/images/SKA-1.jpg"
          alt="Spring of Knowledge Academy - World-Class Education"
          fill
          className="object-cover"
          quality={95}
          priority
          sizes="100vw"
        />

        {/* Multi-layer Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-academic-navy/95 via-brand-primary/85 to-academic-navy/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-academic-navy via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(28,116,187,0.2),transparent_50%)]" />
      </motion.div>

      {/* Floating Geometric Shapes (3D parallax effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mousePosition.x * (i % 3 + 1),
              y: mousePosition.y * (i % 3 + 1),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto w-full">

          {/* Premium Badge with Pulse Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-academic-gold/20 via-white/10 to-brand-primary/20 backdrop-blur-xl border border-white/20 rounded-full hover:border-academic-gold/50 transition-all duration-500 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-academic-gold/5 via-transparent to-brand-primary/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Sparkles className="w-4 h-4 text-academic-gold animate-pulse" />
              <span className="relative text-sm lg:text-base font-semibold bg-gradient-to-r from-academic-gold via-white to-brand-primary-light bg-clip-text text-transparent">
                Excellence in Education Since 2006
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-academic-gold"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Headline - Dramatic Split Design */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
              className="overflow-hidden mb-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                  Spring of
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 50 }}
              className="overflow-hidden relative"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter">
                <span className="inline-block relative">
                  <span className="relative z-10 bg-gradient-to-r from-academic-gold via-white to-brand-primary-light bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Knowledge
                  </span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-academic-gold/20 to-brand-primary/20 blur-3xl -z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-gray-300 mt-4"
              >
                ACADEMY
              </motion.p>
            </motion.div>
          </div>

          {/* Dynamic Tagline with Word Rotation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-6 h-16 sm:h-20 md:h-24 flex items-center justify-center"
          >
            <div className="relative">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200">
                Driven by{' '}
              </span>
              <div className="inline-block relative w-48 sm:w-56 md:w-64 lg:w-80 text-left">
                {words.map((word, index) => (
                  <motion.span
                    key={word}
                    className="absolute left-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-academic-gold via-brand-primary-light to-white bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentWord === index ? 1 : 0,
                      y: currentWord === index ? 0 : -20,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Where Excellence Is A Habit, Not A Goal
          </motion.p>

          {/* CTA Buttons - Redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl font-bold text-base sm:text-lg text-white overflow-hidden shadow-2xl shadow-brand-primary/50 hover:shadow-brand-primary/70 transition-all duration-300 w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-dark to-brand-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/about"
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl font-bold text-base sm:text-lg text-white hover:bg-white hover:text-academic-navy transition-all duration-300 w-full sm:w-auto text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Programs
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="w-5 h-5" />
                </motion.div>
              </span>
            </Link>

            {/* Tertiary CTA */}
            <Link
              href="/gallery"
              className="group relative px-6 py-4 sm:px-8 sm:py-5 text-white hover:text-academic-gold font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2"
            >
              <div className="relative">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-academic-gold/30 rounded-full blur-lg"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="relative">
                Virtual Tour
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-academic-gold group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Stats - Horizontal Scroll Design on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 max-w-5xl mx-auto">
              {[
                { icon: Users, number: '2,000+', label: 'Happy Students', color: 'from-blue-500 to-cyan-500' },
                { icon: GraduationCap, number: '100+', label: 'Expert Teachers', color: 'from-purple-500 to-pink-500' },
                { icon: Award, number: '18+', label: 'Years Excellence', color: 'from-amber-500 to-orange-500' },
                { icon: TrendingUp, number: '98%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:border-academic-gold/50 transition-all duration-300 cursor-default"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 text-center`}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-xs sm:text-sm text-gray-300 text-center font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator - Animated */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-white/70 text-xs uppercase tracking-widest font-medium group-hover:text-academic-gold transition-colors">
            Discover More
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-academic-gold transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-1.5 h-1.5 bg-academic-gold rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Add gradient animation to globals.css */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  )
}
