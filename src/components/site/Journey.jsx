import { motion, useReducedMotion } from "framer-motion";
import { Rocket, BookOpen, Radio, Target, TrendingUp } from "lucide-react";
import Section from "./Section";

const steps = [
  { n: "01", icon: Rocket, title: "Join the community", desc: "Pick a plan and get instant access to Discord, courses and live rooms." },
  { n: "02", icon: BookOpen, title: "Learn the foundations", desc: "Structured lessons on price action, risk and execution." },
  { n: "03", icon: Radio, title: "Sit in on live sessions", desc: "Watch instructors trade indices and commodities in real time." },
  { n: "04", icon: Target, title: "Build your edge", desc: "Develop your own playbook with mentor feedback." },
  { n: "05", icon: TrendingUp, title: "Trade with consistency", desc: "Apply a tested process backed by a community that trades." },
];

const Journey = () => {
  const reduce = useReducedMotion();

  return (
    <Section
      id="journey"
      eyebrow="Your Journey"
      title="From day one to consistent trader"
      subtitle="A clear path that meets you wherever you are and takes you further."
      center
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Desktop horizontal timeline rail */}
        <div aria-hidden className="hidden md:block absolute left-0 right-0 top-8 h-px overflow-hidden">
          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? false : { scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="h-full w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
        </div>

        {/* Mobile vertical timeline rail */}
        <div aria-hidden className="md:hidden absolute left-8 top-4 bottom-4 w-px overflow-hidden">
          <motion.div
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={reduce ? false : { scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="h-full w-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"
          />
        </div>

        {/* Cards: horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.18, ease: "easeOut" }}
                className="relative pl-20 md:pl-0 md:pt-20"
              >
                {/* Node dot on the rail */}
                <motion.div
                  initial={reduce ? false : { scale: 0, opacity: 0 }}
                  whileInView={reduce ? false : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.18, type: "spring", stiffness: 200 }}
                  className="absolute md:left-1/2 md:-translate-x-1/2 md:top-0 left-0 top-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-lg opacity-50" />
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground ring-4 ring-background">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                  </div>
                </motion.div>

                {/* Card */}
                <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant md:text-center hover:border-primary/40 hover:shadow-glow transition-all">
                  <div className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                    STEP {s.n}
                  </div>
                  <h3 className="mt-2 font-display text-base lg:text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Journey;
