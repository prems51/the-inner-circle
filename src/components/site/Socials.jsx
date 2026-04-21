import { motion, useReducedMotion } from "framer-motion";
import { Instagram, Twitter, Youtube, Send, MessageCircle, Music2 } from "lucide-react";
import Section from "./Section";

const socials = [
  { name: "Discord", handle: "@tdtrade", icon: MessageCircle, href: "#", color: "from-indigo-500 to-violet-500" },
  { name: "Instagram", handle: "@td.trade", icon: Instagram, href: "#", color: "from-pink-500 to-orange-400" },
  { name: "X / Twitter", handle: "@tdtrade", icon: Twitter, href: "#", color: "from-slate-700 to-slate-900" },
  { name: "Telegram", handle: "@tdtrade", icon: Send, href: "#", color: "from-sky-400 to-cyan-500" },
  { name: "TikTok", handle: "@tdtrade", icon: Music2, href: "#", color: "from-fuchsia-500 to-rose-500" },
  { name: "YouTube", handle: "@tdtrade", icon: Youtube, href: "#", color: "from-red-500 to-rose-600" },
];

const Socials = () => {
  const reduce = useReducedMotion();

  return (
    <Section
      id="socials"
      eyebrow="Stay Connected"
      title="Find us across the internet"
      subtitle="Join our communities, follow live trades, and never miss a market move."
      center
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-8 sm:p-12 shadow-elegant overflow-hidden"
      >
        {/* decorative mesh */}
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />

        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${s.name} — ${s.handle}`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                whileHover={reduce ? undefined : { y: -6, scale: 1.04 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background/70 p-5 hover:border-primary/40 hover:shadow-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <div
                  className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-soft`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <Icon
                    className="h-7 w-7 text-white group-hover:animate-wiggle"
                    strokeWidth={2.2}
                  />
                </div>
                <div className="text-center">
                  <div className="font-display text-sm font-semibold text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.handle}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Socials;