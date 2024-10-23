'use client'

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
        <Image src="/images/Logo.png" alt="Academy Logo" width={150} height={75} className="object-contain" />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex space-x-3">
          <li><Link href="/" className={buttonVariants({ variant: "link", className: "text-sm font-light py-1.5 px-2" })}>Home</Link></li>
          <li><Link href="/about" className={buttonVariants({ variant: "link", className: "text-sm font-light py-1.5 px-2" })}>About Us</Link></li>
          <li><Link href="/upcomingEvents" className={buttonVariants({ variant: "link", className: "text-sm font-light py-1.5 px-2" })}>Events</Link></li>
          <li><Link href="/success" className={buttonVariants({ variant: "link", className: "text-sm font-light py-1.5 px-2" })}>Success Stories</Link></li>
          <li><Link href="/gallery" className={buttonVariants({ variant: "link", className: "text-sm font-light py-1.5 px-2" })}>Gallery</Link></li>
          <li>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "text-sm font-light bg-[#b18aa7] text-white hover:bg-[#9a7691] hover:text-white border-[#b18aa7] py-1.5 px-3"
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
              <li><Link href="/" className={buttonVariants({ variant: "link", className: "text-sm font-light" })} onClick={closeSheet}>Home</Link></li>
              <li><Link href="/about" className={buttonVariants({ variant: "link", className: "text-sm font-light" })} onClick={closeSheet}>About Us</Link></li>
              <li><Link href="/upcomingEvents" className={buttonVariants({ variant: "link", className: "text-sm font-light" })} onClick={closeSheet}>Events</Link></li>
              <li><Link href="/success" className={buttonVariants({ variant: "link", className: "text-sm font-light" })} onClick={closeSheet}>Success Stories</Link></li>
              <li><Link href="/gallery" className={buttonVariants({ variant: "link", className: "text-sm font-light" })} onClick={closeSheet}>Gallery</Link></li>
              <li>
                <Link 
                  href="/contact" 
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "text-sm font-light bg-[#b18aa7] text-white hover:bg-[#9a7691] hover:text-white border-[#b18aa7] rounded-full"
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