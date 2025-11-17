"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => {
    setIsOpen(false)
  }

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-pure-black border-b-4 border-electric-pink h-20 sticky top-0 z-50">
  <div className="logo animate-scale-in">
  <Link href="/" legacyBehavior>
      <a className="font-display text-2xl font-bold text-pure-white uppercase tracking-tighter hover:text-electric-pink transition-colors duration-200">
        SPRING
      </a>
    </Link>
  </div>
  <nav className="hidden lg:block">
    <ul className="flex space-x-1">
      {[
        { href: "/", text: "HOME" },
        { href: "/about", text: "ABOUT" },
        { href: "/upcomingEvents", text: "EVENTS" },
        { href: "/success", text: "SUCCESS" },
        { href: "/gallery", text: "GALLERY" },
        { href: "/departments", text: "DEPTS" },
      ].map((link, index) => (
        <li key={index} className={`animate-slide-in-right stagger-${index + 1}`}>
          <Link
            href={link.href}
            className="text-xs font-mono font-bold py-2 px-3 text-pure-white hover:bg-electric-pink hover:text-pure-black transition-all duration-150 block uppercase tracking-wide border-2 border-transparent hover:border-electric-pink"
          >
            {link.text}
          </Link>
        </li>
      ))}
        <li className="animate-slide-in-right stagger-6">
          <Link
            href="/contact"
            className="text-xs font-mono font-bold bg-electric-pink text-pure-black border-4 border-electric-pink hover:bg-cyber-yellow hover:border-cyber-yellow py-2 px-4 transition-all duration-150 block uppercase tracking-wide shadow-brutal-pink hover:shadow-brutal-yellow"
          >
            CONTACT
          </Link>
        </li>

    </ul>
  </nav>

  <nav className="lg:hidden">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="p-2 border-4 border-electric-pink hover:bg-electric-pink group transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="#FFFFFF" className="group-hover:stroke-black" strokeWidth="3" strokeLinecap="square"/>
          <path d="M4 12L20 12" stroke="#FFFFFF" className="group-hover:stroke-black" strokeWidth="3" strokeLinecap="square"/>
          <path d="M4 6L20 6" stroke="#FFFFFF" className="group-hover:stroke-black" strokeWidth="3" strokeLinecap="square"/>
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-pure-black border-l-4 border-electric-pink">
        <SheetHeader>
          <SheetTitle className="text-2xl font-display text-electric-pink uppercase">MENU</SheetTitle>
        </SheetHeader>
        <ul className="space-y-0 mt-8">
          {[
            { href: "/", text: "HOME" },
            { href: "/about", text: "ABOUT" },
            { href: "/upcomingEvents", text: "EVENTS" },
            { href: "/success", text: "SUCCESS" },
            { href: "/gallery", text: "GALLERY" },
          ].map((link, index) => (
            <li key={index} className="border-b-2 border-electric-pink/20">
              <Link
                href={link.href}
                className="text-lg font-mono font-bold text-pure-white hover:bg-electric-pink hover:text-pure-black transition-all duration-150 block py-4 px-4 uppercase"
                onClick={closeSheet}
              >
                {link.text}
              </Link>
            </li>
          ))}
          <li className="mt-6">
            <Link
              href="/contact"
              className="text-base font-mono font-bold bg-electric-pink text-pure-black border-4 border-electric-pink hover:bg-cyber-yellow hover:border-cyber-yellow py-4 px-6 transition-all duration-150 block uppercase text-center shadow-brutal-pink hover:shadow-brutal-yellow"
              onClick={closeSheet}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  </nav>
</header>
)
}
