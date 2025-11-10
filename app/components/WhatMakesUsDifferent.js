"use client"

import Image from 'next/image'

export default function WhatMakesUsDifferent() {
  const principles = [
    {
      title: 'Every Child Matters',
      description: 'Every child has the potential to learn and excel',
    },
    {
      title: 'Personalized Learning',
      description: 'We regard the prior knowledge and experience of each child',
    },
    {
      title: 'Real-World Connection',
      description: 'Linking the learning process to everyday experience',
    },
    {
      title: 'Family Partnership',
      description: 'We take families and parents as our principal partners',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
            Our Philosophy
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four core principles that guide our approach to education and shape the future of our students
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Principles Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] bg-gray-100">
              <Image
                src="/images/SKA-102.jpg"
                alt="What Makes Us Different"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100%', label: 'Student Focus' },
            { number: '24/7', label: 'Parent Support' },
            { number: '1:15', label: 'Teacher Ratio' },
            { number: '95%', label: 'Satisfaction Rate' }
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
