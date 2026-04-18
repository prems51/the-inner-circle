const logos = ["NORDSTEEL", "AGRICORP", "PETROLEX", "MERIDIAN", "VANGUARD", "ATLAS CO."];

const TrustedBy = () => (
  <section className="border-y border-border bg-surface py-10">
    <div className="container-tight">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by industry leaders worldwide
      </p>
      <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((l) => (
          <div
            key={l}
            className="flex items-center justify-center font-display text-base font-bold tracking-wider text-muted-foreground/60 transition-colors hover:text-primary"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
