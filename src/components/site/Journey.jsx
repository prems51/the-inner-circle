import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";

const steps = [
  { n: "01", title: "Join the community", desc: "Pick a plan and get instant access to Discord, the course library and live rooms." },
  { n: "02", title: "Learn the foundations", desc: "Walk through structured lessons on price action, risk and execution." },
  { n: "03", title: "Sit in on live sessions", desc: "Watch instructors analyze and trade indices and commodities in real time." },
  { n: "04", title: "Build your edge", desc: "Develop your own playbook with mentor feedback and recorded sessions." },
  { n: "05", title: "Trade with consistency", desc: "Apply a tested process with the support of a community that actually trades." },
];

const Journey = () => {
  const reduce = useReducedMotion();
  return (
    <Section
      id="journey"
      eyebrow="Your Journey"
      title="From day one to consistent trader"
      subtitle="A clear path that meets you wherever you are and takes you further."
      center
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
        <div className="space-y-6 lg:space-y-10">
          {steps.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={s.n}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`grid lg:grid-cols-2 gap-6 items-center ${right ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`${right ? "lg:pl-12 lg:text-left" : "lg:pr-12 lg:text-right"}`}>
                  <div className={`inline-flex items-center gap-3 ${right ? "" : "lg:flex-row-reverse"}`}>
                    <span className="font-display text-sm font-bold text-primary">{s.n}</span>
                    <span className="h-px w-8 bg-primary/40" />
                  </div>
                  <h3 className="mt-3 font-display text-xl lg:text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-md lg:inline-block">{s.desc}</p>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="relative h-12 w-12 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                    {s.n}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Journey;
