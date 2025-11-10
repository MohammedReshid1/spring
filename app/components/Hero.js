'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { TypingAnimation } from '@/components/ui/typing-animation'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Calendar } from 'lucide-react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/SKA-1.jpg"
          alt="Spring of Knowledge Academy Campus"
          fill
          className="object-cover"
          quality={100}
          priority
          style={{
            transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-academic-navy/80 via-brand-primary/70 to-brand-primary-dark/80" />

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 py-20">

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-academic-gold rounded-full animate-pulse"></span>
            Excellence in Education Since 2006
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-primary-light to-academic-gold">
              Spring of Knowledge
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">Academy</span>
          </h1>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 h-12"
        >
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            <TypingAnimation text="Driven by Excellence" speed={100} className="text-academic-gold" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl text-gray-200 font-light"
        >
          Where Excellence Is A Habit, Not A Goal
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16"
        >
          <Button
            size="lg"
            asChild
            className="bg-brand-primary hover:bg-brand-primary-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
          >
            <Link href="/about" className="flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            asChild
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-brand-primary text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Apply Now
            </Link>
          </Button>

          <Button
            size="lg"
            asChild
            variant="ghost"
            className="text-white hover:text-academic-gold px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group"
          >
            <Link href="/gallery" className="flex items-center gap-2">
              <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Virtual Tour
            </Link>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl"
        >
          {[
            { number: '18+', label: 'Years of Excellence' },
            { number: '2000+', label: 'Happy Students' },
            { number: '100+', label: 'Expert Teachers' },
            { number: '98%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-academic-gold mb-1">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-light">Scroll to explore</span>
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}