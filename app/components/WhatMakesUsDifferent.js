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
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0 md:w-1/2 md:pr-4 text-center md:text-left py-4"> {/* Add padding here */}
            <Image 
              src="/images/what_makes_us_different.jpg" 
              alt="Excellence" 
              width={500} 
              height={300} 
              className="rounded-lg mx-auto md:mx-0" 
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differences.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-2" />
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