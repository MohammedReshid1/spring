"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  // Remove any leading slashes and ensure clean path
  const cleanPath = imagePath.replace(/^\/+|\/+$/g, "")
  // Add single /images/ prefix if not present
  const path = cleanPath.startsWith("images/") ? cleanPath : `images/${cleanPath}`
  return `https://springofknowledge.org/${path}`
}

const testimonials = [
  {
    id: 1,
    name: "Ousman Mustefa",
    role: "Data Scientist",
    avatar: "/images/campus2.jpg?height=100&width=100",
    content: "The data science program here is world-class. It opened up so many opportunities for me.",
  },
  {
    id: 2,
    name: "Ahmed Mohammed",
    role: "UX Designer",
    avatar: "/images/campus2.jpg?height=100&width=100",
    content: "I learned not just design skills, but also how to work effectively in cross-functional teams.",
  },
  {
    id: 3,
    name: "Yusuf Abubeker",
    role: "Cybersecurity Analyst",
    avatar: "/images/campus2.jpg?height=100&width=100",
    content: "The cybersecurity curriculum is constantly updated to keep up with the latest threats and technologies.",
  },
]

export default function SuccessStoriesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [success_stories, setSuccess_stories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://api.springofknowledge.org/success_stories")
        const data = await response.json()

        if (data.status === "success" && Array.isArray(data.success_stories)) {
          const formattedStories = data.success_stories.map((story) => ({
            id: story.id,
            name: story.name,
            position: story.position,
            message: story.message,
            image: story.image, // Use the actual image path from the API
            created_at: new Date(story.created_at * 1000 || Date.now()).toISOString().split("T")[0],
          }))
          setSuccess_stories(formattedStories)
        } else {
          throw new Error("Failed to fetch stories from API")
        }
      } catch (error) {
        console.error("Error fetching stories:", error)
        setError("Failed to load stories. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    fetchStories()
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1C74BB] text-white py-20 mt-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Success Stories</h1>
          <p className="text-xl mb-8">Discover how our graduates are making an impact in the tech world</p>
          <Button className="bg-[#111827] hover:bg-gray-800 text-white">Start Your Journey</Button>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#111827]">Featured Alumni</h2>
        {isLoading ? (
          <p className="text-center">Loading stories...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {success_stories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full h-48">
                    {getImageUrl(story.image) ? (
                      <Image
                        src={getImageUrl(story.image) || "/placeholder.svg"}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#1C74BB]">{story.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{story.position}</p>
                    <p className="text-[#111827]">{story.message}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-[#111827] text-white py-16 mb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Alumni</h2>
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <Avatar className="w-24 h-24 mb-6">
                <AvatarImage
                  src={getImageUrl(testimonials[currentTestimonial].avatar)}
                  alt={testimonials[currentTestimonial].name}
                />
                <AvatarFallback>{testimonials[currentTestimonial].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Quote className="w-12 h-12 text-[#1C74BB] mb-4" />
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
    </main>
  )
}

