"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Modal from "./Modal"
import { AnimatePresence } from "framer-motion"

interface BranchSectionProps {
  id?: number
  name: string
  image: string
  description: string
  isVisible: boolean
}

interface CardItem {
  title: string
  image: string
  description: string
  details: string
}

const facilitiesItems: CardItem[] = Array.from({ length: 10 }, (_, i) => ({
  title: `Facility ${i + 1}`,
  image: "/images/SKA-84.jpg?height=300&width=400",
  description: `Our state-of-the-art Facility ${i + 1} offers cutting-edge equipment and expert staff to meet all your needs. From advanced technology to comfortable amenities, we ensure a top-notch experience.`,
  details: `Facility ${i + 1} is a cornerstone of our branch, providing essential services to our community. Equipped with the latest technology and staffed by highly trained professionals, this facility caters to a wide range of needs. Whether you're seeking specialized care, advanced diagnostic services, or simply a comfortable environment for your visit, Facility ${i + 1} is designed to exceed your expectations. Our commitment to excellence is evident in every aspect of this facility, from its modern design to its efficient operations.`,
}))

const activitiesItems: CardItem[] = Array.from({ length: 10 }, (_, i) => ({
  title: `Activity ${i + 1}`,
  image: "/images/SKA-26.jpg?height=300&width=400",
  description: `Join us for Activity ${i + 1}, an engaging and enriching experience designed for all ages. Our expert instructors lead sessions that promote learning, growth, and community connection.`,
  details: `Activity ${i + 1} is one of our most popular offerings, designed to engage participants in meaningful and enjoyable experiences. Led by experienced facilitators, this activity promotes personal growth, skill development, and social interaction. Whether you're a beginner or an expert, Activity ${i + 1} offers something for everyone. Our carefully crafted sessions ensure that each participant gains valuable insights and experiences in a supportive and dynamic environment. Join us to discover new passions, meet like-minded individuals, and create lasting memories.`,
}))

export default function BranchSection({ name, image, description, isVisible }: BranchSectionProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalData, setModalData] = useState<CardItem | null>(null)
  const expandedRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleButtonClick = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
    setCurrentIndex(0)
  }

  useEffect(() => {
    if (expandedSection && expandedRef.current) {
      const yOffset = -window.innerHeight / 4
      const y = expandedRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }, [expandedSection])

  useEffect(() => {
    if (expandedSection && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    } else {
      setContentHeight(null)
    }
  }, [expandedSection])

  // Calculate max index based on screen size
  const getMaxIndex = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        return 9 // For mobile (showing 1 item at a time)
      }
      return 8 // For larger screens (showing 2 items)
    }
    return 8 // Default
  }

  const handleScroll = (direction: "left" | "right") => {
    setCurrentIndex((prev) => {
      const newIndex = direction === "left" ? prev - 1 : prev + 1
      return Math.max(0, Math.min(newIndex, getMaxIndex()))
    })
  }

  const currentItems = expandedSection === "facilities" ? facilitiesItems : activitiesItems

  const handleModalNext = () => {
    const currentItemIndex = currentItems.findIndex((item) => item.title === modalData?.title)
    const nextItemIndex = (currentItemIndex + 1) % currentItems.length
    setModalData(currentItems[nextItemIndex])
  }

  const handleModalPrev = () => {
    const currentItemIndex = currentItems.findIndex((item) => item.title === modalData?.title)
    const prevItemIndex = (currentItemIndex - 1 + currentItems.length) % currentItems.length
    setModalData(currentItems[prevItemIndex])
  }

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 max-h-[2000px]" : "opacity-0 max-h-0 overflow-hidden"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden border border-[#1C74BB]">
        <div className="md:w-1/2">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex w-full">
            <button
              className={`flex-1 mr-2 py-2 px-4 border border-[#1C74BB] rounded transition-colors ${
                expandedSection === "facilities"
                  ? "bg-[#1C74BB] text-white"
                  : "bg-white text-[#1C74BB] hover:bg-[#1C74BB] hover:text-white"
              }`}
              onClick={() => handleButtonClick("facilities")}
            >
              Facilities
            </button>
            <button
              className={`flex-1 ml-2 py-2 px-4 border border-[#1C74BB] rounded transition-colors ${
                expandedSection === "activities"
                  ? "bg-[#1C74BB] text-white"
                  : "bg-white text-[#1C74BB] hover:bg-[#1C74BB] hover:text-white"
              }`}
              onClick={() => handleButtonClick("activities")}
            >
              Activities
            </button>
          </div>
        </div>
      </div>

      <div
        ref={expandedRef}
        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
          expandedSection ? "opacity-100" : "opacity-0"
        }`}
        style={{ maxHeight: contentHeight ? `${contentHeight}px` : "0px" }}
        aria-expanded={!!expandedSection}
        aria-hidden={!expandedSection}
      >
        <div ref={contentRef}>
          <div className="relative">
            <button
              onClick={() => handleScroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border ${
                currentIndex >= getMaxIndex() ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
              disabled={currentIndex >= getMaxIndex()}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="overflow-hidden px-12">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
                }}
              >
                {currentItems.map((item, index) => (
                  <div key={index} className="w-full sm:w-1/2 flex-shrink-0 p-2">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                      <div className="h-[200px] relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 flex-grow line-clamp-4 sm:line-clamp-none">{item.description}</p>
                        <button
                          className="mt-4 w-full py-2 px-4 bg-white text-[#1C74BB] border border-[#1C74BB] rounded hover:bg-[#1C74BB] hover:text-white transition-colors"
                          onClick={() => setModalData(item)}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalData && (
          <Modal
            isOpen={true}
            onClose={() => setModalData(null)}
            title={modalData.title}
            content={modalData.details}
            image={modalData.image}
            onNext={handleModalNext}
            onPrev={handleModalPrev}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

