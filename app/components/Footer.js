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
    <footer className="bg-pure-black text-pure-white relative border-t-4 border-electric-pink">
      {/* Brutalist geometric accent */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyber-yellow opacity-10"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter">SPRING</h2>
            <p className="text-sm font-mono uppercase tracking-wide text-electric-pink border-l-4 border-electric-pink pl-4">
              WHERE EXCELLENCE IS A HABIT NOT A GOAL
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Dedicated to providing high-quality education and fostering a love for learning.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-mono font-bold uppercase tracking-wide border-b-2 border-electric-pink pb-2">NAVIGATE</h3>
            <ul className="space-y-0">
              {[
                { href: "/", text: "HOME" },
                { href: "/about", text: "ABOUT" },
                { href: "/upcomingEvents", text: "EVENTS" },
                { href: "/success", text: "SUCCESS" },
                { href: "/gallery", text: "GALLERY" },
                { href: "/departments", text: "DEPARTMENTS" },
              ].map((item) => (
                <li key={item.href} className="border-b border-pure-white/10">
                  <Link
                    href={item.href}
                    className="block py-2 font-mono text-sm hover:bg-electric-pink hover:text-pure-black transition-all duration-150 px-2 uppercase tracking-wide"
                  >
                    → {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-mono font-bold uppercase tracking-wide border-b-2 border-electric-pink pb-2">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-electric-pink mt-1 flex-shrink-0" />
                <span className="font-mono text-sm">+251-96-053-1010</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-electric-pink mt-1 flex-shrink-0" />
                <span className="font-mono text-sm break-all">ethiospring@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              {[
                { href: "https://telegram.org", icon: Send, label: "TG" },
                { href: "https://facebook.com", icon: Facebook, label: "FB" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LI" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 border-2 border-electric-pink hover:bg-electric-pink hover:text-pure-black transition-all duration-150 flex items-center justify-center font-mono text-xs font-bold"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-mono font-bold uppercase tracking-wide border-b-2 border-electric-pink pb-2">UPDATES</h3>
            <p className="text-sm font-mono opacity-70">
              SUBSCRIBE FOR NEWS + EVENTS
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-transparent text-pure-white font-mono text-sm border-2 border-pure-white focus:outline-none focus:border-electric-pink transition-colors placeholder:text-pure-white/30 uppercase"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-4 py-3 font-mono font-bold text-pure-black bg-electric-pink border-4 border-electric-pink hover:bg-cyber-yellow hover:border-cyber-yellow transition-all duration-150 shadow-brutal-pink hover:shadow-brutal-yellow uppercase tracking-wide ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "LOADING..." : "SUBSCRIBE →"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-2 border-pure-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} SPRING OF KNOWLEDGE ACADEMY
          </p>
          <p className="text-xs font-mono uppercase tracking-widest opacity-50">
            ADDIS ABABA, ETHIOPIA
          </p>
        </div>
      </div>
    </footer>
  )
}