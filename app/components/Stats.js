'use client'

import Link from 'next/link'

const stats = [
  { value: '2,000+', label: 'Students Enrolled' },
  { value: '100+', label: 'Expert Educators' },
  { value: '18+', label: 'Years of Excellence' },
  { value: '98%', label: 'Success Rate' },
  { value: '3+', label: 'Campus Locations' },
  { value: '12+', label: 'Programs Offered' },
  { value: '95%', label: 'Parent Satisfaction' },
  { value: '95%', label: 'College Acceptance' },
]

export default function Stats() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
            Our Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering measurable results and transforming lives through quality education since 2006
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 bg-white">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 p-12 text-center border border-gray-200">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of a community that values excellence, innovation, and personal growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-primary text-white px-8 py-4 font-semibold hover:opacity-85 transition-opacity"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-4 font-semibold hover:opacity-85 transition-opacity"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
