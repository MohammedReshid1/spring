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
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <Image
        src="/images/SKA-1.jpg"
        alt="Spring of Knowledge Academy Campus"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0"
        style={{
          transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Organic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/70 via-forest/60 to-terracotta/50" />

      {/* Subtle Texture */}
      <div className="absolute inset-0 texture-overlay opacity-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className="inline-block">Welcome to</span>{" "}
          <span className="inline-block bg-gradient-to-r from-honey via-terracotta to-honey bg-clip-text text-transparent animate-shimmer">
            Spring of Knowledge
          </span>
        </motion.h1>

        <motion.div
          className="h-10 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypingAnimation
            text="Where Excellence Is A Habit Not A Goal"
            speed={60}
            className="text-xl md:text-2xl text-parchment/95 font-light tracking-wide"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="bg-gradient-to-r from-honey to-terracotta text-white font-semibold hover:shadow-xl transition-all duration-300 border-2 border-honey/50 px-8 py-6 text-lg rounded-xl hover:scale-105"
          >
            <Link href="/learn-more">Discover Our Story</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-parchment/10 backdrop-blur-sm text-white font-semibold border-2 border-parchment/50 hover:bg-parchment/20 transition-all duration-300 px-8 py-6 text-lg rounded-xl hover:scale-105"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator with organic animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.3 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-parchment/80 text-sm font-light tracking-widest">SCROLL</span>
          <svg className="w-6 h-6 text-honey" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}