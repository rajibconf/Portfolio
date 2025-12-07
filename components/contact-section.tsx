"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { ColorfulCard } from "@/components/colorful-card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 animate-gradient bg-[length:200%_200%]" />
          <p className="text-muted-foreground mt-4">Let's discuss your DevOps needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ColorfulCard color="cyan" delay={100}>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    <Mail className="text-cyan-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:rajib.conf@gmail.com"
                      className="text-muted-foreground hover:text-cyan-500 transition-colors"
                    >
                      rajib.conf@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                    <Phone className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="tel:+8801763151730"
                      className="text-muted-foreground hover:text-green-500 transition-colors"
                    >
                      +880 1763 151730
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                    <MapPin className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50">
                <p className="font-semibold mb-3">Connect with me</p>
                <div className="flex gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 hover:text-white hover:border-transparent transition-all bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/rajibconf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-transparent transition-all bg-transparent"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/rajibconf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ColorfulCard>

          <ColorfulCard color="purple" delay={200}>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-border/50 focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-border/50 focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-border/50 focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </ColorfulCard>
        </div>

        <div className="text-center mt-12 text-muted-foreground text-sm">
          <p>© 2025 Rajib Mahmud. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
