"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Globe,
  Smartphone,
  Palette,
  Bot,
  BarChart3,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. Fast, responsive, and designed to scale with your business.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Smartphone,
    title: "Enterprise ERP Systems",
    description:
      "Enterprise-grade ERP platforms that unify finance, operations, and inventory with secure, scalable workflows.",
    accent: "from-chart-2/20 to-chart-2/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality. Beautiful interfaces that users love.",
    accent: "from-chart-4/20 to-chart-4/5",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Intelligent automation solutions powered by cutting-edge AI technology to streamline your workflows.",
    accent: "from-chart-5/20 to-chart-5/5",
  },
  {
    icon: BarChart3,
    title: "SEO & Performance",
    description:
      "Data-driven optimization strategies that boost visibility, improve speed, and maximize conversions.",
    accent: "from-chart-3/20 to-chart-3/5",
  },
  {
    icon: Bot,
    title: "RAG Chatbot",
    description:
      "Retrieval-augmented AI assistants that ground responses in your data, improving accuracy, trust, and customer support efficiency.",
    accent: "from-primary/20 to-chart-3/5",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="relative py-28 lg:py-36">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Subtle background gradient */}
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
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] tracking-tight text-balance">
            What we <span className="gradient-text">do best</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            A comprehensive suite of digital services designed to help your business
            thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border border-border/40 bg-card/50 p-7 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/80 hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} p-3 mb-5 border border-primary/10 group-hover:border-primary/20 transition-all duration-300`}>
                <service.icon className="h-5 w-5 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2.5 flex items-center gap-2 group-hover:text-primary/90 transition-colors duration-300">
                {service.title}
                <ArrowUpRight className="h-3.5 w-3.5 text-primary/40 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
