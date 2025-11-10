"use client"

import React, { useState, useEffect, useRef } from 'react'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "My experience here has been transformative. The faculty and resources have prepared me for a successful career in technology.",
      author: "Mohammed Abdulwasi",
      role: "Computer Science Graduate",
      rating: 5,
      image: "/images/SKA-48.jpg"
    },
    {
      quote: "The diverse community and innovative programs have broadened my perspective and opened up new opportunities beyond my expectations.",
      author: "Mahi Imran",
      role: "Business Administration Student",
      rating: 5,
      image: "/images/SKA-75.jpg"
    },
    {
      quote: "I've gained practical skills and industry connections that have jumpstarted my career and given me confidence in my abilities.",
      author: "Umer Ali",
      role: "Engineering Graduate",
      rating: 5,
      image: "/images/SKA-85.jpg"
    },
    {
      quote: "The supportive environment and challenging curriculum have helped me grow both personally and professionally in remarkable ways.",
      author: "Nejat Mohammed",
      role: "Medicine Student",
      rating: 5,
      image: "/images/SKA-102.jpg"
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-academic-navy via-brand-primary-dark to-academic-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-academic-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary-light rounded-full blur-3xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-academic-gold font-semibold text-lg mb-3 block">Student Success Stories</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-academic-gold to-brand-secondary">Students Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our students about their transformative experiences at Spring of Knowledge Academy
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="py-8"
          >
            {(testimonial) => (
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl w-[450px] h-[320px] flex-shrink-0 mx-4 shadow-premium-lg hover:shadow-glow-lg transition-all duration-500 hover:scale-105 group">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-12 h-12 text-brand-primary opacity-20 group-hover:opacity-40 transition-opacity" />

                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-academic-gold text-academic-gold" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="mb-6 text-gray-700 leading-relaxed text-base italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-dark flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}
          </InfiniteMovingCards>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '2000+', label: 'Happy Students' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '95%', label: 'College Acceptance' },
            { number: '100+', label: 'Success Stories' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-academic-gold mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
