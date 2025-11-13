"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
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
      {/* Top Bar - Contact Info - World-Class Styling */}
      <div className="hidden md:block bg-[#1A1A1A] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+251-11-618-0066"
              className="flex items-center gap-2 hover:text-[#1C74BB] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              +251-11-618-0066
            </a>
            <a
              href="mailto:info@springofknowledge.org"
              className="flex items-center gap-2 hover:text-[#1C74BB] transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              info@springofknowledge.org
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hover:text-[#1C74BB] transition-colors duration-200 font-medium"
            >
              Admissions Open
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - World-Class Elevation */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 bg-white transition-all duration-300",
          isScrolled
            ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)] py-2"
            : "shadow-[0_1px_3px_rgba(0,0,0,0.05)] py-3"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo - Smooth Scale Transition */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/SPRING_LOGO.png"
                  alt="Spring of Knowledge Academy Logo"
                  width={isScrolled ? 120 : 150}
                  height={isScrolled ? 60 : 75}
                  className="object-contain transition-all duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Refined Hover States */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                {navigationLinks.map((link, index) => (
                  <li key={index} className="relative group">
                    <motion.div
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 text-base font-medium py-3 px-4 text-[#333333] hover:text-[#1C74BB] transition-colors duration-200 relative"
                      >
                        {link.text}
                        {link.submenu && <ChevronDown className="w-4 h-4" />}

                        {/* Animated Underline */}
                        <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-[#1C74BB] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                      </Link>
                    </motion.div>

                    {/* Dropdown Menu - World-Class Shadow */}
                    {link.submenu && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-[#E8E8E8] rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                        {link.submenu.map((sublink, subindex) => (
                          <Link
                            key={subindex}
                            href={sublink.href}
                            className="block px-4 py-3 text-[#555555] hover:bg-[#FAFAFA] hover:text-[#1C74BB] transition-colors duration-150"
                          >
                            {sublink.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
                <li>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      asChild
                      className="ml-4 bg-[#1C74BB] hover:bg-[#155A96] text-white transition-colors duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(28,116,187,0.15)] rounded-md"
                    >
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </motion.div>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button - Refined Border */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-[#1C74BB] text-[#1C74BB] hover:bg-[rgba(28,116,187,0.05)] transition-all duration-200"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader className="border-b border-[#E8E8E8] pb-4">
                  <SheetTitle className="text-2xl font-bold text-[#1C74BB]">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-2">
                    {navigationLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="block py-3 px-4 text-base font-medium text-[#333333] hover:bg-[#FAFAFA] hover:text-[#1C74BB] rounded-md transition-all duration-200"
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
                                  className="block py-2 px-4 text-sm text-[#555555] hover:text-[#1C74BB] transition-colors duration-150"
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
                      <Button
                        asChild
                        className="w-full bg-[#1C74BB] hover:bg-[#155A96] text-white transition-colors duration-200 rounded-md"
                      >
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
      </motion.header>
    </>
  )
}
