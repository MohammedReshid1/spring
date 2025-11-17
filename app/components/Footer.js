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
    <footer className="bg-gradient-coffee text-parchment relative border-t-3 border-amber">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center shadow-warm">
                <span className="font-display text-2xl font-bold text-indigo">S</span>
              </div>
            </div>
            <h2 className="text-2xl font-serif font-bold">Spring of Knowledge</h2>
            <p className="text-base font-serif italic text-amber border-l-3 border-amber pl-4 leading-relaxed">
              "Where Excellence is a Habit, Not a Goal"
            </p>
            <p className="text-sm opacity-90 leading-relaxed">
              Nurturing excellence through quality education in Addis Ababa, Ethiopia.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-amber border-b border-amber/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About Us" },
                { href: "/upcomingEvents", text: "Events" },
                { href: "/success", text: "Success Stories" },
                { href: "/gallery", text: "Gallery" },
                { href: "/departments", text: "Departments" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-ui hover:text-amber transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 text-amber group-hover:translate-x-1 transition-transform" />
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-amber border-b border-amber/30 pb-2">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-amber mt-0.5 flex-shrink-0" />
                <span className="text-sm group-hover:text-amber transition-colors">+251-96-053-1010</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-amber mt-0.5 flex-shrink-0" />
                <span className="text-sm break-all group-hover:text-amber transition-colors">ethiospring@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              {[
                { href: "https://telegram.org", icon: Send, label: "Telegram" },
                { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border-2 border-amber/50 hover:bg-amber hover:text-coffee rounded-full transition-all duration-300 flex items-center justify-center"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-amber border-b border-amber/30 pb-2">Stay Connected</h3>
            <p className="text-sm opacity-90">
              Subscribe for news, events, and updates from our academy.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-parchment/10 text-parchment font-ui text-sm border border-amber/30 rounded-lg focus:outline-none focus:border-amber focus:bg-parchment/20 transition-all placeholder:text-parchment/40"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-4 py-3 font-ui font-semibold text-coffee bg-amber border-2 border-amber hover:bg-transparent hover:text-amber rounded-lg transition-all duration-300 shadow-warm ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-parchment/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>
            © {new Date().getFullYear()} Spring of Knowledge Academy. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>📍</span>
            <span>Addis Ababa, Ethiopia</span>
          </p>
        </div>
      </div>
    </footer>
  )
}