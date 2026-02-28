"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
        {/* Accent glow */}
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-chart-3/[0.05] rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 rounded-full border border-border/60 bg-muted/50 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-10 backdrop-blur-sm transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Strategy
          <span className="h-px w-4 bg-border" />
          Design
          <span className="h-px w-4 bg-border" />
          Engineering
        </div>

        {/* Headline */}
        <h1
          className={`text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-[-0.03em] leading-[1.08] text-balance transition-all duration-700 ease-out delay-150 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text-subtle">Elegant digital products</span>
          <br />
          <span className="gradient-text-subtle">crafted for </span>
          <span className="gradient-text">modern brands</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty transition-all duration-700 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          NewGate Technologies partners with ambitious teams to design, build, and
          launch digital experiences that feel effortless, perform flawlessly, and scale
          with intention.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)] hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-8 py-4 text-sm font-semibold text-foreground hover:bg-muted/50 hover:border-border transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            View Our Work
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Stats */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40 max-w-4xl mx-auto transition-all duration-700 ease-out delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "10+", label: "Projects Delivered" },
            { value: "10+", label: "Happy Clients" },
            { value: "3+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="relative text-center bg-card/60 backdrop-blur-sm px-6 py-7">
              <div className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">{stat.value}</div>
              <div className="mt-1.5 text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </div>
    </section>
  )
}
