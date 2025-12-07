"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ColorfulCard } from "@/components/colorful-card"

export function AboutSection() {
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%]" />
          <p className="text-muted-foreground mt-4">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ColorfulCard color="purple" delay={100}>
            <div className="p-8 space-y-6">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image src="/images/rajib-photo.jpg" alt="Rajib Mahmud" fill className="object-cover" />
                </div>
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Rajib Mahmud
                </h3>
                <p className="text-muted-foreground">DevOps Engineer</p>
                <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>
          </ColorfulCard>

          <div className="space-y-4">
            <p
              className={`text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              Results-driven DevOps Engineer with extensive expertise in cloud infrastructure, CI/CD automation,
              containerization, and security.
            </p>

            <p
              className={`text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              Proficient in AWS, Kubernetes, Docker, Terraform, and Ansible. Skilled in optimizing deployment pipelines,
              automating workflows, and ensuring high availability and scalability.
            </p>

            <p
              className={`text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              Passionate about cloud-native solutions, infrastructure as code (IaC), and DevOps best practices to
              improve system reliability and performance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <ColorfulCard color="cyan" delay={400}>
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    4+
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </ColorfulCard>
              <ColorfulCard color="green" delay={500}>
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    8+
                  </div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
              </ColorfulCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
