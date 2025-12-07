"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"
import { ColorfulCard } from "@/components/colorful-card"

const experiences = [
  {
    company: "Pflegetech GmbH",
    role: "DevOps Engineer",
    period: "2024 – Present",
    location: "Remote – Germany",
    achievements: [
      "Designed and maintained scalable CI/CD pipelines using Jenkins, Ansible, and Semaphore",
      "Automated deployment processes for Dockerized applications running on Kubernetes",
      "Integrated Jira with Jenkins to enhance software development tracking and workflow efficiency",
      "Monitored infrastructure and performance using Prometheus & Grafana, reducing downtime",
      "Optimized Nginx-based load balancing strategies to handle increased traffic seamlessly",
    ],
    tech: ["Jenkins", "Kubernetes", "Docker", "Ansible", "Prometheus", "Grafana", "Nginx"],
    color: "cyan" as const,
  },
  {
    company: "Tiger Park Limited",
    role: "DevOps Engineer",
    period: "2020 – 2023",
    location: "Onsite – Bangladesh",
    achievements: [
      "Developed fully automated deployment pipelines using Jenkins, Docker, and Ansible",
      "Managed AWS infrastructure (EC2, S3, IAM, RDS, Route53), optimizing cost and improving uptime",
      "Implemented custom Bash & Python automation scripts, reducing manual workload",
      "Strengthened security by enforcing IAM policies, SSL/TLS encryption, and firewall protections",
    ],
    tech: ["Jenkins", "Docker", "Ansible", "AWS", "Python", "Bash", "Security"],
    color: "purple" as const,
  },
]

export function ExperienceSection() {
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient bg-[length:200%_200%]" />
          <p className="text-muted-foreground mt-4">My professional journey</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ColorfulCard key={index} color={exp.color} delay={index * 200}>
              <div className="p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 size={16} className="text-primary" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="mt-1">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 list-none">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className={`flex gap-2 text-muted-foreground leading-relaxed transition-all duration-500 ${
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                        style={{ transitionDelay: `${achIndex * 100 + 200}ms` }}
                      >
                        <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mt-1">
                          ●
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="transition-all hover:scale-105 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ColorfulCard>
          ))}
        </div>
      </div>
    </section>
  )
}
