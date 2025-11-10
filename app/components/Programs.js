'use client'

import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    name: "Kindergarten",
    ageRange: "Ages 3-5",
    students: "150+ Students",
    description: "Nurturing young minds through play-based learning and gentle guidance in a safe, stimulating environment.",
    image: "/images/SKA-57.jpg",
  },
  {
    name: "Primary School",
    ageRange: "Grades 1-8",
    students: "500+ Students",
    description: "Comprehensive curriculum covering core subjects while emphasizing critical thinking, creativity, and character development.",
    image: "/images/SKA-48.jpg",
  },
  {
    name: "High School",
    ageRange: "Grades 9-12",
    students: "400+ Students",
    description: "Rigorous academic curriculum meeting national standards while preparing students for higher education and beyond.",
    image: "/images/SKA-85.jpg",
  },
]

export default function Programs() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
            Academic Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to nurture young minds and prepare students for success at every stage
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white border border-gray-200">

              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {program.name}
                </h3>

                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{program.ageRange}</span>
                  <span>•</span>
                  <span>{program.students}</span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                <Link
                  href="/departments"
                  className="inline-block text-brand-primary font-semibold hover:opacity-85 transition-opacity"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/departments"
            className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-4 font-semibold hover:opacity-85 transition-opacity"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
