import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Direct sourcing relationships with verified producers",
  "End-to-end logistics across sea, air and inland freight",
  "Compliance-first trading with full documentation",
  "Multi-currency settlement and trade finance support",
];

const About = () => {
  const reduce = useReducedMotion();
  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div {...fade(0)} className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" aria-hidden />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80"
              alt="Global shipping port operations"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card shadow-elegant border border-border/60 p-5 max-w-[200px]">
            <p className="font-display text-3xl font-bold text-primary">98%</p>
            <p className="text-xs text-muted-foreground mt-1">On-time delivery rate across global shipments</p>
          </div>
        </motion.div>

        <motion.div {...fade(0.15)}>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About Lathyrus</span>
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            A trading partner built on{" "}
            <span className="text-gradient-gold">trust and precision</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            For nearly two decades, we've moved essential commodities from origin to destination — combining deep
            industry expertise with rigorous quality control and transparent dealings.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our team operates across four continents, giving clients real market intelligence, competitive pricing and
            the confidence that every shipment is handled with care.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
