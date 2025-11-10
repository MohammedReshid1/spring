'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Simple Hero Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Overline */}
            <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
              Excellence in Education Since 2006
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Spring of Knowledge Academy
            </h1>

            {/* Tagline */}
            <p className="text-2xl text-gray-900 font-light leading-relaxed">
              Where Excellence Is A Habit, Not A Goal
            </p>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              A premier educational institution in Addis Ababa, Ethiopia, providing world-class K-12 education with a proven track record of academic excellence and student success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-block bg-brand-primary text-white px-8 py-4 text-center font-semibold hover:opacity-85 transition-opacity duration-200"
              >
                Apply Now
              </Link>

              <Link
                href="/about"
                className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-4 text-center font-semibold hover:opacity-85 transition-opacity duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-brand-primary">18+</div>
                <div className="text-sm text-gray-600 mt-1">Years Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">2,000+</div>
                <div className="text-sm text-gray-600 mt-1">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">100+</div>
                <div className="text-sm text-gray-600 mt-1">Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">98%</div>
                <div className="text-sm text-gray-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] bg-gray-100">
              <Image
                src="/images/SKA-1.jpg"
                alt="Spring of Knowledge Academy Campus"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
