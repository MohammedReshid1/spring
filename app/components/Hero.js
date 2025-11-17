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
    <section className="relative h-screen overflow-hidden bg-pure-white">
      {/* Background Image with high contrast overlay */}
      <Image
        src="/images/SKA-1.jpg"
        alt="Spring of Knowledge Academy Campus"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 mix-blend-luminosity opacity-20"
        style={{
          transform: `scale(${1 + scrollY * 0.0003})`,
        }}
      />

      {/* BRUTALIST GEOMETRIC SHAPES */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-electric-pink animate-rotate opacity-10"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border-8 border-cyber-yellow opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-pure-black px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-electric-pink"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          [EDUCATION_SYSTEM.EXE]
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-8 leading-none uppercase"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">SPRING</span>
          <span className="block text-electric-pink">OF</span>
          <span className="block">KNOWLEDGE</span>
        </motion.h1>

        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-mono uppercase tracking-wide border-l-4 border-electric-pink pl-6">
            WHERE EXCELLENCE IS A HABIT NOT A GOAL
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex gap-4 flex-wrap"
        >
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="bg-electric-pink text-pure-black font-mono font-bold hover:bg-cyber-yellow border-4 border-pure-black px-8 py-6 text-base uppercase tracking-wide shadow-brutal hover:shadow-brutal-lg transition-all duration-150 rounded-none"
          >
            <Link href="/about">EXPLORE →</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-transparent text-pure-black font-mono font-bold border-4 border-pure-black hover:bg-pure-black hover:text-pure-white px-8 py-6 text-base uppercase tracking-wide transition-all duration-150 rounded-none"
          >
            <Link href="/contact">CONNECT</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 font-mono text-xs uppercase tracking-widest opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          EST. 20XX • ADDIS ABABA, ETHIOPIA
        </motion.div>
      </div>

      {/* Brutalist scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
      >
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
          <span className="text-pure-black">SCROLL</span>
          <div className="w-6 h-6 border-2 border-electric-pink flex items-center justify-center">
            <span className="text-electric-pink text-lg">↓</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}