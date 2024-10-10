"use client"

import Link from 'next/link'
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function HomeEnroll() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-black">
      <BackgroundBeams />
      <div className="container mx-auto text-center relative z-10 h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 [text-wrap:balance] mx-auto max-w-4xl tracking-tight">
          <span className="block mb-2">Enroll Now for</span>
          <span className="block mb-2">Fall 2024</span>
        </h2>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our community of learners and start your journey towards excellence.
        </p>
        <Link href="/enroll">
          <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] hover:text-white hover:bg-[#b18aa7] rounded-md font-light transition duration-200 ease-linear">
            Enroll Today
          </button>
        </Link>
      </div>
    </section>
  )
}