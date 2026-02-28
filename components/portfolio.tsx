"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ERP System - DSEU Exam Portal",
    category: "Education Platform",
    description: "Examination portal for Delhi Skill and Entrepreneurship University with student access and streamlined workflows.",
    tags: ["Portal", "Education", "Secure"],
    color: "from-chart-2/20 to-chart-2/5",
    link: "https://exam.dseu.ac.in/",
  },
  {
    title: "Scheme Seva",
    category: "GovTech",
    description:
      "Explore Government Schemes for You. Get information about all the government schemes, categorized and easy to explore.",
    tags: ["Gov Schemes", "Discovery", "Public Services"],
    color: "from-chart-4/20 to-chart-4/5",
    link: "https://scheme-seva-gov.vercel.app/",
  },
  {
    title: "Base Academy",
    category: "EdTech",
    description:
      "Build Your Base - Build Your Future. Crush classes 6-12 with lit courses! Master Math, Science, English + level up in Commerce, Humanities, or Science streams.",
    tags: ["Learning", "K-12", "Courses"],
    color: "from-primary/20 to-chart-3/5",
    link: "https://www.baseacademy.in/",
  },
  {
    title: "BimaScore",
    category: "InsurTech",
    description: "AI-powered health insurance with smart underwriting and personalized plans.",
    tags: ["AI", "Health Insurance", "Risk"],
    color: "from-chart-5/20 to-primary/5",
    link: "https://www.bimascore.com/",
  },
]

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="portfolio" className="relative py-28 lg:py-36">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] tracking-tight text-balance">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            A selection of recent projects that showcase our commitment to quality
            and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`group relative block overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
              aria-label={`Open ${project.title}`}
            >
              {/* Top gradient band */}
              <div className={`h-44 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative flex items-center justify-center h-14 w-14 rounded-2xl bg-background/20 border border-foreground/5 backdrop-blur-sm">
                  <ExternalLink className="h-6 w-6 text-foreground/30 group-hover:text-primary/70 transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="mb-3">
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 text-xl font-semibold text-foreground group-hover:text-primary/90 transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-primary/30 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/40 bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
