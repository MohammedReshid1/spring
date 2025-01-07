'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const initialEvents = [
  {
    id: "1",
    title: "Web Development Workshop",
    description: "Learn the latest web development techniques and tools.",
    image: "/images/campus.jpg?height=200&width=300",
    date: "2024-05-15",
    location: "Campus"
  },
  {
    id: "2",
    title: "AI in Education Conference",
    description: "Explore the impact of AI on modern education systems.",
    image: "/images/campus.jpg?height=200&width=300",
    date: "2024-06-20",
    location: "Campus"
  },
  {
    id: "3",
    title: "Student Art Exhibition",
    description: "Showcase of our students' best artistic creations.",
    image: "/images/campus.jpg?height=200&width=300",
    date: "2024-04-10",
    location: "Campus"
  }
]

const EventIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    className="mx-auto mb-4"
  >
    <rect x="40" y="40" width="120" height="120" rx="8" fill="#1C74BB" />
    <path
      d="M70 70H130M70 100H130M70 130H110"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="150" cy="150" r="30" fill="#111827" />
    <path
      d="M150 140V160M140 150H160"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [events, setEvents] = useState(initialEvents)

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events')
        const data = await response.json()
  
        // Check if the response is successful and has events
        if (data.status == 'success' && Array.isArray(data.events)) {
          // Format the fetched events if needed and set to the state
          const formattedEvents = data.events.map(event => ({
            id: event.id,
            title: event.title,
            description: event.description,
            image: "/images/campus.jpg?height=200&width=300", // Placeholder image
            date: new Date(event.starts_on * 1000).toISOString().split('T')[0], // Convert Unix timestamp to date string
            location: event.location
          }))
          // setEvents((prevEvents) => [...prevEvents, ...formattedEvents])
          setEvents(formattedEvents)
          } else {
          console.error('Failed to fetch events from API')
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
    fetchEvents()
  }, [])

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || 
      (filter === 'upcoming' && new Date(event.date) > new Date()) ||
      (filter === 'passed' && new Date(event.date) <= new Date())
    return matchesSearch && matchesFilter
  })

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#1C74BB]">Events</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <Tabs value={filter} onValueChange={setFilter} className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="passed">Passed</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredEvents.map(event => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Image
                src={event.image}
                alt={event.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-[#1C74BB]">{event.title}</CardTitle>
                <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-[#111827]">
                  <Calendar size={16} className="mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                {event.location && <p className="text-sm text-gray-600 mt-2">Location: {event.location}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* <div className="text-center">
        <EventIcon />
        <Button className="bg-[#1C74BB] hover:bg-[#9a7691] text-white">
          Create an Event
        </Button>
      </div> */}
    </main>
  )
}