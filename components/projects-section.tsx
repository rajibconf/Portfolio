"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ColorfulCard } from "@/components/colorful-card"

const projects = [
  {
    title: "Grameen Pani",
    description:
      "Water management system deployed with full CI/CD automation, Docker containerization, and AWS infrastructure.",
    url: "https://grameenpani.dphe.online/",
    tech: ["AWS", "Docker", "Jenkins", "Nginx"],
    color: "cyan" as const,
  },
  {
    title: "BKSP School Management",
    description: "School management system with automated deployments, load balancing, and database replication.",
    url: "https://bkspds.gov.bd/",
    tech: ["MySQL", "Load Balancing", "CI/CD", "Linux"],
    color: "purple" as const,
  },
  {
    title: "LNG SPOT PURCHASE",
    description:
      "Bidding system for RPGCL with secure infrastructure, Django backend, and automated deployment pipelines.",
    url: "https://rpgclspotlng.org/",
    tech: ["Django", "AWS", "Docker", "Ansible"],
    color: "pink" as const,
  },
  {
    title: "DPE Online Application",
    description:
      "High-traffic application with MySQL NDB cluster, load balancing, and complete CI/CD integration with Jenkins.",
    url: "https://dpe.teletalk.com.bd/",
    tech: ["MySQL NDB", "Jenkins", "Load Balancer", "Clustering"],
    color: "orange" as const,
  },
  {
    title: "PM Fellowship Bangladesh",
    description: "Fellowship management system for Government Innovation Unit with secure deployment and monitoring.",
    url: "https://pmfellowship.pmo.gov.bd/",
    tech: ["AWS", "Terraform", "Monitoring", "Security"],
    color: "green" as const,
  },
  {
    title: "ERP 360 (Odoo)",
    description:
      "Custom ERP solution for finance, HR, and prognosis with Kubernetes orchestration and automated scaling.",
    url: "https://erp360.strativ.se/",
    tech: ["Kubernetes", "Odoo", "PostgreSQL", "Docker"],
    color: "blue" as const,
  },
]

export function ProjectsSection() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient bg-[length:200%_200%]" />
          <p className="text-muted-foreground mt-4">Real-world DevOps implementations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ColorfulCard key={index} color={project.color} delay={index * 100}>
              <div className="p-6 space-y-4 h-full flex flex-col">
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-bold transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs transition-all hover:scale-105">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent group" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="transition-transform group-hover:scale-110" />
                      Visit Site
                    </a>
                  </Button>
                </div>
              </div>
            </ColorfulCard>
          ))}
        </div>
      </div>
    </section>
  )
}
