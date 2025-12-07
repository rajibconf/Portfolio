"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { FloatingIcons } from "@/components/floating-icons"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <FloatingIcons />

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-in">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
              DevOps Engineer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Automation | Cloud Infrastructure | CI/CD Pipelines
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Results-driven engineer specializing in AWS, Kubernetes, Docker, Terraform, and Ansible. Building scalable
          cloud-native solutions and optimizing deployment pipelines.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Download size={18} />
            Download Resume
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="icon" variant="ghost" asChild>
            <a href="https://github.com/rajibconf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a
              href="https://www.linkedin.com/in/rajibconf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a href="mailto:rajib.conf@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
