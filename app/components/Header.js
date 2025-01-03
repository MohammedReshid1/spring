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
    <header className="flex justify-between items-center py-1.5 px-4 bg-white shadow-sm h-18 overflow-visible">
  <div className="logo -my-5">
    <Image src="/images/Spring_Logo.png" alt="Academy Logo" width={150} height={75} className="object-contain" />
  </div>
  <nav className="hidden lg:block">
    <ul className="flex space-x-3">
      {[
        { href: "/", text: "Home" },
        { href: "/about", text: "About Us" },
        { href: "/upcomingEvents", text: "Events" },
        { href: "/success", text: "Success Stories" },
        { href: "/gallery", text: "Gallery" },
        { href: "/departments", text: "Departments" },
      ].map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-larg font-medium py-1.5 px-2 relative group border border-transparent"
          >
            <span className="text-[#111827] group-hover:text-[#18BEBC] transition-colors duration-300">
              {link.text}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#18BEBC] group-hover:w-full transition-all duration-300"></span>
            <style jsx>{`
              .group:hover {
                background-color: #ffffff;
                border-color: #18BEBC;
              }
            `}</style>
          </Link>
        </li>
      ))}
        <li>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "text-sm font-light bg-[#18BEBC] text-white border border-white hover:bg-white hover:text-[#18BEBC] hover:border-[#18BEBC] py-1.5 px-3 transition-colors duration-300"
            )}
          >
            Contact Us
          </Link>
        </li>

    </ul>
  </nav>

  <nav className="lg:hidden">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className={buttonVariants({ variant: "outline", size: "sm", className: "p-2" })}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg">Menu</SheetTitle>
        </SheetHeader>
        <ul className="space-y-4 mt-6">
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
                className="text-sm font-light relative group"
                onClick={closeSheet}
              >
                <span className="text-black group-hover:text-[#18BEBC] transition-colors duration-300">
                  {link.text}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#18BEBC] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-sm font-light bg-[#18BEBC] text-white hover:bg-[#18BEBC] hover:text-white border-[#18BEBC] rounded-full"
              )}
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
