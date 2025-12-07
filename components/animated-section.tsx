"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  borderColor?: "cyan" | "purple" | "pink" | "orange" | "green" | "rainbow"
}

export function AnimatedSection({ children, className = "", borderColor = "rainbow" }: AnimatedSectionProps) {
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

  const borderClass = borderColor === "rainbow" ? "gradient-border" : `gradient-border gradient-border-${borderColor}`

  return (
    <div
      ref={sectionRef}
      className={`
        relative overflow-hidden rounded-2xl p-[3px]
        ${isVisible ? "animate-fade-in-up" : "opacity-0"}
        ${className}
      `}
    >
      {/* Animated gradient border */}
      <div
        className={`
        absolute inset-0 rounded-2xl
        bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 via-orange-500 to-green-500
        bg-[length:400%_400%] animate-gradient
      `}
      />

      {/* Content */}
      <div className="relative bg-background rounded-xl">{children}</div>
    </div>
  )
}
