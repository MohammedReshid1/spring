'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { TypingAnimation } from '@/components/ui/typing-animation'
import { motion } from 'framer-motion'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-highland">
      {/* Background Image with warm overlay */}
      <Image
        src="/images/SKA-1.jpg"
        alt="Spring of Knowledge Academy Campus"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 opacity-25"
        style={{
          transform: `scale(${1 + scrollY * 0.0002})`,
        }}
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-parchment/90 via-parchment/70 to-amber/20"></div>

      {/* Decorative elements - inspired by Ethiopian manuscript illuminations */}
      <div className="absolute top-32 right-12 w-24 h-24 border-4 border-amber/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-eucalyptus/20 rounded-lg transform rotate-45 animate-float" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-coffee px-6 md:px-12 lg:px-24 text-center py-20">
        <motion.div
          className="mb-6 font-ui text-sm font-medium uppercase tracking-widest text-amber"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Addis Ababa, Ethiopia
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="block text-indigo">Spring of</span>
          <span className="block text-transparent bg-gradient-to-r from-amber via-terracotta to-amber bg-clip-text animate-warm-glow">Knowledge</span>
          <span className="block text-indigo">Academy</span>
        </motion.h1>

        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-lg md:text-xl font-serif italic text-eucalyptus border-l-3 border-amber pl-6 leading-relaxed">
            "Where Excellence is a Habit, Not a Goal"
          </p>
        </motion.div>

        <motion.p
          className="text-base md:text-lg max-w-3xl mb-12 text-coffee/80 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Nurturing minds and cultivating futures through quality education rooted in academic excellence, cultural heritage, and community values.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="bg-gradient-sunrise text-white font-ui font-semibold hover:shadow-warm border-2 border-amber/50 px-8 py-6 text-base rounded-lg shadow-elevated transition-all duration-300"
          >
            <Link href="/about">Discover Our Story</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-transparent text-indigo font-ui font-semibold border-2 border-indigo hover:bg-indigo hover:text-parchment px-8 py-6 text-base rounded-lg transition-all duration-300"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 font-ui text-sm text-coffee/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex items-center gap-6 justify-center flex-wrap">
            <span>🎓 K-12 Education</span>
            <span className="text-amber">•</span>
            <span>📚 Multiple Branches</span>
            <span className="text-amber">•</span>
            <span>🌟 Excellence Since 20XX</span>
          </div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
      >
        <div className="flex flex-col items-center gap-2 font-ui text-xs uppercase tracking-wider text-coffee/50">
          <span>Explore</span>
          <svg className="w-5 h-5 text-amber animate-float" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}