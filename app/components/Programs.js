'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { GraduationCap, BookOpen, Rocket, ArrowRight, Users, Award, Target, Clock, Sparkles, ChevronRight } from 'lucide-react'

const programs = [
  {
    name: "Kindergarten",
    tagline: "Where Little Learners Begin Big Adventures",
    description: "Nurturing young minds through play-based learning and gentle guidance in a safe, stimulating environment.",
    image: "/images/SKA-57.jpg",
    icon: Rocket,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    glowColor: "rgba(244, 114, 182, 0.4)",
    ageRange: "Ages 3-5",
    students: "150+",
    schedule: "Half & Full Day",
    successRate: "100%",
    content: {
      overview: "Our Kindergarten Program is designed to nurture young minds and foster a love for learning from an early age. In this program, children are introduced to foundational concepts through play-based learning, interactive activities, and gentle guidance from our experienced educators.",
      curriculum: "We focus on developing social skills, emotional intelligence, and basic academic concepts in a safe and stimulating environment. Our curriculum includes age-appropriate lessons in language, mathematics, science, and arts, all tailored to spark curiosity and encourage exploration.",
      environment: "We believe in creating a warm, welcoming atmosphere where each child feels valued and supported in their unique journey of growth and discovery."
    }
  },
  {
    name: "Primary School",
    tagline: "Building Strong Foundations for Tomorrow's Leaders",
    description: "Comprehensive curriculum covering core subjects while emphasizing critical thinking, creativity, and character development.",
    image: "/images/SKA-48.jpg",
    icon: BookOpen,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
    ageRange: "Grades 1-8",
    students: "500+",
    schedule: "Full Day",
    successRate: "98%",
    content: {
      overview: "The Primary School Program provides a robust educational foundation as students progress through their formative years. Our curriculum is comprehensive, covering Mathematics, Science, Language Arts, and Social Studies, while emphasizing critical thinking and creativity.",
      curriculum: "We employ a blend of traditional teaching methods and innovative learning techniques. Our dedicated teachers identify individual strengths and areas for improvement, tailoring their approach accordingly. We also emphasize character development, instilling values such as respect, responsibility, and resilience.",
      environment: "Through various extracurricular activities and projects, we encourage students to explore their interests and develop their talents beyond academics."
    }
  },
  {
    name: "High School",
    tagline: "Empowering Students to Achieve and Excel",
    description: "Rigorous academic curriculum meeting national standards while preparing students for higher education and beyond.",
    image: "/images/SKA-85.jpg",
    icon: GraduationCap,
    gradient: "from-purple-500 via-indigo-500 to-blue-600",
    glowColor: "rgba(124, 58, 237, 0.4)",
    ageRange: "Grades 9-12",
    students: "400+",
    schedule: "Full Day",
    successRate: "95%",
    content: {
      overview: "Our High School Program is designed to challenge and inspire students as they prepare for higher education and beyond. We offer a rigorous academic curriculum that meets and exceeds national standards, providing students with the knowledge and skills they need to succeed.",
      curriculum: "Our program includes advanced placement courses, honors classes, and a wide range of electives to cater to diverse interests and career aspirations. We place a strong emphasis on developing critical thinking, analytical skills, and independent learning.",
      environment: "Beyond academics, we offer a rich array of extracurricular activities, including sports, arts, and community service programs, to promote holistic development. We also provide comprehensive college counseling services."
    }
  },
]

function ProgramCard({ program, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const cardRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-[600px] rounded-3xl overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-[1.02]">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={program.image}
            alt={program.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-80 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Animated Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${program.glowColor}, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />

        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        )}

        {/* Content Container */}
        <div className="relative h-full p-8 flex flex-col justify-between">

          {/* Top Badge */}
          <div className="flex justify-between items-start">
            {/* Icon Badge */}
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl">
                <program.icon className="w-8 h-8 text-gray-900" />
              </div>
            </motion.div>

            {/* Success Badge */}
            <div className="bg-academic-gold/20 backdrop-blur-md border border-academic-gold/40 px-4 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-academic-gold" />
              <span className="text-sm font-bold text-white">{program.successRate} Success</span>
            </div>
          </div>

          {/* Bottom Content */}
          <div>
            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 mb-6"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
                <Users className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">{program.students}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">{program.schedule}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-white">{program.ageRange}</span>
              </div>
            </motion.div>

            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <h3 className="text-5xl font-black text-white mb-2 leading-tight">
                {program.name}
              </h3>
              <p className="text-xl text-gray-200 font-light mb-4">
                {program.tagline}
              </p>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-base leading-relaxed mb-6"
                animate={{
                  height: isHovered ? 'auto' : '0px',
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                {program.description}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="group/btn flex-1 bg-white text-gray-900 px-6 py-4 rounded-xl font-bold text-center hover:bg-academic-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
              >
                <span className="whitespace-nowrap">Learn More</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Shine Effect on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={isHovered ? {
            backgroundPosition: ['200% 200%', '-200% -200%'],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Expanded Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header with Image */}
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-90 rounded-t-3xl`} />
                <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                  <div className="text-center">
                    <program.icon className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-5xl font-black mb-2">{program.name}</h3>
                    <p className="text-2xl font-light">{program.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <Users className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
                    <div className="font-black text-3xl text-gray-900">{program.students}</div>
                    <div className="text-sm text-gray-600 mt-1">Active Students</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <Target className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
                    <div className="font-black text-3xl text-gray-900">{program.successRate}</div>
                    <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
                    <div className="font-black text-3xl text-gray-900">{program.ageRange}</div>
                    <div className="text-sm text-gray-600 mt-1">Age Range</div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-gray-900">Program Overview</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {program.content.overview}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-gray-900">Curriculum Highlights</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {program.content.curriculum}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-gray-900">Learning Environment</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {program.content.environment}
                    </p>
                  </div>
                </div>

                {/* CTA Footer */}
                <div className="mt-8 pt-6 border-t flex gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-8 py-4 rounded-xl font-bold text-center hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Award className="w-5 h-5" />
                    Apply to {program.name}
                  </Link>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Programs() {
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

  return (
    <section ref={sectionRef} className="relative section-padding bg-gradient-to-br from-gray-900 via-academic-navy to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          {/* Overline */}
          <div className="inline-flex items-center gap-2 bg-academic-gold/10 border border-academic-gold/30 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-academic-gold" />
            <span className="text-academic-gold font-bold text-lg">Academic Excellence</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Discover Our </span>
            <span className="bg-gradient-to-r from-academic-gold via-brand-primary-light to-purple-400 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive educational programs designed to nurture young minds and prepare students for success at every stage of their journey
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.name}
              program={program}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/departments"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            <span>View All Programs & Departments</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
