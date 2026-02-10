"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ERP System - DSEU",
    category: "Enterprise Platform",
    description:
      "Design and implement a centralized, role-based ERP system for Delhi Skill and Entrepreneurship University (DSEU) to manage academics, administration, finance, placements, and skill programs across all campuses with real-time data, automation, transparency, and scalability, aligned with DSEU's skill-focused education model.",
    tags: ["ERP", "Role-Based", "Multi-Campus"],
    color: "from-primary/25 to-primary/5",
  },
  {
    title: "DSEU Exam Portal",
    category: "Education Platform",
    description: "Examination portal for Delhi Skill and Entrepreneurship University with student access and streamlined workflows.",
    tags: ["Portal", "Education", "Secure"],
    color: "from-chart-2/25 to-chart-2/5",
    link: "https://exam.dseu.ac.in/",
  },
  // {
  //   title: "Scheme Seva",
  //   category: "GovTech",
  //   description:
  //     "Explore Government Schemes for You. Get information about all the government schemes, categorized and easy to explore.",
  //   tags: ["Gov Schemes", "Discovery", "Public Services"],
  //   color: "from-chart-4/25 to-chart-4/5",
  //   link: "https://scheme-seva-gov.vercel.app/",
  // },
  {
    title: "Base Academy",
    category: "EdTech",
    description:
      "Build Your Base - Build Your Future. Crush classes 6-12 with lit courses! Master Math, Science, English + level up in Commerce, Humanities, or Science streams. Your future, your flex.",
    tags: ["Learning", "K-12", "Courses"],
    color: "from-primary/25 to-chart-3/5",
    link: "https://www.baseacademy.in/",
  },
  {
    title: "BimaScore",
    category: "InsurTech",
    description: "AI-powered health insurance with smart underwriting and personalized plans.",
    tags: ["AI", "Health Insurance", "Risk"],
    color: "from-chart-2/25 to-primary/5",
    link: "https://www.bimascore.com/",
  },
]

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A selection of recent projects that showcase our commitment to quality
            and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-sm frosted-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Top gradient band */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 118, 110, 0.4) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <ExternalLink className="h-8 w-8 text-primary/40 group-hover:text-primary/70 transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-medium text-primary tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
