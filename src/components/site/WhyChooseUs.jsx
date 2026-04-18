import { motion, useReducedMotion } from "framer-motion";
import { Globe2, ShieldCheck, LineChart, Headphones } from "lucide-react";
import Section from "./Section";

const features = [
  {
    icon: Globe2,
    title: "Global Network",
    desc: "Offices and partners across 42 countries giving you direct market access.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Supply Chain",
    desc: "Vetted suppliers, contingency routes and 98% on-time delivery performance.",
  },
  {
    icon: LineChart,
    title: "Transparent Pricing",
    desc: "Real benchmarks, clear margins and no hidden fees on any transaction.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "A named trade desk for every account — reachable across time zones.",
  },
];

const WhyChooseUs = () => {
  const reduce = useReducedMotion();
  return (
    <Section
      eyebrow="Why Lathyrus"
      title="Built around the way you trade"
      subtitle="We invest in the operational backbone that makes every shipment feel routine — even when the market isn't."
      center
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-navy text-primary-foreground shadow-soft">
                <Icon className="h-6 w-6 text-accent" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
