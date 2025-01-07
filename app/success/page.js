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

  // Sample data for milestones and certificates
  const stories = [
    {
      id: 1,
      type: "certificate",
      title: "Certificate One",
      description: "Successfully completed an advanced React course.",
      image: "/images/certificate.png",
      date: "2023-12-05",
    },
    {
      id: 2,
      type: "milestone",
      title: "Milestone One",
      description: "Developed and deployed my first full-stack project.",
      image: "/images/milestone.png",
      date: "2023-11-20",
    },
    {
      id: 3,
      type: "certificate",
      title: "Certificate Two",
      description: "Earned a certificate for mastering JavaScript.",
      image: "/images/certificate.png",
      date: "2023-11-15",
    },
    {
      id: 4,
      type: "milestone",
      title: "MileStone Two",
      description: "Celebrated reaching 1000 active users in my app.",
      image: "/images/milestone.png",
      date: "2023-10-30",
    },
    {
      id: 5,
      type: "certificate",
      title: "Certificate Two",
      description: "Earned a certificate for mastering JavaScript.",
      image: "/images/certificate.png",
      date: "2023-11-15",
    },
    {
      id: 6,
      type: "milestone",
      title: "MileStone Two",
      description: "Celebrated reaching 1000 active users in my app.",
      image: "/images/milestone.png",
      date: "2023-5-18",
    },
    {
      id: 7,
      type: "certificate",
      title: "Certificate Two",
      description: "Earned a certificate for mastering JavaScript.",
      image: "/images/certificate.png",
      date: "2023-11-24",
    },
    {
      id: 8,
      type: "milestone",
      title: "MileStone Two",
      description: "Celebrated reaching 1000 active users in my app.",
      image: "/images/milestone.png",
      date: "2023-12-30",
    },
    {
      id: 9,
      type: "certificate",
      title: "Certificate Two",
      description: "Earned a certificate for mastering JavaScript.",
      image: "/images/certificate.png",
      date: "2023-1-15",
    },
    {
      id: 10,
      type: "milestone",
      title: "MileStone Two",
      description: "Celebrated reaching 1000 active users in my app.",
      image: "/images/milestone.png",
      date: "2023-7-3",
    },
  ];

  const [filter, setFilter] = useState("all"); // State to track the selected filter

  // Rearrange stories based on filter
  const rearrangedStories = () => {
    if (filter === "certificate") {
      return [
        ...stories.filter((story) => story.type === "certificate"), // Certificates first
        ...stories.filter((story) => story.type === "milestone"),   // Milestones after (blurred)
      ];
    }
    if (filter === "milestone") {
      return [
        ...stories.filter((story) => story.type === "milestone"),   // Milestones first
        ...stories.filter((story) => story.type === "certificate"), // Certificates after (blurred)
      ];
    }
    // Default: show all stories sorted by date (latest to oldest)
    return [...stories].sort((a, b) => new Date(b.date) - new Date(a.date));
  };


  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1C74BB] text-white py-20 mt-10">
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
                  <h3 className="text-xl font-semibold mb-2 text-[#1C74BB]">{story.name}</h3>
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
                <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
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


      <div className="success-stories-page">

          <h2 className='cheader'>Our Certificates and Milestones</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "milestone" ? "active" : ""}`}
          onClick={() => setFilter("milestone")}
        >
          Milestones
        </button>
        <button
          className={`filter-btn ${filter === "certificate" ? "active" : ""}`}
          onClick={() => setFilter("certificate")}
        >
          Certificates
        </button>
      </div>

      {/* Stories Grid */}
      <div className="stories-grid">
        {rearrangedStories().map((story) => (
          <div
            key={story.id}
            className={`story-box ${
              filter !== "all" && story.type !== filter ? "blur" : ""
            }`}
          >
            <img src={story.image} alt={story.title} className="story-image" />
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .cheader{
          margin:50px;
          margin-top:75px;
          text-align:center;
          font-size:44px;
          font-weight:700;
          color:#1C74BB;
        }

        .success-stories-page {
          padding: 50px;
          margin-bottom:50px;
          font-family: Arial, sans-serif;
        }

        .filter-bar {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .filter-btn {
          padding: 10px 20px;
          margin: 0 10px;
          border: none;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s, color 0.3s;
        }

        .filter-btn.active {
          background-color: #1C74BB;
          color: #fff;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .story-box {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          text-align: left;
          background-color: #fff;
          transition: transform 0.3s, filter 0.3s;
          position: relative;
          z-index: 1;
        }

        .story-box.blur {
          filter: blur(5px);
          pointer-events: none;
        }

        .story-image {
          max-width: 150px;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        h3 {
          margin: 10px 0;
          font-size: 20px;
        }

        p {
          color: #555;
          font-size: 16px;
        }
      `}</style>
    </div>




    </main>
  )
}