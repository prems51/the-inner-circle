import Section from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is The Inner Circle?",
    a: "The Inner Circle is a trading community and educational platform dedicated to helping traders grow their knowledge, refine their skills, and achieve consistency in the markets.",
  },
  {
    q: "What level of trading experience is required to join?",
    a: "No prior experience is necessary. The Inner Circle welcomes traders of all levels — from complete beginners to seasoned professionals. Our resources are designed to educate, support and challenge you at every stage of your trading journey.",
  },
  {
    q: "What markets do you focus on?",
    a: "Our discussions, strategies and educational lessons are primarily centered around indices and commodities markets.",
  },
  {
    q: "Is there live trading every day?",
    a: "Yes. We host daily live trading sessions where members can observe, learn and participate in real-time market analysis and execution.",
  },
  {
    q: "Do you offer refunds?",
    a: "No. All sales are final, and we do not offer refunds.",
  },
];

const FAQ = () => (
  <Section
    id="faq"
    eyebrow="FAQ"
    title="Frequently asked questions"
    subtitle="Everything you need to know before joining The Inner Circle."
    center
  >
    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-xl border border-border bg-card px-5 data-[state=open]:shadow-soft data-[state=open]:border-primary/30 transition-all"
          >
            <AccordionTrigger className="font-display font-semibold text-left text-foreground hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

export default FAQ;
