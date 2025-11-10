"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu, ChevronDown, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeSheet = () => {
    setIsOpen(false)
  }

  const navigationLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    {
      href: "/departments",
      text: "Programs",
      submenu: [
        { href: "/departments#kindergarten", text: "Kindergarten" },
        { href: "/departments#primary", text: "Primary School" },
        { href: "/departments#highschool", text: "High School" },
      ]
    },
    { href: "/upcomingEvents", text: "Events" },
    { href: "/success", text: "Success Stories" },
    { href: "/gallery", text: "Gallery" },
  ]

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-academic-navy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+251-11-618-0066" className="flex items-center gap-2 hover:text-academic-gold transition-colors">
              <Phone className="w-4 h-4" />
              +251-11-618-0066
            </a>
            <a href="mailto:info@springofknowledge.org" className="flex items-center gap-2 hover:text-academic-gold transition-colors">
              <Mail className="w-4 h-4" />
              info@springofknowledge.org
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-academic-gold transition-colors">
              Admissions Open
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white shadow-md py-3"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/SPRING_LOGO.png"
                alt="Spring of Knowledge Academy Logo"
                width={isScrolled ? 120 : 150}
                height={isScrolled ? 60 : 75}
                className="object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                {navigationLinks.map((link, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-base font-medium py-3 px-4 text-gray-700 hover:text-brand-primary transition-colors duration-300 relative"
                    >
                      {link.text}
                      {link.submenu && <ChevronDown className="w-4 h-4" />}
                      <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>

                    {/* Dropdown Menu */}
                    {link.submenu && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-premium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                        {link.submenu.map((sublink, subindex) => (
                          <Link
                            key={subindex}
                            href={sublink.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-primary-lighter hover:text-brand-primary transition-colors duration-200"
                          >
                            {sublink.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
                <li>
                  <Button asChild className="ml-4 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl shadow-md hover:shadow-glow transition-all duration-300">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="border-brand-primary text-brand-primary hover:bg-brand-primary-lighter">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="text-2xl font-bold text-brand-primary">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-2">
                    {navigationLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-brand-primary-lighter hover:text-brand-primary rounded-lg transition-all duration-200"
                          onClick={closeSheet}
                        >
                          {link.text}
                        </Link>
                        {link.submenu && (
                          <ul className="ml-4 mt-2 space-y-1">
                            {link.submenu.map((sublink, subindex) => (
                              <li key={subindex}>
                                <Link
                                  href={sublink.href}
                                  className="block py-2 px-4 text-sm text-gray-600 hover:text-brand-primary transition-colors"
                                  onClick={closeSheet}
                                >
                                  {sublink.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                    <li className="pt-4">
                      <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl">
                        <Link href="/contact" onClick={closeSheet}>
                          Contact Us
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
