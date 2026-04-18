import Counter from "./Counter";

const stats = [
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 800, suffix: "+", label: "Global Clients" },
  { value: 42, suffix: "", label: "Countries Served" },
  { value: 12500, suffix: "+", label: "Successful Shipments" },
];

const Stats = () => (
  <section className="relative overflow-hidden bg-gradient-navy py-20 lg:py-24 text-primary-foreground">
    <div className="absolute inset-0 opacity-[0.05]" aria-hidden style={{
      backgroundImage:
        "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--primary-glow)) 0%, transparent 50%)",
    }} />
    <div className="container-tight relative">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">
        {stats.map((s) => (
          <div key={s.label} className="lg:border-l lg:border-primary-foreground/15 lg:pl-6 first:lg:border-l-0 first:lg:pl-0">
            <p className="font-display text-4xl sm:text-5xl font-bold text-accent tabular-nums">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/65">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
