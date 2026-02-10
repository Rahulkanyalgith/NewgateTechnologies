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
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality. Beautiful interfaces that users love.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Intelligent automation solutions powered by cutting-edge AI technology to streamline your workflows.",
  },
  {
    icon: BarChart3,
    title: "SEO & Performance",
    description:
      "Data-driven optimization strategies that boost visibility, improve speed, and maximize conversions.",
  },
  {
    icon: Bot,
    title: "RAG Chatbot",
    description:
      "Retrieval-augmented AI assistants that ground responses in your data, improving accuracy, trust, and customer support efficiency.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            What We <span className="text-primary">Do Best</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We offer a comprehensive suite of digital services designed to help your business
            thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm frosted-card transition-all duration-500 hover:border-primary/30 hover:bg-card/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 mb-6 border border-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow */}
              <div className="absolute -inset-px rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
