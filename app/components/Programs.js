'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const programs = [
  { 
    name: "Kindergarten Program", 
    description: "Where Little Learners Begin Big Adventures!",
    image: "/images/SKA-57.jpg",
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
    content: {
      overview: "The Primary School Program at our institution is crafted to provide a robust educational foundation for students as they progress through their formative years. Our curriculum is comprehensive, covering core subjects such as Mathematics, Science, Language Arts, and Social Studies, while also emphasizing critical thinking, problem-solving, and creativity.",
      curriculum: "We employ a blend of traditional teaching methods and innovative learning techniques to ensure that each student receives a well-rounded education. Our dedicated teachers work closely with students, identifying individual strengths and areas for improvement, and tailoring their approach accordingly. We also place a strong emphasis on character development, instilling values such as respect, responsibility, and resilience.",
      environment: "Through various extracurricular activities and projects, we encourage students to explore their interests and develop their talents beyond academics.  Our Primary School fosters a collaborative and supportive learning environment where students feel empowered to reach their full potential."
    }
  },
  { 
    name: "High School Program", 
    description: "Empowering Students to Achieve and Excel!",
    image: "/images/SKA-85.jpg",
    content: {
      overview: "Our High School Program is designed to challenge and inspire students as they prepare for higher education and beyond. We offer a rigorous academic curriculum that meets and exceeds national standards, providing students with the knowledge and skills they need to succeed in college and their future careers.",
      curriculum: "Our program includes advanced placement courses, honors classes, and a wide range of electives to cater to diverse interests and career aspirations. We place a strong emphasis on developing critical thinking, analytical skills, and independent learning.",
      environment: "Our experienced faculty members are committed to fostering intellectual curiosity and academic excellence. Beyond academics, we offer a rich array of extracurricular activities, including sports, arts, and community service programs, to promote holistic development. We also provide comprehensive college counseling services to guide students through the college application process and help them make informed decisions about their future."
    }
  },
]

function ProgramDialog({ program }) {
  return (
    <DialogContent className="max-w-6xl w-11/12 min-h-[80vh] p-6">
      <DialogTitle className="sr-only">
        {program.name} Details
      </DialogTitle>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/3 flex flex-col space-y-4">
            <div className="h-72 md:h-80 relative">
              <Image 
                src={program.image} 
                alt={program.name} 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{program.name}</h3>
              <p className="text-muted-foreground mt-2">{program.description}</p>
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Program Overview</h4>
              <p className="text-justify leading-relaxed">
                {program.content.overview}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Curriculum Highlights</h4>
              <p className="text-justify leading-relaxed">
                {program.content.curriculum}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Learning Environment</h4>
              <p className="text-justify leading-relaxed">
                {program.content.environment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}

export default function Programs() {
  return (
    <section className="py-16 bg-background m-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our <span style={{ color: '#1C74BB' }}>Programs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group relative overflow-hidden flex flex-col h-[400px] cursor-pointer">
              <CardHeader>
                <CardTitle>{program.name}</CardTitle>
              </CardHeader>
              <CardContent className="relative p-0 flex-grow ">
                <div className="absolute inset-0 mb-3">
                  <Image 
                    src={program.image} 
                    alt={program.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardDescription className="absolute inset-x-0 bottom-0 h-full flex items-center justify-center p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <span className="text-center">{program.description}</span>
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center relative z-10 mt-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Learn More</Button>
                  </DialogTrigger>
                  <ProgramDialog program={program} />
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

