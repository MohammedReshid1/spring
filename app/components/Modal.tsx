"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  image: string
  onNext?: () => void
  onPrev?: () => void
}

export default function Modal({ isOpen, onClose, title, content, image, onNext, onPrev }: ModalProps) {
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [currentContent, setCurrentContent] = useState({ title, content, image })

  // Update content with animation when props change
  useEffect(() => {
    setCurrentContent({ title, content, image })
  }, [title, content, image])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleNext = () => {
    if (onNext) {
      setDirection("left")
      onNext()
    }
  }

  const handlePrev = () => {
    if (onPrev) {
      setDirection("right")
      onPrev()
    }
  }

  const variants = {
    enter: (direction: "left" | "right") => {
      return {
        x: direction === "right" ? -300 : 300,
        opacity: 0,
      }
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => {
      return {
        x: direction === "right" ? 300 : -300,
        opacity: 0,
      }
    },
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-md md:max-w-2xl relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 z-10 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={title + image} // Change key to force re-render
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <div className="relative h-48 sm:h-64">
              <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{title}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{content}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between p-4 border-t border-gray-100">
          {onPrev && (
            <button
              className="p-2 rounded-full bg-[#1C74BB] text-white hover:bg-transparent hover:text-[#1C74BB] hover:border-[#1C74BB] border border-transparent transition-all duration-200"
              onClick={handlePrev}
              aria-label="Previous item"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
          {!onPrev && <div></div>}

          {onNext && (
            <button
              className="p-2 rounded-full bg-[#1C74BB] text-white hover:bg-transparent hover:text-[#1C74BB] hover:border-[#1C74BB] border border-transparent transition-all duration-200"
              onClick={handleNext}
              aria-label="Next item"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

