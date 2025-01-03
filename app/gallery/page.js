'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would typically come from your backend
const dummyImages = [
  { id: 1, src: "/images/campus.jpg?height=300&width=300", alt: "Event 1", category: "Events" },
  { id: 2, src: "/images/campus2.jpg?height=300&width=300", alt: "Campus 1", category: "Campus" },
  { id: 3, src: "/images/campus.jpg?height=300&width=300", alt: "Student 1", category: "Students" },
  { id: 4, src: "/images/campus2.jpg?height=300&width=300", alt: "Event 2", category: "Events" },
  { id: 5, src: "/images/campus.jpg?height=300&width=300", alt: "Campus 2", category: "Campus" },
  { id: 6, src: "/images/campus2.jpg?height=300&width=300", alt: "Student 2", category: "Students" },
]

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  // Simulating data fetching from backend
  useEffect(() => {
    // In a real application, this would be an API call
    setImages(dummyImages)
    setFilteredImages(dummyImages)
  }, [])

  useEffect(() => {
    const filtered = images.filter(image => 
      (categoryFilter === 'All' || image.category === categoryFilter) &&
      image.alt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredImages(filtered)
  }, [searchTerm, categoryFilter, images])

  const categories = ['All', ...new Set(images.map(img => img.category))]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#18BEBC]">Gallery</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-[#18BEBC] focus:ring-[#18BEBC] focus:border-[#18BEBC]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px] border-[#18BEBC] focus:ring-[#18BEBC] focus:border-[#18BEBC]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#18BEBC]">{image.alt}</h3>
                  <p className="text-sm text-[#111827]">{image.category}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <p className="text-center text-lg text-[#111827] mt-8">No images found. Try adjusting your search or filter.</p>
      )}
    </main>
  )
}