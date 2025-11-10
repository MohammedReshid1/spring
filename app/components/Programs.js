'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Rocket, ArrowRight, Users, Award } from 'lucide-react'

const programs = [
  {
    name: "Kindergarten Program",
    description: "Where Little Learners Begin Big Adventures!",
    image: "/images/SKA-57.jpg",
    icon: Rocket,
    color: "from-pink-500 to-rose-500",
    ageRange: "Ages 3-5",
    students: "150+",
    content: {
      overview: "Our Kindergarten Program is designed to nurture young minds and foster a love for learning from an early age. In this program, children are introduced to foundational concepts through play-based learning, interactive activities, and gentle guidance from our experienced educators.",
      curriculum: "We focus on developing social skills, emotional intelligence, and basic academic concepts in a safe and stimulating environment. Our curriculum includes age-appropriate lessons in language, mathematics, science, and arts, all tailored to spark curiosity and encourage exploration.",
      environment: "We believe in creating a warm, welcoming atmosphere where each child feels valued and supported in their unique journey of growth and discovery. Our Kindergarten Program provides a nurturing space for children to develop confidence, creativity, and a lifelong passion for learning."
    }
  },
  {
    name: "Primary School Program",
    description: "Building Strong Foundations for Tomorrow's Leaders!",
    image: "/images/SKA-48.jpg",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    ageRange: "Grades 1-8",
    students: "500+",
    content: {
      overview: "The Primary School Program at our institution is crafted to provide a robust educational foundation for students as they progress through their formative years. Our curriculum is comprehensive, covering core subjects such as Mathematics, Science, Language Arts, and Social Studies, while also emphasizing critical thinking, problem-solving, and creativity.",
      curriculum: "We employ a blend of traditional teaching methods and innovative learning techniques to ensure that each student receives a well-rounded education. Our dedicated teachers work closely with students, identifying individual strengths and areas for improvement, and tailoring their approach accordingly. We also place a strong emphasis on character development, instilling values such as respect, responsibility, and resilience.",
      environment: "Through various extracurricular activities and projects, we encourage students to explore their interests and develop their talents beyond academics. Our Primary School fosters a collaborative and supportive learning environment where students feel empowered to reach their full potential."
    }
  },
  {
    name: "High School Program",
    description: "Empowering Students to Achieve and Excel!",
    image: "/images/SKA-85.jpg",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-500",
    ageRange: "Grades 9-12",
    students: "400+",
    content: {
      overview: "Our High School Program is designed to challenge and inspire students as they prepare for higher education and beyond. We offer a rigorous academic curriculum that meets and exceeds national standards, providing students with the knowledge and skills they need to succeed in college and their future careers.",
      curriculum: "Our program includes advanced placement courses, honors classes, and a wide range of electives to cater to diverse interests and career aspirations. We place a strong emphasis on developing critical thinking, analytical skills, and independent learning.",
      environment: "Our experienced faculty members are committed to fostering intellectual curiosity and academic excellence. Beyond academics, we offer a rich array of extracurricular activities, including sports, arts, and community service programs, to promote holistic development. We also provide comprehensive college counseling services to guide students through the college application process and help them make informed decisions about their future."
    }
  },
]

function ProgramDialog({ program }) {
  return (
    <DialogContent className="max-w-6xl w-11/12 max-h-[90vh] overflow-y-auto p-0">
      <DialogTitle className="sr-only">
        {program.name} Details
      </DialogTitle>

      {/* Header with Image */}
      <div className="relative h-64 w-full">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-80`} />
        <div className="absolute inset-0 flex items-center justify-center text-white p-8">
          <div className="text-center">
            <program.icon className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2">{program.name}</h3>
            <p className="text-xl">{program.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Users className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
            <div className="font-bold text-2xl text-gray-900">{program.students}</div>
            <div className="text-sm text-gray-600">Active Students</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
            <div className="font-bold text-2xl text-gray-900">{program.ageRange}</div>
            <div className="text-sm text-gray-600">Age Range</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <Award className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
            <div className="font-bold text-2xl text-gray-900">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-bold mb-3 text-gray-900">Program Overview</h4>
            <p className="text-gray-700 leading-relaxed">
              {program.content.overview}
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-3 text-gray-900">Curriculum Highlights</h4>
            <p className="text-gray-700 leading-relaxed">
              {program.content.curriculum}
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-3 text-gray-900">Learning Environment</h4>
            <p className="text-gray-700 leading-relaxed">
              {program.content.environment}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex gap-4">
          <Button className="flex-1 bg-brand-primary hover:bg-brand-primary-dark">
            Apply Now
          </Button>
          <Button variant="outline" className="flex-1">
            Download Brochure
          </Button>
        </div>
      </div>
    </DialogContent>
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
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-semibold text-lg mb-3 block">Academic Excellence</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture young minds and prepare students for success at every stage
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden flex flex-col h-[550px] cursor-pointer hover:shadow-premium-lg transition-all duration-500 border-2 hover:border-brand-primary">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                    <program.icon className="w-7 h-7 text-brand-primary" />
                  </div>

                  {/* Age Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                    <span className="text-sm font-semibold text-gray-900">{program.ageRange}</span>
                  </div>
                </div>

                {/* Content */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl mb-2">{program.name}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-brand-primary" />
                      <span className="text-sm">{program.students} Active Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5 text-brand-primary" />
                      <span className="text-sm">98% Success Rate</span>
                    </div>
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="pt-4 border-t">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white group/btn">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <ProgramDialog program={program} />
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
