import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function WhatMakesUsDifferent() {
  const differences = [
    'Innovative curriculum',
    'World-class faculty',
    'State-of-the-art facilities',
    'Global partnerships',
    'Career-focused programs',
    'Diverse and inclusive community',
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What Makes Us <span style={{ color: '#b18aa7' }}>Different</span>
        </h2>
        
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 max-w-2xl order-1 lg:order-2">
            <Image 
              src="/images/what_makes_us_different.jpg" 
              alt="What Makes Us Different" 
              width={800} 
              height={600} 
              className="rounded-lg w-full h-auto object-cover mb-8 lg:mb-0" 
            />
          </div>
          
          <div className="w-full lg:w-1/2 max-w-2xl order-2 lg:order-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differences.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}