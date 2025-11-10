'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Building2, Users, BookOpen, MapPin, ArrowRight } from 'lucide-react'

export default function TheCampus() {
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

  const campusFeatures = [
    {
      src: "/images/campus2.jpg",
      alt: "Our Branches",
      title: "Multiple Branches",
      description: "Conveniently located campuses across the city",
      icon: Building2,
      link: "/branches"
    },
    {
      src: "/images/SKA-84.jpg",
      alt: "Student Activities",
      title: "Vibrant Activities",
      description: "Rich extracurricular programs and events",
      icon: Users,
      link: "/branches"
    },
    {
      src: "/images/SKA-26.jpg",
      alt: "Modern Facilities",
      title: "World-Class Facilities",
      description: "State-of-the-art learning environments",
      icon: BookOpen,
      link: "/branches"
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-semibold text-lg mb-3 block">Campus Life</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience Our <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">Campus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art campuses provide the perfect environment for learning, growth, and personal development
          </p>
        </motion.div>

        {/* Campus Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {campusFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Link href={feature.link} className="block">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-premium hover:shadow-premium-lg transition-all duration-500">
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-3">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-academic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-sm font-semibold">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Campus Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                { icon: Building2, number: '3+', label: 'Campus Locations' },
                { icon: Users, number: '50+', label: 'Classrooms' },
                { icon: BookOpen, number: '2', label: 'Libraries' },
                { icon: MapPin, number: '15+', label: 'Labs & Facilities' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-academic-gold" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8 border-t border-white/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Visit Our Campus?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Schedule a visit to experience our world-class facilities and meet our dedicated faculty
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-brand-primary hover:bg-gray-100 rounded-xl">
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-xl">
                  <Link href="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
