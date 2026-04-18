import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedDashboard from "./AnimatedDashboard";

const Hero = () => {
  const reduce = useReducedMotion();
  const handle = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-navy text-primary-foreground pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Decorative glow */}
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary-glow/40 blur-3xl" aria-hidden />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="container-tight relative grid gap-14 lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ticker-pulse" />
            <span className="text-xs font-medium tracking-wide text-primary-foreground/80">
              Trusted globally since 2008
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[64px]">
            Trading Excellence{" "}
            <span className="text-gradient-gold">Across Global Markets</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Lathyrus connects producers, manufacturers and buyers across 42 countries — delivering metals, agricultural
            commodities, energy and industrial supplies with transparent pricing and uncompromising reliability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={handle("#contact")}
              className="bg-gradient-gold text-primary font-semibold shadow-gold-glow hover:opacity-90 group h-12 px-7"
            >
              Start Trading
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handle("#services")}
              className="h-12 px-6 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <PlayCircle className="mr-1 h-4 w-4" />
              Explore Services
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-primary-foreground/10 pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-accent">17+</p>
              <p className="text-xs text-primary-foreground/60 mt-1">Years of Trade</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">42</p>
              <p className="text-xs text-primary-foreground/60 mt-1">Countries Served</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">800+</p>
              <p className="text-xs text-primary-foreground/60 mt-1">Global Partners</p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatedDashboard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
