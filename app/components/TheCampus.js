'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TheCampus() {
  const campusFeatures = [
    {
      src: "/images/campus2.jpg",
      alt: "Our Branches",
      title: "Multiple Branches",
      description: "Conveniently located campuses across the city",
      link: "/branches"
    },
    {
      src: "/images/SKA-84.jpg",
      alt: "Student Activities",
      title: "Vibrant Activities",
      description: "Rich extracurricular programs and events",
      link: "/branches"
    },
    {
      src: "/images/SKA-26.jpg",
      alt: "Modern Facilities",
      title: "World-Class Facilities",
      description: "State-of-the-art learning environments",
      link: "/branches"
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
            Campus Life
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience Our Campus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art campuses provide the perfect environment for learning, growth, and personal development
          </p>
        </div>

        {/* Campus Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {campusFeatures.map((feature, index) => (
            <div key={index} className="border border-gray-200 bg-white">
              <Link href={feature.link} className="block">

                {/* Image */}
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <span className="text-brand-primary font-semibold text-sm hover:opacity-85 transition-opacity">
                    Explore →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Campus Stats */}
        <div className="bg-gray-50 border border-gray-200 p-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              { number: '3+', label: 'Campus Locations' },
              { number: '50+', label: 'Classrooms' },
              { number: '2', label: 'Libraries' },
              { number: '15+', label: 'Labs & Facilities' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Visit Our Campus?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Schedule a visit to experience our world-class facilities and meet our dedicated faculty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-brand-primary text-white px-8 py-4 text-center font-semibold hover:opacity-85 transition-opacity"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/gallery"
                className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-4 text-center font-semibold hover:opacity-85 transition-opacity"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
