import { Star } from "lucide-react";
import Section from "./Section";

const reviews = [
  { name: "Alex P.", role: "Member · 1 yr", text: "The live sessions completely changed how I read the market. Worth every cent.", rating: 5 },
  { name: "Maya R.", role: "Member · 8 mo", text: "I finally have a process I trust. The mentors actually trade and it shows.", rating: 5 },
  { name: "Jordan K.", role: "Member · 2 yr", text: "The community is incredible — sharp traders, no ego, real feedback every day.", rating: 5 },
  { name: "Sara L.", role: "Member · 6 mo", text: "Went from blowing accounts to consistent green months in under a year.", rating: 5 },
  { name: "Rohit S.", role: "Member · 1 yr", text: "The structured courses made everything click. Best decision I've made.", rating: 5 },
  { name: "Emma D.", role: "Member · 3 mo", text: "I love how transparent the instructors are about losses and process.", rating: 5 },
  { name: "Liam T.", role: "Member · 9 mo", text: "Daily live trading is the secret. You see real decisions in real time.", rating: 5 },
  { name: "Nora B.", role: "Member · 1 yr", text: "Felt at home from day one. The Discord alone is worth the membership.", rating: 5 },
];

const Card = ({ r }) => (
  <div className="w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl bg-card border border-border p-6 shadow-soft">
    <div className="flex items-center gap-1 text-accent mb-3">
      {Array.from({ length: r.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
    <p className="text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
    <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display text-sm font-bold">
        {r.name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-sm text-foreground">{r.name}</p>
        <p className="text-xs text-muted-foreground">{r.role}</p>
      </div>
    </div>
  </div>
);

const Row = ({ items, reverse = false }) => (
  <div className="marquee-pause overflow-hidden">
    <div
      className="marquee-track flex gap-5 w-max"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {[...items, ...items].map((r, i) => (
        <Card key={i} r={r} />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const half = Math.ceil(reviews.length / 2);
  return (
    <Section
      id="testimonials"
      eyebrow="Member Voices"
      title="Loved by traders, every day"
      subtitle="Real reviews from the The Inner Circle community."
      center
    >
      <div className="relative -mx-6 lg:-mx-8 space-y-5">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <Row items={reviews.slice(0, half)} />
        <Row items={reviews.slice(half)} reverse />
      </div>
    </Section>
  );
};

export default Testimonials;
