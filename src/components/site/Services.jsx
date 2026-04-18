import { motion, useReducedMotion } from "framer-motion";
import { Layers, Wheat, Flame, Wrench, Ship, Briefcase } from "lucide-react";
import Section from "./Section";

const services = [
  {
    icon: Layers,
    title: "Metals & Minerals",
    desc: "Copper, aluminium, steel and rare earths sourced from verified mills and refineries worldwide.",
  },
  {
    icon: Wheat,
    title: "Agricultural Commodities",
    desc: "Grains, oilseeds and pulses moved from origin to mill with traceable quality at every stage.",
  },
  {
    icon: Flame,
    title: "Energy Products",
    desc: "Crude derivatives, base oils and bitumen — supplied with full compliance documentation.",
  },
  {
    icon: Wrench,
    title: "Industrial Supplies",
    desc: "Construction materials, polymers and specialty chemicals for manufacturers at scale.",
  },
  {
    icon: Ship,
    title: "Logistics & Shipping",
    desc: "Multimodal freight, customs clearance and warehousing across major trade corridors.",
  },
  {
    icon: Briefcase,
    title: "Trade Consulting",
    desc: "Market intelligence, sourcing strategy and risk advisory for buyers entering new regions.",
  },
];

const Services = () => {
  const reduce = useReducedMotion();

  return (
    <Section
      id="services"
      eyebrow="What We Do"
      title="Comprehensive trading across global markets"
      subtitle="Six core service lines, one accountable partner — engineered to make complex international trade feel effortless."
      className="bg-surface"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl bg-card p-7 border border-border/70 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/12 text-accent group-hover:bg-gradient-gold group-hover:text-primary transition-all">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 h-px w-full bg-border group-hover:bg-accent/50 transition-colors" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
