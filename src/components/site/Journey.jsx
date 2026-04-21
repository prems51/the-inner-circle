import { motion, useReducedMotion } from "framer-motion";
import { Rocket, BookOpen, Radio, Target, TrendingUp } from "lucide-react";
import Section from "./Section";

const steps = [
  {
    n: "01",
    icon: Rocket,
    title: "Join the community",
    desc: "Pick a plan and get instant access to Discord, the course library and live rooms.",
  },
  {
    n: "02",
    icon: BookOpen,
    title: "Learn the foundations",
    desc: "Walk through structured lessons on price action, risk and execution.",
  },
  {
    n: "03",
    icon: Radio,
    title: "Sit in on live sessions",
    desc: "Watch instructors analyze and trade indices and commodities in real time.",
  },
  {
    n: "04",
    icon: Target,
    title: "Build your edge",
    desc: "Develop your own playbook with mentor feedback and recorded sessions.",
  },
  {
    n: "05",
    icon: TrendingUp,
    title: "Trade with consistency",
    desc: "Apply a tested process with the support of a community that actually trades.",
  },
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
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical connector line - hidden on mobile */}
        <div
          aria-hidden
          className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-1/2"
        />

        <div className="space-y-8 md:space-y-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isRight = i % 2 === 1;
            return (
              <motion.div
                key={s.n}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative grid grid-cols-[4rem_1fr] md:grid-cols-2 md:gap-12 items-center"
              >
                {/* MOBILE: icon node on the left rail */}
                <div className="md:hidden flex justify-center pt-2">
                  <div className="relative z-10 h-16 w-16 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                </div>

                {/* MOBILE: content card */}
                <div className="md:hidden">
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
                    <div className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                      STEP {s.n}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* DESKTOP: alternating layout */}
                {/* Left column */}
                <div
                  className={`hidden md:block ${
                    isRight ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12 md:text-right"
                  }`}
                >
                  <motion.div
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative rounded-2xl border border-border bg-card p-6 shadow-elegant hover:shadow-glow hover:border-primary/40 transition-all"
                  >
                    <div
                      className={`flex items-center gap-3 ${
                        isRight ? "" : "justify-end"
                      }`}
                    >
                      <span className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                        STEP {s.n}
                      </span>
                      <span className="h-px w-10 bg-primary/40" />
                    </div>
                    <h3 className="mt-3 font-display text-xl lg:text-2xl font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm lg:text-base leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </motion.div>
                </div>

                {/* DESKTOP: center icon node */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 ${
                    isRight ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-xl opacity-50" />
                    <div className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground ring-4 ring-background">
                      <Icon className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* DESKTOP: empty placeholder column to keep grid balance */}
                <div
                  className={`hidden md:block ${
                    isRight ? "md:order-1" : "md:order-2"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Journey;
