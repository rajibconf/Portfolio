"use client"

import { Cloud, Container, GitBranch, Server, Terminal, Workflow } from "lucide-react"

const icons = [
  { Icon: Cloud, delay: "0s", position: "top-20 left-10" },
  { Icon: Container, delay: "0.5s", position: "top-40 right-20" },
  { Icon: GitBranch, delay: "1s", position: "bottom-40 left-20" },
  { Icon: Server, delay: "1.5s", position: "top-60 right-10" },
  { Icon: Terminal, delay: "2s", position: "bottom-20 right-40" },
  { Icon: Workflow, delay: "2.5s", position: "top-80 left-40" },
]

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map(({ Icon, delay, position }, index) => (
        <div key={index} className={`absolute ${position} animate-float`} style={{ animationDelay: delay }}>
          <Icon size={40} className="text-primary" />
        </div>
      ))}
    </div>
  )
}
