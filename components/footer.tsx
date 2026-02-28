import { ArrowUpRight, Linkedin, Twitter, Github, Youtube, ArrowRight } from "lucide-react"

const primaryLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
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
    <footer className="relative overflow-hidden border-t border-border/30 bg-gradient-to-b from-background via-card/30 to-background pt-20 sm:pt-24 lg:pt-32 pb-10">
      {/* Decorative gradients — use theme colors */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-chart-3/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA Section */}
        <div className="mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Ready to elevate
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-4xl tracking-tight gradient-text">
            Strategy-led. Engineering-driven. Modern digital experiences.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Partner with NewGate to build elegant, high-performing products that scale with confidence.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 mt-8 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:bg-primary/90 transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Middle section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20 lg:mb-24 pb-12 border-b border-border/30">
          {/* Email */}
          <div className="w-full lg:w-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 font-semibold">
              Contact NewGate
            </p>
            <a
              href="mailto:rahulfreelancersintech@gmail.com"
              className="text-lg sm:text-xl md:text-2xl font-medium flex items-center gap-2 group text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              rahulfreelancersintech@gmail.com
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
            </a>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-8 md:gap-10 w-full lg:w-auto">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Brand highlight */}
        <div className="flex items-center justify-center mb-16 select-none overflow-hidden">
          <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black leading-none tracking-tighter gradient-text opacity-80">
            NewGate
          </span>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4 pt-8 border-t border-border/30 text-sm text-muted-foreground">
          <p className="font-medium">&copy; {currentYear} NewGate Technologies. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/30 bg-muted/20 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
