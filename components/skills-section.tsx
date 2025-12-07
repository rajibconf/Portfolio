"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Cloud, Container, GitBranch, Server, Shield, BarChart3, Code2, Network } from "lucide-react"
import { ColorfulCard } from "@/components/colorful-card"

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS EC2", "AWS S3", "AWS RDS", "AWS IAM", "Route53", "Cloudflare"],
    color: "blue" as const,
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Container Registry"],
    color: "cyan" as const,
  },
  {
    title: "CI/CD Pipelines",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Semaphore"],
    color: "green" as const,
  },
  {
    title: "Infrastructure as Code",
    icon: Code2,
    skills: ["Terraform", "Ansible", "YAML", "Bash", "Python"],
    color: "yellow" as const,
  },
  {
    title: "Monitoring & Logging",
    icon: BarChart3,
    skills: ["Prometheus", "Grafana", "ELK Stack"],
    color: "purple" as const,
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    skills: ["IAM Policies", "SSL/TLS", "Firewalls", "Security Best Practices"],
    color: "red" as const,
  },
  {
    title: "Networking",
    icon: Network,
    skills: ["Nginx", "Load Balancing", "DNS Management"],
    color: "orange" as const,
  },
  {
    title: "Operating Systems",
    icon: Server,
    skills: ["Linux", "Ubuntu", "macOS", "Windows Server"],
    color: "indigo" as const,
  },
]

const iconColorMap = {
  blue: "text-blue-500",
  cyan: "text-cyan-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
  red: "text-red-500",
  orange: "text-orange-500",
  indigo: "text-indigo-500",
  pink: "text-pink-500",
}

export function SkillsSection() {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 animate-gradient bg-[length:200%_200%]" />
          <p className="text-muted-foreground mt-4">My comprehensive DevOps toolkit</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <ColorfulCard key={index} color={category.color} delay={index * 100}>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`${iconColorMap[category.color]} transition-transform hover:scale-110`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs transition-all hover:scale-105 hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ColorfulCard>
          ))}
        </div>
      </div>
    </section>
  )
}
