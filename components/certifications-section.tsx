import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap } from "lucide-react"

const certifications = [
  { name: "AWS Certified Solutions Architect", provider: "AWS" },
  { name: "Kubernetes Administrator (CKA)", provider: "CNCF" },
  { name: "Docker Certified Associate", provider: "Docker" },
  { name: "Jenkins Engineer", provider: "CloudBees" },
]

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Northern University Bangladesh",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Saic Institute of Management & Technology",
  },
]

export function CertificationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.provider}</p>
                    </div>
                    <Badge variant="secondary">Certified</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-accent" size={28} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-3">
              {education.map((edu, index) => (
                <Card key={index} className="p-4 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
