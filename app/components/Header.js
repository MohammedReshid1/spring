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
    <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-r from-indigo via-indigo to-[#2C4A5F] border-b-3 border-amber h-auto sticky top-0 z-50 shadow-elevated backdrop-blur-sm">
  <div className="logo animate-scale-in flex items-center gap-3">
  <Link href="/" legacyBehavior>
      <a className="flex items-center gap-2">
        <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center shadow-warm">
          <span className="font-display text-xl font-bold text-indigo">S</span>
        </div>
        <div>
          <span className="font-serif text-xl font-bold text-parchment tracking-tight block leading-tight">Spring of Knowledge</span>
          <span className="font-ui text-xs text-amber italic">Academy</span>
        </div>
      </a>
    </Link>
  </div>
  <nav className="hidden lg:block">
    <ul className="flex space-x-1">
      {[
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/upcomingEvents", text: "Events" },
        { href: "/success", text: "Success" },
        { href: "/gallery", text: "Gallery" },
        { href: "/departments", text: "Departments" },
      ].map((link, index) => (
        <li key={index} className={`animate-slide-in stagger-${index + 1}`}>
          <Link
            href={link.href}
            className="text-sm font-ui font-medium py-2 px-4 text-parchment/90 hover:text-amber hover:bg-parchment/10 transition-all duration-300 block rounded-md relative group"
          >
            {link.text}
            <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>
      ))}
        <li className="animate-slide-in stagger-6">
          <Link
            href="/contact"
            className="text-sm font-ui font-semibold bg-amber text-indigo border-2 border-amber hover:bg-transparent hover:text-amber py-2 px-6 transition-all duration-300 block rounded-md shadow-warm hover:shadow-depth"
          >
            Contact Us
          </Link>
        </li>

    </ul>
  </nav>

  <nav className="lg:hidden">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="p-2 border-2 border-amber hover:bg-amber/10 transition-colors rounded-md">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="#D4850C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12L20 12" stroke="#D4850C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 6L20 6" stroke="#D4850C" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-gradient-coffee border-l-3 border-amber">
        <SheetHeader>
          <SheetTitle className="text-2xl font-serif text-amber">Navigation</SheetTitle>
        </SheetHeader>
        <ul className="space-y-2 mt-8">
          {[
            { href: "/", text: "Home" },
            { href: "/about", text: "About Us" },
            { href: "/upcomingEvents", text: "Events" },
            { href: "/success", text: "Success Stories" },
            { href: "/gallery", text: "Gallery" },
          ].map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-base font-ui font-medium text-parchment hover:text-amber hover:bg-parchment/10 transition-all duration-300 block py-3 px-4 rounded-md border-l-2 border-transparent hover:border-amber"
                onClick={closeSheet}
              >
                {link.text}
              </Link>
            </li>
          ))}
          <li className="mt-6 pt-4 border-t border-parchment/20">
            <Link
              href="/contact"
              className="text-base font-ui font-semibold bg-amber text-indigo border-2 border-amber hover:bg-transparent hover:text-amber py-3 px-6 transition-all duration-300 block rounded-md text-center shadow-warm"
              onClick={closeSheet}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  </nav>
</header>
)
}
