import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Section from "./Section";

const team = [
  {
    name: "Daniel Reyes",
    role: "Founder · Head Trader",
    bio: "12+ years trading indices and commodities. Builds the live curriculum.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Anand",
    role: "Lead Mentor · Risk",
    bio: "Specialist in position sizing and risk frameworks for retail traders.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Lee",
    role: "Education Director",
    bio: "Designs the structured course paths and beginner foundations.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Elena Costa",
    role: "Community Lead",
    bio: "Runs Discord, member onboarding and weekly community events.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

const Team = () => {
  const reduce = useReducedMotion();
  return (
    <Section
      id="team"
      eyebrow="The Team"
      title="Traders teaching what they live"
      subtitle="A small team of active traders, mentors and educators behind TD Trade."
      center
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elegant transition-all"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <p className="font-display font-bold text-foreground">{m.name}</p>
              <p className="text-xs text-primary font-medium mt-0.5">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              <div className="mt-4 flex items-center gap-2">
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="h-8 w-8 flex items-center justify-center rounded-md bg-secondary text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter" className="h-8 w-8 flex items-center justify-center rounded-md bg-secondary text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
