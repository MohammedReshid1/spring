import { CheckCircle } from 'lucide-react'

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differences.map((item, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="text-primary mr-2" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}