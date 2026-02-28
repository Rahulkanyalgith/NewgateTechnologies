"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code2, Layers, Zap, ArrowRight } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Clean Architecture" },
  { icon: Layers, label: "Scalable Systems" },
  { icon: Zap, label: "Rapid Delivery" },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative py-28 lg:py-36">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] tracking-tight text-balance">
              We build digital
              <br />
              products that <span className="gradient-text">matter</span>
            </h2>

            <p className="mt-6 text-muted-foreground leading-[1.8] text-[17px]">
              NewGate Technologies is a premium development agency specializing in
              crafting scalable, high-performance digital products. We partner with startups
              and enterprises to transform ideas into powerful digital experiences.
            </p>
            <p className="mt-4 text-muted-foreground leading-[1.8]">
              Our team combines deep technical expertise with creative problem-solving to
              deliver solutions that drive real business results. From custom web applications
              to mobile platforms, we handle every aspect of the digital journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-muted/30 px-4 py-2.5 text-sm text-foreground/80 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-muted/50"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 mt-10 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Explore our services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right visual — code preview */}
          <div
            className={`relative transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl border border-border/50 bg-card/80 overflow-hidden frosted-card">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/40 bg-muted/20">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-chart-4/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/50" />
                </div>
                <span className="ml-3 text-[11px] text-muted-foreground font-mono">agency.config.ts</span>
              </div>

              {/* Code */}
              <div className="p-6 space-y-1 font-mono text-[13px] leading-7">
                <div>
                  <span className="text-muted-foreground select-none mr-5">01</span>
                  <span className="text-primary/80">const</span>
                  <span className="text-foreground/90"> agency</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-chart-4/80">{"{"}</span>
                </div>
                <div>
                  <span className="text-muted-foreground select-none mr-5">02</span>
                  <span className="text-foreground/60 pl-6">name:</span>
                  <span className="text-primary/70"> {'"NewGate Technologies"'}</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-muted-foreground select-none mr-5">03</span>
                  <span className="text-foreground/60 pl-6">mission:</span>
                  <span className="text-primary/70"> {'"Build. Scale. Deliver."'}</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-muted-foreground select-none mr-5">04</span>
                  <span className="text-foreground/60 pl-6">quality:</span>
                  <span className="text-primary/70"> {'"Premium"'}</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-muted-foreground select-none mr-5">05</span>
                  <span className="text-foreground/60 pl-6">passion:</span>
                  <span className="text-chart-4/80"> Infinity</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div>
                  <span className="text-muted-foreground select-none mr-5">06</span>
                  <span className="text-chart-4/80">{"}"}</span>
                  <span className="text-muted-foreground">;</span>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.03] -z-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
