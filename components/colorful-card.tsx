"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface ColorfulCardProps {
  children: ReactNode
  className?: string
  color?: "cyan" | "purple" | "pink" | "orange" | "green" | "blue" | "red" | "yellow" | "indigo"
  delay?: number
}

const colorMap = {
  cyan: "from-cyan-400 to-cyan-600",
  purple: "from-purple-400 to-purple-600",
  pink: "from-pink-400 to-pink-600",
  orange: "from-orange-400 to-orange-600",
  green: "from-green-400 to-green-600",
  blue: "from-blue-400 to-blue-600",
  red: "from-red-400 to-red-600",
  yellow: "from-yellow-400 to-yellow-600",
  indigo: "from-indigo-400 to-indigo-600",
}

const glowMap = {
  cyan: "hover:shadow-cyan-500/30",
  purple: "hover:shadow-purple-500/30",
  pink: "hover:shadow-pink-500/30",
  orange: "hover:shadow-orange-500/30",
  green: "hover:shadow-green-500/30",
  blue: "hover:shadow-blue-500/30",
  red: "hover:shadow-red-500/30",
  yellow: "hover:shadow-yellow-500/30",
  indigo: "hover:shadow-indigo-500/30",
}

export function ColorfulCard({ children, className = "", color = "cyan", delay = 0 }: ColorfulCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`
        relative p-[2px] rounded-xl overflow-hidden
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        hover:scale-[1.02] hover:shadow-2xl ${glowMap[color]}
        ${className}
      `}
    >
      {/* Gradient border */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-br ${colorMap[color]}
        opacity-80 animate-pulse
      `}
      />

      {/* Card content */}
      <Card className="relative bg-card border-0 h-full">{children}</Card>
    </div>
  )
}
