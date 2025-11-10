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
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
            Academic Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-refined-charcoal mb-6">
            Our Programs
          </h2>
          <p className="text-lg text-refined-gray-medium max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to nurture young minds and prepare students for success at every stage
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white border border-refined-border-light rounded-refined-lg overflow-hidden shadow-refined-sm transition-all duration-300 hover:shadow-refined-md hover:-translate-y-1">

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
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-refined-charcoal">
                  {program.name}
                </h3>

                <div className="flex gap-4 text-sm text-refined-gray-medium">
                  <span>{program.ageRange}</span>
                  <span>•</span>
                  <span>{program.students}</span>
                </div>

                <p className="text-refined-gray-medium leading-relaxed">
                  {program.description}
                </p>

                <Link
                  href="/departments"
                  className="inline-flex items-center text-brand-primary font-semibold transition-all duration-200 hover:gap-2 group"
                >
                  Learn More
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/departments"
            className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-4 font-semibold rounded-refined transition-all duration-200 hover:bg-brand-primary hover:text-white"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
