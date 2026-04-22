import { motion, useReducedMotion } from "framer-motion";
import { Send, MessageCircle, Music2 } from "lucide-react";
import Section from "./Section";
import socials from "@/lib/utils";

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
const Whop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="currentColor"
    {...props}
  >
    {/* Left chevron */}
    <path d="M3.813 0C2.233 0 1.143 0.696 0.327 1.482L0 1.809L3.453 5.283L6.906 1.809C6.253 0.903 5.02 0 3.813 0Z" />
    {/* Middle chevron */}
    <path d="M12.34 0C10.76 0 9.669 0.696 8.854 1.482L8.539 1.809L4.27 6.104L7.718 9.573L15.434 1.809C14.78 0.903 13.547 0 12.34 0Z" />
    {/* Right chevron + arc tail */}
    <path d="M20.892 0C19.312 0 18.221 0.696 17.406 1.482L17.095 1.809L8.54 10.404L9.444 11.317C10.841 12.724 13.126 12.724 14.524 11.317L23.985 1.809C23.333 0.903 22.099 0 20.892 0Z" />
  </svg>
);

const links = [
  { name: "Discord", handle: "", icon: MessageCircle, href: socials.discord, color: "from-[#5865F2] to-[#7289DA]" },
  { name: "Instagram", handle: "", icon: Instagram, href: socials.instagram, color: "from-[#8a3abf] to-[#e1306c]" },
  { name: "X / Twitter", handle: "", icon: Twitter, href: socials.X, color: "from-[#000000] to-[#4a4a4a]" },
  { name: "TikTok", handle: "", icon: Music2, href: socials.tiktok, color: "from-[#000000] to-[#fe2c55]" },
  { name: "YouTube", handle: "", icon: Youtube, href: socials.youtube, color: "from-[#ff0000] to-[#ff0000]" },
  { name: "Whop", handle: "", icon: Whop, href: socials.innercirclepremium, color: "from-[#FA4616] to-[#FA4616]" },
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
          {links.map((s, i) => {
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
                  className={`relative h-12 w-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-soft`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <Icon
                    className="h-6 w-6 text-white group-hover:animate-wiggle"
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