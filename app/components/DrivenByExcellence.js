"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Award, Users, BookOpen, Trophy, ArrowRight } from 'lucide-react'

const words = ["Excellence", "Innovation", "Growth", "Success"]

export default function DrivenByExcellence() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
      description: "Rigorous curriculum that exceeds national standards"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Dedicated teachers committed to student success"
    },
    {
      icon: BookOpen,
      title: "Modern Learning",
      description: "Innovative teaching methods and resources"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Outstanding track record of student achievements"
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary-lighter rounded-full blur-3xl opacity-20 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-academic-gold/20 rounded-full blur-3xl opacity-20 -z-0"></div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg group">
              <Image
                src="/images/SKA-75.jpg"
                alt="Excellence at Spring of Knowledge Academy"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-academic-gold" />
                  <span className="font-bold text-academic-navy">Since 2006</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-brand-primary text-white p-6 rounded-2xl shadow-premium-lg"
            >
              <div className="text-4xl font-bold mb-1">18+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block mb-4"
              >
                <span className="text-brand-primary font-semibold text-lg">Our Story</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Driven by{' '}
                <span className="relative inline-block h-20">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[currentWord]}
                      initial={{ opacity: 0, y: 30, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -30, rotateX: 90 }}
                      transition={{ duration: 0.6 }}
                      className="absolute left-0 bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="invisible">{words[0]}</span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Spring of Knowledge Academy S.C. was established in 2006 with a clear mission: to contribute
                to the human capital development of our nation through excellence in education.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 18 years, we've been nurturing young minds, fostering critical thinking, and
                building strong foundations for tomorrow's leaders. Our commitment to educational excellence
                has made us a trusted institution for families seeking the best for their children.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="p-4 rounded-xl bg-white border border-gray-100 hover:border-brand-primary hover:shadow-lg transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-4"
            >
              <Button
                size="lg"
                asChild
                className="bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl shadow-md hover:shadow-glow transition-all duration-300 group"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
