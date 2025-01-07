'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  image: string
  onNext: () => void
  onPrev: () => void
}

export default function Modal({ isOpen, onClose, title, content, image, onNext, onPrev }: ModalProps) {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')

  if (!isOpen) return null

  const handleNext = () => {
    setDirection('forward')
    onNext()
  }

  const handlePrev = () => {
    setDirection('backward')
    onPrev()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-6 max-w-2xl w-full m-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={image}
              initial={{ opacity: 0, x: direction === 'forward' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'forward' ? -50 : 50 }}
              transition={{ duration: 0.3 }}
              className="md:w-1/2"
            >
              <Image 
                src={image} 
                alt={title}
                width={400}
                height={700}
                className="rounded-lg object-cover w-full h-[100%]"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={title}
              initial={{ opacity: 0, y: direction === 'forward' ? 20 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === 'forward' ? -20 : 20 }}
              transition={{ duration: 0.3 }}
              className="md:w-1/2"
            >
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600  text-justify">{content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            className="bg-white text-[#1C74BB] border border-[#1C74BB] rounded-full p-2 hover:bg-[#1C74BB] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-[#1C74BB] border border-[#1C74BB] rounded-full p-2 hover:bg-[#1C74BB] hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

