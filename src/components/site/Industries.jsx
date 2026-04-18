import { motion, useReducedMotion } from "framer-motion";
import { Building2, Factory, Sprout, Zap, Car, HardHat } from "lucide-react";
import Section from "./Section";

const industries = [
  { icon: Building2, name: "Construction" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Sprout, name: "Agriculture" },
  { icon: Zap, name: "Energy" },
  { icon: Car, name: "Automotive" },
  { icon: HardHat, name: "Infrastructure" },
];

const Industries = () => {
  const reduce = useReducedMotion();
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title="Serving the sectors that move the world"
      subtitle="Our trading desks are organised around end-use — so you get specialists who understand your supply chain, not generalists."
      center
      className="bg-surface"
    >
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={ind.name}
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              whileInView={reduce ? false : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col items-center justify-center rounded-xl bg-card border border-border p-6 hover:border-accent hover:shadow-soft transition-all cursor-default"
            >
              <Icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" strokeWidth={1.75} />
              <span className="mt-3 text-sm font-medium text-foreground">{ind.name}</span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Industries;
