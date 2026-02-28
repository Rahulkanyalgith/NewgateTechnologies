"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? "py-3" : "py-5"}`}>
      <nav
        className={`relative mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled
            ? "w-[92%] md:w-[88%] lg:w-[1040px] rounded-2xl border border-border/50 bg-background/80 px-5 py-2.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            : "w-full max-w-7xl px-6 lg:px-8"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
            <span className="text-sm font-bold text-primary font-mono">NG</span>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            NewGate<span className="text-primary font-bold">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0.5 rounded-xl border border-border/40 bg-muted/40 p-1 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-1.5 text-[13px] font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
          >
            Start a Project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden relative flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/40 text-foreground backdrop-blur-sm transition-colors hover:bg-muted/60"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative h-5 w-5">
            <Menu className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
            <X className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-2xl" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`relative mx-auto mt-24 w-[90%] max-w-md rounded-2xl border border-border/50 bg-card/90 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ${isMobileMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"}`}>
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="h-4 w-4 opacity-30" />
              </a>
            ))}
          </div>
          <div className="mt-2 p-2 pt-2 border-t border-border/30">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
