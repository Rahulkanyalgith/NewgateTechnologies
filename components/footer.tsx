import Image from "next/image"
import { ArrowUpRight, Linkedin, Twitter, Github, Youtube, Sparkles } from "lucide-react"

const primaryLinks = [
  { label: "How We Work", href: "#services" },
  { label: "Featured Work", href: "#portfolio" },
  { label: "Why Choose Us", href: "#why-us" },
]

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "GitHub", href: "#", icon: Github },
  { label: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-emerald-500/20 bg-gradient-to-b from-background via-background/85 to-background pt-16 sm:pt-20 lg:pt-28 pb-10">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 h-80 w-80 sm:h-[460px] sm:w-[460px] rounded-full bg-emerald-500/15 blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 sm:h-[460px] sm:w-[460px] rounded-full bg-cyan-500/10 blur-[110px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-blue-500/10 blur-[90px] opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="mb-14 sm:mb-20 lg:mb-24">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-emerald-400 font-semibold">
              Ready to elevate
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-display">
            Your strategy. Our engineering. Premium digital results.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
            Partner with NewGate to build elegant, high-performing products that scale with confidence.
          </p>
        </div>

        {/* Middle section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24 pb-12 sm:pb-16 border-b border-emerald-500/20">
          <div className="w-full lg:w-auto">
            <p className="text-emerald-400/70 mb-3 sm:mb-4 text-xs uppercase tracking-[0.3em] font-semibold">
              Contact NewGate
            </p>
            <a
              href="mailto:NewGateechnologies.app"
              className="text-lg sm:text-2xl md:text-3xl font-light flex items-center gap-2 group text-foreground/90 hover:text-emerald-300 transition-colors"
            >
             NewGateechnologies.app
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400/60 group-hover:text-emerald-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 w-full lg:w-auto">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base sm:text-lg text-foreground/60 hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Brand highlight */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 select-none">
        
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            NewGate
          </span>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4 pt-8 sm:pt-12 border-t border-emerald-500/20 text-xs sm:text-sm text-muted-foreground">
          <p className="font-medium">© {currentYear} NewGate Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-foreground/60 hover:text-emerald-400 transition-colors duration-300 font-medium"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
