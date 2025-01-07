"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ["Excellence", "Innovation", "Growth", "Success"]

export default function DrivenByExcellence() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 max-w-2xl">
            <Image 
              src="/images/SKA-75.jpg" 
              alt="Excellence" 
              width={800} 
              height={600} 
              className="rounded-lg w-full h-auto object-cover" 
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-2xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              Driven by{' '}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[currentWord]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0"
                    style={{ color: '#1C74BB' }}
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible">Excellence</span>
              </span>
            </h2>
            <p className="mb-4">
            Spring of Knowledge Academy S.C. is a legally established private school in 2006 to contribute its part in the human capital development program of the country. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}