import { motion, useReducedMotion } from "framer-motion";

const Section = ({ id, eyebrow, title, subtitle, children, className = "", center = false }) => {
  const reduce = useReducedMotion();
  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="container-tight">
        {(eyebrow || title || subtitle) && (
          <motion.div {...fade} className={`mb-14 ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
