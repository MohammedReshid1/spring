'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const successStories = [
  {
    id: 1,
    name: "Emily Johnson",
    title: "Software Engineer at Google",
    image: "/images/campus.jpg?height=400&width=400",
    story: "After graduating, I landed my dream job at Google thanks to the skills I learned here.",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Founder of TechStart",
    image: "/images/campus.jpg?height=400&width=400",
    story: "The entrepreneurship program gave me the confidence to start my own successful tech company.",
  },
  {
    id: 3,
    name: "Sarah Williams",
    title: "AI Researcher at MIT",
    image: "/images/campus.jpg?height=400&width=400",
    story: "The advanced AI courses prepared me for cutting-edge research at MIT.",
  },
]

const testimonials = [
  {
    id: 1,
    name: "David Lee",
    role: "Data Scientist",
    avatar: "/images/campus2.jpg?height=100&width=100",
    content: "The data science program here is world-class. It opened up so many opportunities for me.",
  },
  {
    id: 2,
    name: "Jessica Martinez",
    role: "UX Designer",
    avatar: "/images/campus2.jpg?height=100&width=100",
    content: "I learned not just design skills, but also how to work effectively in cross-functional teams.",
  },
  {
    id: 3,
    name: "Alex Thompson",
    role: "Cybersecurity Analyst",
    avatar: "/images/campus2.jpg?height=100&width=100",
    content: "The cybersecurity curriculum is constantly updated to keep up with the latest threats and technologies.",
  },
]

export default function SuccessStoriesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#b18aa7] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Success Stories</h1>
          <p className="text-xl mb-8">Discover how our graduates are making an impact in the tech world</p>
          <Button className="bg-[#111827] hover:bg-gray-800 text-white">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#111827]">Featured Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#b18aa7]">{story.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{story.title}</p>
                  <p className="text-[#111827]">{story.story}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Alumni Say</h2>
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <Avatar className="w-24 h-24 mb-6">
                <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                <AvatarFallback>{testimonials[currentTestimonial].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Quote className="w-12 h-12 text-[#b18aa7] mb-4" />
              <p className="text-xl mb-6 max-w-2xl">{testimonials[currentTestimonial].content}</p>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-400">{testimonials[currentTestimonial].role}</p>
            </motion.div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#111827]">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-gray-600">Join our community of achievers and unlock your potential</p>
          <Button className="bg-[#b18aa7] hover:bg-[#9a7691] text-white text-lg px-8 py-3">
            Apply Now
          </Button>
        </div>
      </section>
    </main>
  )
}