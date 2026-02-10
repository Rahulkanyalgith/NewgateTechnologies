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
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Built on <span className="text-primary">Trust</span> & Excellence
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We do not just write code. We build partnerships that deliver measurable results
            for your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group relative rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm frosted-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 border border-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {reason.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {reason.metric}
                    </span>
                    <span className="text-sm text-muted-foreground">
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
