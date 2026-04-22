import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import Section from "./Section";

const others = [
  "No real-time execution",
  "Hidden losses",
  "No clear learning roadmap",
  "Innactive community",
  "No psychological support",
];

const tdtrade = [
  "Real-time execution",
  "No hidden losses",
  "Clear learning roadmap",
  "Active community 24/7",
  "Psychological classes",
];

const WhyUs = () => {
  const reduce = useReducedMotion();
  return (
    <Section
      id="why"
      eyebrow="Why The Inner Circle"
      title="A smarter way to learn"
      subtitle="Turn complex market behavior into clear insights that help you make better decisions, faster."
      center
    >
      <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -20 }}
          whileInView={reduce ? false : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-card border border-border p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Other tools</p>
          <h3 className="font-display text-xl font-bold text-foreground mt-1">Generic platforms</h3>
          <ul className="mt-6 space-y-4">
            {others.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/10 text-rose-500 flex-shrink-0 mt-0.5">
                  <X className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="line-through decoration-muted-foreground/40">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          whileInView={reduce ? false : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl bg-gradient-primary text-primary-foreground p-7 shadow-elegant overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">The Inner Circle</p>
          <h3 className="font-display text-xl font-bold mt-1">Built by active traders</h3>
          <ul className="mt-6 space-y-4 relative">
            {tdtrade.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground/20 flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default WhyUs;
