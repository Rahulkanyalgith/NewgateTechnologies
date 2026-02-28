"use client"

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Mail, MapPin, Clock, Send, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36">
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
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] tracking-tight text-balance">
            Let&apos;s build something <span className="gradient-text">great</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Ready to start your next project? Get in touch and let&apos;s discuss how
            we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {[
              { icon: Mail, title: "Email", value: "hello@newgate.tech" },
              { icon: MapPin, title: "Location", value: "Remote-first, Global Reach" },
              { icon: Clock, title: "Response Time", value: "We typically respond within 24 hours" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/30 hover:border-border/50 hover:bg-card/50 transition-all duration-300">
                <div className="flex-shrink-0 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 p-3 border border-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border/30">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">Follow us</p>
              <div className="flex gap-2">
                {[
                  { label: "X", href: "#" },
                  { label: "Li", href: "#" },
                  { label: "Gh", href: "#" },
                  { label: "Ig", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-muted/30 text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/40 bg-card/50 p-7 md:p-8 backdrop-blur-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border/40 bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-border/40 bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-border/40 bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-border/40 bg-muted/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_32px_hsl(var(--primary)/0.3)] w-full justify-center sm:w-auto"
              >
                {isSubmitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
