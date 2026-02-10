"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 h-24 w-3/4 rounded-b-full blur-[90px] transition-all duration-500 ${
            isScrolled ? "bg-primary/10 opacity-60" : "bg-primary/15 opacity-80"
          }`}
        />
      </div>

      <nav
        className={`relative mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "w-[92%] md:w-[85%] lg:w-[980px] rounded-full border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_18px_50px_rgba(15,23,42,0.1)]"
            : "w-full max-w-7xl px-6 lg:px-8"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
            <span className="text-sm font-bold text-primary font-mono">NG</span>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-[0.02em] font-display group-hover:text-primary transition-colors duration-300">
            NewGate<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-secondary/40 p-1 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background/70 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
           
            onClick={(e) => {
              e.preventDefault()
              window.location.href = `${window.location.pathname}`
              // force a reload so the page refreshes
              window.location.reload()
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden relative h-10 w-10 rounded-full border border-border/60 bg-background/60 text-foreground backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5 mx-auto" /> : <Menu className="h-5 w-5 mx-auto" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="relative mx-auto mt-24 w-[90%] max-w-md rounded-3xl border border-border bg-background/80 p-4 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-foreground/80 hover:text-foreground hover:bg-secondary/40 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="h-5 w-5 opacity-40" />
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a
            
              className="block w-full text-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault()
                setIsMobileMenuOpen(false)
                window.location.href = `${window.location.pathname}`
                window.location.reload()
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
