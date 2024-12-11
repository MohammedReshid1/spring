"use client"
import { useState } from "react"
import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, Send, ChevronRight } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
    }, 2000)
  }

  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">Spring of Knowledge Academy</h2>
            <p className="text-lg italic">"Where Excellence Is A Habit Not A Goal"</p>
            <p className="text-sm opacity-80">
              Dedicated to providing high-quality education and fostering a love for learning in students of all ages.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Events", "Success Stories", "Gallery","Departments"].map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4 text-[#b18aa7]" />
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[#b18aa7] hover:text-white transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+251-96-053-1010</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>ethiospring@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              {[
                { href: "https://telegram.org", icon: Send, label: "Telegram" },
                { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <Link key={social.label} href={social.href} className="text-[#b18aa7] hover:text-white transition-colors duration-200">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
            <p className="text-sm opacity-80">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#b18aa7]"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-4 py-2 text-white bg-[#b18aa7] rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#b18aa7] focus:ring-opacity-50 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Spring of Knowledge Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}