import { motion, useReducedMotion } from "framer-motion";
import { Radio, GraduationCap, Waypoints, LineChart, MessagesSquare, ShieldCheck } from "lucide-react";
import Section from "./Section";

const items = [
  { icon: LineChart, title: "Clear levels + Execution", desc: "We provide clear levels along with precise entry, take profit, and stop loss points." },
  { icon: Radio, title: "Live trading", desc: "Trade with instructors in real time, every market session." },
  { icon: Waypoints, title: "Roadmap", desc: "Follow a clear roadmap with step-by-step lessons and resources to track your progress" },
  { icon: GraduationCap, title: "Full bootcamp", desc: "Step-by-step paths from beginner foundations to advanced strategy." },
  { icon: MessagesSquare, title: "Active community", desc: "Join our Discord full of traders sharing ideas, charts and feedback." },
  { icon: ShieldCheck, title: "24/7 Access", desc: "Access all our resources, recordings, and courses anytime, anywhere." },
];

const Benefits = () => {
  const reduce = useReducedMotion();
  return (
    <Section
      id="benefits"
      eyebrow="Gains"
      title="What you need"
      subtitle="A complete environment for learning, practicing and growing as a trader."
      center
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl bg-card p-6 border border-border hover:border-primary/40 hover:shadow-elegant transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
