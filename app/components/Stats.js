'use client'

import { useState, useEffect, useRef } from 'react'
import NumberTicker from "@/components/ui/number-ticker"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { label: 'Students', value: 10000, suffix: '+' },
    { label: 'Courses', value: 200, suffix: '+' },
    { label: 'Graduation Rate', value: 95, suffix: '%' },
    { label: 'Career Placement', value: 88, suffix: '%' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">
                <NumberTicker 
                  initialValue={0} 
                  targetValue={stat.value} 
                  duration={1500}
                  suffix={stat.suffix}
                  start={isVisible}
                />
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}