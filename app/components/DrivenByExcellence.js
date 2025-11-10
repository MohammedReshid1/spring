"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function DrivenByExcellence() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] bg-gray-200">
              <Image
                src="/images/SKA-75.jpg"
                alt="Excellence at Spring of Knowledge Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Header */}
            <div>
              <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
                Our Story
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Driven by Excellence
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                Spring of Knowledge Academy S.C. was established in 2006 with a clear mission: to contribute to the human capital development of our nation through excellence in education.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 18 years, we've been nurturing young minds, fostering critical thinking, and building strong foundations for tomorrow's leaders. Our commitment to educational excellence has made us a trusted institution for families seeking the best for their children.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-brand-primary pl-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Academic Excellence
                </h3>
                <p className="text-sm text-gray-600">
                  Rigorous curriculum exceeding national standards
                </p>
              </div>

              <div className="border-l-4 border-brand-primary pl-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Experienced Faculty
                </h3>
                <p className="text-sm text-gray-600">
                  Dedicated teachers with 12+ years average experience
                </p>
              </div>

              <div className="border-l-4 border-brand-primary pl-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Modern Learning
                </h3>
                <p className="text-sm text-gray-600">
                  Innovative teaching methods and state-of-the-art resources
                </p>
              </div>

              <div className="border-l-4 border-brand-primary pl-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Proven Results
                </h3>
                <p className="text-sm text-gray-600">
                  98% success rate with outstanding achievements
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-brand-primary text-white px-8 py-4 font-semibold hover:opacity-85 transition-opacity"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
