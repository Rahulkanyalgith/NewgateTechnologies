"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, FinFlow Inc.",
    content:
      "NewGate Technologies transformed our outdated platform into a sleek, modern application. Their attention to detail and technical expertise exceeded our expectations. The team delivered on time and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO, MediTrack Health",
    content:
      "Working with NewGate was a game-changer. They understood our complex requirements from day one and delivered a mobile app that our users love. Their communication and professionalism are top-notch.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder, EcoMarket",
    content:
      "The team at NewGate built our entire e-commerce platform from scratch. Their modern approach to development and design resulted in a platform that not only looks amazing but performs flawlessly under heavy traffic.",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Do not just take our word for it. Here is what our clients have to say about
            working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`group relative rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm frosted-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={`star-${testimonial.name}-${j}`}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-8 text-sm">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-semibold text-primary">
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
                  <div className="text-xs text-muted-foreground">
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
