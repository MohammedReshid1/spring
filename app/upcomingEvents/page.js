"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, MapPin, LinkIcon } from "lucide-react"
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  // Remove any leading slashes and ensure clean path
  const cleanPath = imagePath.replace(/^\/+|\/+$/g, "")
  // Add single /images/ prefix if not present
  const path = cleanPath.startsWith("images/") ? cleanPath : `images/${cleanPath}`
  return `https://springofknowledge.org/${path}`
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://api.springofknowledge.org/events")
        const data = await response.json()

        if (data.status === "success" && Array.isArray(data.events)) {
          const formattedEvents = data.events.map((event) => ({
            id: event.id,
            title: event.title,
            description: event.description,
            image: event.image,
            startDate: new Date(event.starts_on * 1000).toISOString().split("T")[0],
            endDate: new Date(event.ends_on * 1000).toISOString().split("T")[0],
            location: event.location,
            registrationLink: event.registration_link,
            schedule: event.schedule,
          }))
          setEvents(formattedEvents)
        } else {
          throw new Error("Failed to fetch events from API")
        }
      } catch (error) {
        console.error("Error fetching events:", error)
        setError("Failed to load events. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    fetchEvents()
  }, [])

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter =
      filter === "all" ||
      (filter === "upcoming" && new Date(event.startDate) > new Date()) ||
      (filter === "passed" && new Date(event.endDate) <= new Date())
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

      {isLoading ? (
        <p className="text-center">Loading events...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-48">
                  <Image
                    src={getImageUrl(event.image) || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-[#1C74BB]">{event.title}</CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-[#111827] mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>Start: {new Date(event.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-sm text-[#111827] mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>End: {new Date(event.endDate).toLocaleDateString()}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  {event.schedule && (
                    <div className="flex items-start text-sm text-gray-600 mb-2">
                      <Clock size={16} className="mr-2 mt-1" />
                      <span>{event.schedule}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {event.registrationLink && (
                    <Button asChild className="w-full bg-[#1C74BB] hover:bg-[#1C74BB]/90 text-white">
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        <LinkIcon size={16} className="mr-2" />
                        Register
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </main>
  )
}

