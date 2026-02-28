"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Rocket, Shield, Users, Cpu } from "lucide-react"

const reasons = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We move fast without compromising quality. Agile workflows and clear timelines ensure your project launches on schedule.",
    metric: "2x",
    metricLabel: "Faster than average",
  },
  {
    icon: Shield,
    title: "Scalable Solutions",
    description:
      "Every product we build is architected for growth. From MVP to enterprise-scale, our solutions evolve with your business.",
    metric: "100%",
    metricLabel: "Uptime guaranteed",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "Your success is our priority. We work as an extension of your team, maintaining transparent communication throughout.",
    metric: "24/7",
    metricLabel: "Dedicated support",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description:
      "We leverage the latest technologies and frameworks to build future-proof solutions that keep you ahead of the curve.",
    metric: "10+",
    metricLabel: "Technologies mastered",
  },
]

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="why-us" className="relative py-28 lg:py-36">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] tracking-tight text-balance">
            Built on <span className="gradient-text">trust</span> & excellence
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            We don&apos;t just write code. We build partnerships that deliver measurable results
            for your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group relative rounded-2xl border border-border/40 bg-card/50 p-7 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/80 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 p-3 border border-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-5">
                    {reason.description}
                  </p>
                  <div className="flex items-baseline gap-2.5 pt-4 border-t border-border/30">
                    <span className="text-2xl font-bold gradient-text tracking-tight">
                      {reason.metric}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {reason.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
