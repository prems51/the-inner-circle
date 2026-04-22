import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedDashboard from "./AnimatedDashboard";
import socials from "@/lib/utils";

const WHOP_URL = socials.innercirclepremium;
const DISCORD_URL = socials.discord;

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 bg-mesh" aria-hidden />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container-tight relative grid gap-14 lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ticker-pulse" />
            <span className="text-xs font-medium tracking-wide text-foreground/70">
              Live trading community · 5,000+ members
            </span>
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[64px] text-foreground">
            Simplifying Your{" "}
            <span className="text-gradient-primary">Trading Journey</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Join TMTrading - Sign up and gain access to our trading mentorship platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-95 group h-12 px-7"
            >
              <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">
                Join The Inner Circle
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 border-border bg-card hover:bg-secondary"
            >
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-6">
            <div>
              <p className="font-display text-2xl font-extrabold text-gradient-primary">5K+</p>
              <p className="text-xs text-muted-foreground mt-1">Active members</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-gradient-primary">250+</p>
              <p className="text-xs text-muted-foreground mt-1">Live sessions / yr</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-gradient-primary">4.9★</p>
              <p className="text-xs text-muted-foreground mt-1">Member rating</p>
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
