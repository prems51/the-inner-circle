import Section from "./Section";

const partners = [
  { name: "Tradecopia" },
  { name: "Tradeify" },
  { name: "TradeZ" },
  { name: "MarketEdge" },
  { name: "AlphaDesk" },
  { name: "QuantHub" },
  { name: "PipForge" },
  { name: "BullRoom" },
];

const Logo = ({ name }) => (
  <div className="flex items-center gap-3 px-8 py-4 flex-shrink-0">
    <div className="h-9 w-9 rounded-lg bg-gradient-primary shadow-soft flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
      {name.charAt(0)}
    </div>
    <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground/80 whitespace-nowrap">
      {name}
    </span>
  </div>
);

const Partners = () => {
  return (
    <Section id="partners" className="py-16 md:py-20">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
        Partnered with
      </p>
      <div className="relative -mx-6 lg:-mx-8 marquee-pause overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="marquee-track flex w-max items-center">
          {[...partners, ...partners].map((p, i) => (
            <Logo key={i} name={p.name} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Partners;
