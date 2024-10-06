"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { TypingAnimation } from '@/components/ui/typing-animation'

export default function Hero() {
  return (
    <section className="bg-background text-foreground text-center py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to Spring of Knowledge Academy</h1>
        
        <div className="h-8 mb-8">
          <TypingAnimation text="Start your journey with us today!" speed={70} />
        </div>

        <Button variant="secondary" size="lg" asChild>
          <Link href="/learn-more">Learn More</Link>
        </Button>
      </div>
    </section>
  )
}