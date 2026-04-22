import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "./Section";
import social from "@/lib/utils";

const WHOP_URL1 = social.innercirclepremium;
const WHOP_URL2 = social.innercirclepremiumlifetime;

const features = [
  "Daily live trading sessions",
  "Full structured course library",
  "Private Discord community",
  "Weekly mentor Q&A",
  "Recorded session archive",
  "Trade journal templates",
];

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 75,
    period: "/month",
    note: "Billed monthly · cancel anytime",
    highlight: false,
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: 497,
    period: "One Time Payment",
    note: "Billed once· save more",
    highlight: true,
    badge: "Most Popular",
  },
];

const Pricing = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("quarterly");

  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Choose a plan that fits your pace"
      subtitle="Two simple options. Same complete access. Cancel anytime."
      center
    >
      <div className="grid gap-6 lg:grid-cols-2 max-w-3xl mx-auto">
        {plans.map((p, i) => {
          const isActive = active === p.id;
          return (
            <motion.div
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setActive(p.id)}
              className={`relative rounded-2xl p-7 border transition-all ${
                isActive
                  ? "bg-card border-primary/40 shadow-elegant scale-[1.02]"
                  : "bg-card border-border shadow-soft"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 shadow-glow">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold text-foreground">${p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>

              <Button
                asChild
                className={`mt-6 w-full h-12 font-semibold ${
                  isActive
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <a href={p.id === "monthly" ? WHOP_URL1 : WHOP_URL2} target="_blank" rel="noopener noreferrer">Join now</a>
              </Button>

              <ul className="mt-7 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Secure checkout via Whop · All sales are final
      </p>
    </Section>
  );
};

export default Pricing;
