"use client"

import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My experience here has been transformative. The faculty and resources have prepared me for a successful career in technology.",
      author: "Mohammed Abdulwasi",
      role: "Computer Science Graduate",
    },
    {
      quote: "The diverse community and innovative programs have broadened my perspective and opened up new opportunities beyond my expectations.",
      author: "Mahi Imran",
      role: "Business Administration Student",
    },
    {
      quote: "I've gained practical skills and industry connections that have jumpstarted my career and given me confidence in my abilities.",
      author: "Umer Ali",
      role: "Engineering Graduate",
    },
    {
      quote: "The supportive environment and challenging curriculum have helped me grow both personally and professionally in remarkable ways.",
      author: "Nejat Mohammed",
      role: "Medicine Student",
    }
  ]

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
            Student Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our students about their transformative experiences at Spring of Knowledge Academy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 p-8">

              {/* Quote Text */}
              <p className="mb-6 text-gray-700 leading-relaxed text-base italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-brand-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '2000+', label: 'Happy Students' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '95%', label: 'College Acceptance' },
            { number: '100+', label: 'Success Stories' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 bg-white">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
