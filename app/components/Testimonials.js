"use client"

import React from 'react'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My experience here has been transformative. The faculty and resources have prepared me for a successful career.",
      author: "Mohammed Abdulwasi",
      role: "Computer Science Graduate"
    },
    {
      quote: "The diverse community and innovative programs have broadened my perspective and opened up new opportunities.",
      author: "Mahi Imran",
      role: "Business Administration Student"
    },
    {
      quote: "I've gained practical skills and industry connections that have jumpstarted my career.",
      author: "Umer Ali",
      role: "Engineering Graduate"
    },
    {
      quote: "The supportive environment and challenging curriculum have helped me grow both personally and professionally.",
      author: "Nejat Mohammed",
      role: "Medicine Student"
    }
  ]

  return (
    <div className="h-[40rem] w-full bg-gray-100 relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Students Say</h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          className="py-4"
        >
          {(testimonial) => (
            <div className="bg-[#111827] p-6 rounded-xl w-[400px] h-[250px] flex-shrink-0 mx-4 border border-gray-700 flex flex-col justify-between cursor-pointer">
              <p className="mb-4 text-white italic text-sm">{testimonial.quote}</p>
              <div>
                <div className="font-semibold text-gray-300">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          )}
        </InfiniteMovingCards>
      </div>
    </div>
  )
}