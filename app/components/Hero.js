'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-refined-off-white">
      {/* Simple Hero Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center py-24 lg:py-32">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Overline */}
            <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
              Excellence in Education Since 2006
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-refined-charcoal leading-tight">
              Spring of Knowledge Academy
            </h1>

            {/* Tagline */}
            <p className="text-2xl text-refined-charcoal-light font-light leading-relaxed">
              Where Excellence Is A Habit, Not A Goal
            </p>

            {/* Description */}
            <p className="text-lg text-refined-gray-medium leading-relaxed">
              A premier educational institution in Addis Ababa, Ethiopia, providing world-class K-12 education with a proven track record of academic excellence and student success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-block bg-brand-primary text-white px-8 py-4 text-center font-semibold rounded-refined transition-all duration-200 hover:opacity-90 hover:shadow-refined-md transform hover:scale-102"
              >
                Apply Now
              </Link>

              <Link
                href="/about"
                className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-4 text-center font-semibold rounded-refined transition-all duration-200 hover:bg-brand-primary hover:text-white"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-refined-border-light">
              <div>
                <div className="text-3xl font-bold text-brand-primary">18+</div>
                <div className="text-sm text-refined-gray-medium mt-1">Years Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">2,000+</div>
                <div className="text-sm text-refined-gray-medium mt-1">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">100+</div>
                <div className="text-sm text-refined-gray-medium mt-1">Educators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">98%</div>
                <div className="text-sm text-refined-gray-medium mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-refined-lg overflow-hidden shadow-refined-sm transition-shadow duration-300 hover:shadow-refined-md">
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
