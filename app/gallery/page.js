"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const getImageUrl = (imagePath) => {
  if (!imagePath) return "/placeholder.svg"
  // Remove any leading slashes and ensure clean path
  const cleanPath = imagePath.replace(/^\/+|\/+$/g, "")
  // Avoid adding duplicate 'images/' prefix
  const path = cleanPath.startsWith("images/") ? cleanPath : `images/${cleanPath}`
  return `https://springofknowledge.org/${path}`
}

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://api.springofknowledge.org/gallery")
        const data = await response.json()

        if (data.status === "success" && Array.isArray(data.gallery_items)) {
          const formattedImages = data.gallery_items.map((image) => ({
            id: image.id,
            image: image.image,
            title: image.title,
            category: image.category,
            description: image.description,
            created_at: new Date(image.created_at * 1000 || Date.now()).toISOString().split("T")[0],
          }))
          setImages(formattedImages)
          setFilteredImages(formattedImages)
        } else {
          throw new Error("Failed to fetch images from API")
        }
      } catch (error) {
        console.error("Error fetching images:", error)
        setError("Failed to load images. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [])

  useEffect(() => {
    const filtered = images.filter(
      (image) =>
        (categoryFilter === "All" || image.category === categoryFilter) &&
        image.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredImages(filtered)
  }, [searchTerm, categoryFilter, images])

  const categories = ["All", ...new Set(images.map((img) => img.category))]

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsDialogOpen(true)
  }

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#1C74BB]">Gallery</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px] border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <p className="text-center text-lg text-[#111827] mt-8">Loading images...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500 mt-8">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-64">
                    <Image
                      src={getImageUrl(image.image) || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#1C74BB]">{image.title}</h3>
                    <p className="text-sm text-[#111827]">{image.category}</p>
                    <p className="text-sm text-[#111827]">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {!isLoading && !error && filteredImages.length === 0 && (
        <p className="text-center text-lg text-[#111827] mt-8">No images found. Try adjusting your search or filter.</p>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 dialog-overlay">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          {selectedImage && (
            <div className="flex flex-col items-center relative">
              <div className="w-full h-[60vh] relative">
                <Image
                  src={getImageUrl(selectedImage.image) || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-[#1C74BB]">{selectedImage.title}</h3>
              <p className="text-sm text-[#111827]">{selectedImage.category}</p>
              <p className="text-sm text-[#111827]">{selectedImage.description}</p>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <Button variant="outline" size="icon" onClick={handlePrevImage}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <Button variant="outline" size="icon" onClick={handleNextImage}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}

