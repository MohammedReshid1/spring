"use client"

import { CheckCircle, Heart, Users, Lightbulb, Handshake } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function WhatMakesUsDifferent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const principles = [
    {
      icon: Heart,
      title: 'Every Child Matters',
      description: 'Every child has the potential to learn and excel',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'We regard the prior knowledge and experience of each child',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Real-World Connection',
      description: 'Linking the learning process to everyday experience',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: Handshake,
      title: 'Family Partnership',
      description: 'We take families and parents as our principal partners',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white via-brand-primary-lighter/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-0" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-semibold text-lg mb-3 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Makes Us <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">Different</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core principles that guide our approach to education and shape the future of our students
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Principles Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className={`${principle.bgColor} p-6 rounded-2xl shadow-md hover:shadow-premium transition-all duration-300 h-full border border-transparent hover:border-white group-hover:scale-105`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300`}>
                    <principle.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>

                  {/* Animated Check */}
                  <div className="mt-4 flex items-center gap-2 text-brand-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Core Principle</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg group">
              <Image
                src="/images/SKA-102.jpg"
                alt="What Makes Us Different"
                width={800}
                height={900}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary-dark flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 mb-1">Student-Centered</div>
                    <div className="text-gray-600">Every child is unique and valued</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-academic-gold/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '100%', label: 'Student Focus' },
            { number: '24/7', label: 'Parent Support' },
            { number: '1:15', label: 'Teacher Ratio' },
            { number: '95%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
