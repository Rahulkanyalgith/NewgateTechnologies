"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Prof. Shushil Sharma",
    role: "Program Lead, DSEU Exam Portal",
    content:
      "The DSEU Exam Portal was delivered with a strong focus on reliability and student experience. The workflows are streamlined, secure, and easy to manage across departments. We saw immediate gains in transparency and turnaround time.",
    rating: 5,
  },
  {
    name: "Manish",
    role: "Product Head, BimaScore AI",
    content:
      "NewGate helped us ship a robust AI-driven health insurance platform. Their team handled complex integrations and delivered a polished user experience without compromising on speed or security.",
    rating: 5,
  },
  {
    name: "Himanshu",
    role: "Base Academy",
    content:
      "They translated our learning vision into a vibrant, scalable platform for classes 6-12. The rollout was smooth, performance is excellent, and the UI resonates with students and parents alike.",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
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
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] tracking-tight text-balance">
            What our <span className="gradient-text">clients</span> say
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`group relative flex flex-col rounded-2xl border border-border/40 bg-card/50 p-7 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/80 hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/15 mb-5" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={`star-${testimonial.name}-${j}`}
                    className="h-4 w-4 fill-chart-4 text-chart-4"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/75 leading-[1.8] mb-7 text-[15px] flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10">
                  <span className="text-xs font-bold text-primary">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {testimonial.role}
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
