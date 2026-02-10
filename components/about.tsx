"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code2, Layers, Zap } from "lucide-react"

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              About Us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              We Build Digital
              <br />
              Products That <span className="text-primary">Matter</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              NewGate Technologies is a premium freelance development agency specializing in
              crafting scalable, high-performance digital products. We partner with startups
              and enterprises to transform ideas into powerful digital experiences.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team combines deep technical expertise with creative problem-solving to
              deliver solutions that drive real business results. From custom web applications
              to mobile platforms, we handle every aspect of the digital journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground">
                <Code2 className="h-4 w-4 text-primary" />
                Clean Code
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground">
                <Layers className="h-4 w-4 text-primary" />
                Scalable Architecture
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground">
                <Zap className="h-4 w-4 text-primary" />
                Fast Delivery
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm frosted-card">
              {/* Code-like visual */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">01</span>
                    <span className="text-primary">{'const'}</span>
                    <span className="text-foreground"> agency</span>
                    <span className="text-muted-foreground"> = </span>
                    <span className="text-chart-4">{"{"}</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-muted-foreground">02</span>
                    <span className="text-foreground">name:</span>
                    <span className="text-primary">{'"NewGate Technologies"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-muted-foreground">03</span>
                    <span className="text-foreground">mission:</span>
                    <span className="text-primary">{'"Build. Scale. Deliver."'}</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-muted-foreground">04</span>
                    <span className="text-foreground">quality:</span>
                    <span className="text-primary">{'"Premium"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-muted-foreground">05</span>
                    <span className="text-foreground">passion:</span>
                    <span className="text-chart-4">Infinity</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">06</span>
                    <span className="text-chart-4">{"}"}</span>
                    <span className="text-muted-foreground">;</span>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl bg-primary/5 -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
