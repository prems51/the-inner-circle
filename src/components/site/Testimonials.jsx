import { Star } from "lucide-react";
import { useState } from "react";
import Section from "./Section";

const reviews = [
  { name: "Richard Yang", role: "Member · 1 yr", text: "I just finished my second 1on1 call, it was very informative and I learned some great information. He was very patent with me and answered all my questions. He made sure I really understood the information. I definitely plan on booking another call later on and absolutely think its worth the value. Thanks for taking the time mich", rating: 5 },
  { name: "William Goacher", role: "Member · 8 mo", text: "Mich genuinely changed my life. I couldn't ask for a better mentor he's always there when I need guidance, and his strategy is hands down the most solid and reliable I've ever seen. If you stick to it, it will change your life too.", rating: 5 },
  { name: "Jason", role: "Member · 2 yr", text: "This guy is genuinely a really good person. Whenever you text him, he's always there to answer your questions or offer mental support. He explains everything in detail but in a simple, easy-to-understand way. All his videos are very clear, informative, and helpful. I've learned a lot from him, and I truly appreciate his dedication and kindness.", rating: 5 },
  { name: "Yuwri", role: "Member · 6 mo", text: "Amazing Discord!\nFrom the community, to the lessons, to the bootcamp. This guy really put the work into this.\nGuy really straight to the point and very transparent. No hidden losses, no secret strategy. Nothing.\nReally worth y'alls investment.", rating: 5 },
  { name: "Israel Batista", role: "Member · 3 mo", text: "Michael is a really nice guy, patient and explains really well", rating: 5 },
  { name: "Cornelis Peltola", role: "Member · 9 mo", text: "Best mentor out there.", rating: 5 },

];

const payouts = [
  {
    src: "./images/payouts/img1.webp",
  },
  {
    src: "./images/payouts/img2.webp",
  },
  {
    src: "./images/payouts/img3.webp",
  },
  {
    src: "./images/payouts/img4.webp",
  },
  {
    src: "./images/payouts/img5.webp",
  },
  {
    src: "./images/payouts/img6.webp",
  },
]

const Card = ({ r }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = r.text.split(" ");
  const isLong = words.length > 15;
  
  const displayText = isLong && !isExpanded 
    ? words.slice(0, 15).join(" ") + "..." 
    : r.text;

  return (
    <div className="w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl bg-card border border-border p-6 shadow-soft flex flex-col h-full min-h-[280px]">
      <div className="flex items-center gap-1 text-accent mb-3">
        {Array.from({ length: r.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-foreground/85 whitespace-pre-wrap flex-grow">
        "{displayText}"
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:underline ml-2 font-medium"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
      <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display text-sm font-bold shrink-0">
          {r.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">{r.name}</p>
          <p className="text-xs text-muted-foreground">{r.role}</p>
        </div>
      </div>
    </div>
  );
};

const PayoutCard = ({ p }) => (
  <div className="w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl bg-card border border-border p-6 shadow-soft flex flex-col h-full min-h-[280px]">
    <img src={p.src} className="rounded-lg object-cover h-full w-full" />
  </div>
);

const Row = ({ items, reverse = false }) => (
  <div className="marquee-pause overflow-hidden">
    <div
      className="marquee-track flex gap-5 w-max items-stretch"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {[...items, ...items, ...items].map((r, i) => (
        <Card key={i} r={r} />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      eyebrow="Member Voices"
      title="Loved by traders, every day"
      subtitle="Real reviews and payouts from the The Inner Circle community."
      center
    >
      <div className="relative -mx-6 lg:-mx-8 space-y-5">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <Row items={reviews} />

        <div className="marquee-pause overflow-hidden">
          <div
            className="marquee-track flex gap-5 w-max items-stretch"
            style={{animationDirection: "reverse"}}
          >
            {[...payouts, ...payouts, ...payouts].map((p, i) => (
              <PayoutCard key={i} p={p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
