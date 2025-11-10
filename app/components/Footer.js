"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Phone, Send, MapPin, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      alert("Thank you for subscribing!")
    }, 1500)
  }

  const quickLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/contact", text: "Contact" },
    { href: "/success", text: "Success Stories" },
  ]

  const programs = [
    { href: "/departments#kindergarten", text: "Kindergarten" },
    { href: "/departments#primary", text: "Primary School" },
    { href: "/departments#highschool", text: "High School" },
    { href: "/departments", text: "View All Programs" },
  ]

  const resources = [
    { href: "/upcomingEvents", text: "Events Calendar" },
    { href: "/gallery", text: "Photo Gallery" },
    { href: "/news", text: "Latest News" },
    { href: "/branches", text: "Campus Locations" },
  ]

  return (
    <footer className="bg-gray-900 text-white">

      {/* Top Section - Newsletter */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Subscribe to receive updates on events, news, and educational insights from Spring of Knowledge Academy.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-gray-900 bg-white focus:outline-none"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-brand-primary hover:opacity-85 text-white px-8 py-4 font-semibold text-lg transition-opacity"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Subscribe
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "2000+", label: "Students Enrolled" },
                { number: "100+", label: "Expert Educators" },
                { number: "18+", label: "Years Excellence" },
                { number: "3+", label: "Campus Locations" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 border border-gray-800 bg-gray-800">
                  <div className="text-3xl font-bold text-brand-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/SPRING_LOGO.png"
                alt="Spring of Knowledge Academy"
                width={180}
                height={90}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xl italic text-gray-300 font-semibold">
              "Where Excellence Is A Habit, Not A Goal"
            </p>
            <p className="text-gray-400 leading-relaxed">
              Since 2006, Spring of Knowledge Academy has been dedicated to providing world-class education and fostering a genuine love for learning in students of all ages.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { href: "https://telegram.org", icon: Send, label: "Telegram" },
                { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-brand-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <ChevronRight className="w-4 h-4" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <ChevronRight className="w-4 h-4" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <ChevronRight className="w-4 h-4" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-gray-800 space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <a href="tel:+251-11-618-0066" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+251-11-618-0066</span>
              </a>
              <a href="mailto:info@springofknowledge.org" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@springofknowledge.org</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Spring of Knowledge Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
