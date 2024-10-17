'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Users, Lightbulb, Award } from 'lucide-react'

export default function About() {
  const [hoveredFounder, setHoveredFounder] = useState(null)

  const founders = [
    {
      name: "Dr. Emily Chen",
      role: "Founder & CEO",
      image: "/images/campus.jpg?height=400&width=400",
      description: "Dr. Chen is an education visionary with over 20 years of experience in curriculum development and educational technology."
    },
    {
      name: "Prof. Michael Johnson",
      role: "Co-founder & Academic Director",
      image: "/images/library.jpg?height=400&width=400",
      description: "Prof. Johnson is a renowned expert in personalized learning and has published numerous papers on adaptive educational systems."
    },
    {
      name: "Sarah Thompson",
      role: "Co-founder & Chief Innovation Officer",
      image: "/images/campus2.jpg?height=400&width=400",
      description: "Sarah brings her expertise in EdTech and user experience design to create engaging and effective learning platforms."
    }
  ]

  const values = [
    { icon: <Book size={24} />, title: "Quality Education", description: "We provide top-notch educational resources and experiences." },
    { icon: <Users size={24} />, title: "Inclusive Community", description: "We foster a diverse and supportive learning environment." },
    { icon: <Lightbulb size={24} />, title: "Innovation", description: "We continuously evolve our teaching methods and technologies." },
    { icon: <Award size={24} />, title: "Student Success", description: "We are committed to helping every student reach their full potential." }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.section 
        className="text-center mb-16 relative py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/campus.jpg"
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-[#b18aa7]">About Spring of Knowledge Academy</h1>
          <p className="text-xl text-[#111827] max-w-2xl mx-auto">
            Nurturing minds, inspiring futures, and cultivating a lifelong love for learning.
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18aa7]">Our Mission</h2>
            <p className="text-lg text-[#111827]">
              At Spring of Knowledge Academy, our mission is to provide quality education and foster student development 
              through innovative teaching methods, personalized learning experiences, and a supportive community. 
              We believe in empowering students to reach their full potential and become lifelong learners.
            </p>
          </div>
          <div className="md:w-1/2 max-w-md mx-auto">
            <Image
              src="/images/Logo.png?height=300&width=300"
              alt="Spring of Knowledge Academy Logo"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#b18aa7]">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:bg-[#111827] hover:text-[#b18aa7] group">
                <CardContent className="flex flex-col items-center p-6 h-64 justify-between">
                  <div className="text-[#b18aa7] group-hover:text-white mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="mb-2">{value.title}</CardTitle>
                  <p className="text-center text-sm">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#b18aa7]">Meet Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="max-w-sm mx-auto w-full"
            >
              <Card 
                className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden"
                onMouseEnter={() => setHoveredFounder(index)}
                onMouseLeave={() => setHoveredFounder(null)}
              >
                <div className="relative h-64">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <div className={`transition-colors duration-300 ${hoveredFounder === index ? 'bg-[#111827] text-white' : ''} p-4 rounded-lg`}>
                    <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                    <p className={`text-sm mb-2 ${hoveredFounder === index ? 'text-[#b18aa7]' : 'text-gray-600'}`}>{founder.role}</p>
                    <p className="text-sm">{founder.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#b18aa7]">Join Our Community</h2>
        <p className="text-lg text-[#111827] max-w-2xl mx-auto mb-8">
          Become a part of our vibrant learning community and embark on a journey of growth and discovery.
        </p>
        <button className="bg-[#b18aa7] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#9a7691] transition-colors duration-300">
          Apply Now
        </button>
      </motion.section>
    </main>
  )
}