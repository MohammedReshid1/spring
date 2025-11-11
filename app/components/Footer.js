"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'
import { Facebook, Linkedin, Mail, Phone, Send, MapPin, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

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

  const stats = [
    { number: "2000+", label: "Students Enrolled" },
    { number: "100+", label: "Expert Educators" },
    { number: "18+", label: "Years Excellence" },
    { number: "3+", label: "Campus Locations" },
  ]

  const socialLinks = [
    { href: "https://telegram.org", icon: Send, label: "Telegram" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="bg-[#1A1A1A] text-white">

      {/* Top Section - Newsletter - World-Class Styling */}
      <div className="border-b border-[#333333]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-20">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Newsletter */}
            <motion.div className="space-y-6" variants={staggerItem}>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                variants={fadeInUp}
              >
                Join Our Community
              </motion.h2>
              <motion.p
                className="text-lg text-[#AAAAAA] leading-[1.7]"
                variants={fadeInUp}
              >
                Subscribe to receive updates on events, news, and educational insights from Spring of Knowledge Academy.
              </motion.p>
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
                variants={fadeInUp}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-[#1A1A1A] bg-white rounded-md border-2 border-transparent focus:border-[#1C74BB] focus:outline-none transition-colors duration-200"
                  required
                />
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#1C74BB] hover:bg-[#155A96] text-white px-8 py-4 font-semibold text-lg transition-colors duration-200 rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(28,116,187,0.15)]"
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
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Quick Stats - Staggered Animation */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 border border-[#333333] bg-[#252525] rounded-lg transition-all duration-300 hover:border-[#1C74BB] hover:bg-[#2A2A2A]"
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#1C74BB] mb-1">{stat.number}</div>
                  <div className="text-sm text-[#AAAAAA]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content - World-Class Typography */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >

          {/* Brand Column */}
          <motion.div className="lg:col-span-2 space-y-6" variants={staggerItem}>
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/SPRING_LOGO.png"
                  alt="Spring of Knowledge Academy"
                  width={180}
                  height={90}
                  className="object-contain brightness-0 invert"
                />
              </motion.div>
            </Link>
            <p className="text-xl italic text-white font-semibold">
              "Where Excellence Is A Habit, Not A Goal"
            </p>
            <p className="text-[#AAAAAA] leading-[1.7]">
              Since 2006, Spring of Knowledge Academy has been dedicated to providing world-class education and fostering a genuine love for learning in students of all ages.
            </p>

            {/* Social Links - Refined Hover */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-[#444444] rounded-md flex items-center justify-center text-[#AAAAAA] hover:border-[#1C74BB] hover:bg-[#252525] hover:text-[#1C74BB] transition-all duration-200"
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={staggerItem}>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#AAAAAA] hover:text-[#1C74BB] hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div className="space-y-6" variants={staggerItem}>
            <h3 className="text-xl font-bold text-white">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#AAAAAA] hover:text-[#1C74BB] hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Contact */}
          <motion.div className="space-y-6" variants={staggerItem}>
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#AAAAAA] hover:text-[#1C74BB] hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#333333] space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <a
                href="tel:+251-11-618-0066"
                className="flex items-center gap-3 text-[#AAAAAA] hover:text-[#1C74BB] transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+251-11-618-0066</span>
              </a>
              <a
                href="mailto:info@springofknowledge.org"
                className="flex items-center gap-3 text-[#AAAAAA] hover:text-[#1C74BB] transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>info@springofknowledge.org</span>
              </a>
              <div className="flex items-start gap-3 text-[#AAAAAA]">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar - Refined Border */}
      <div className="border-t border-[#333333]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#888888]">
            <p>
              &copy; {new Date().getFullYear()} Spring of Knowledge Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-[#1C74BB] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#1C74BB] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-[#1C74BB] transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
