import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "./Section";

const testimonials = [
  {
    quote:
      "Lathyrus has become an extension of our procurement team. Their market visibility and execution discipline are genuinely best-in-class.",
    name: "Amelia Chen",
    role: "Head of Procurement",
    company: "Nordsteel Industries",
  },
  {
    quote:
      "We needed a partner who could move volume reliably across three continents. Two years in, every shipment has landed on spec and on time.",
    name: "Rajiv Mehta",
    role: "Supply Chain Director",
    company: "Agricorp Global",
  },
  {
    quote:
      "Transparent pricing, real expertise, and a team that picks up the phone. That combination is rarer than it should be in this industry.",
    name: "Sophie Laurent",
    role: "Managing Director",
    company: "Meridian Trading",
  },
];

const Testimonials = () => {
  const reduce = useReducedMotion();
  return (
    <Section
      eyebrow="Client Voices"
      title="Trusted by partners that demand performance"
      subtitle="Long-term relationships built on consistent execution — here's what some of them say."
      center
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl bg-card p-7 border border-border/70 shadow-soft hover:shadow-elegant transition-shadow"
          >
            <Quote className="h-9 w-9 text-accent/30 absolute top-5 right-5" />
            <blockquote className="text-base leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
            <figcaption className="mt-6 pt-5 border-t border-border">
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {t.role} · <span className="text-accent">{t.company}</span>
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
