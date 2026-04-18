import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent",
        description: "Thanks — our trade desk will be in touch within one business day.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

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
    <section id="contact" className="py-20 lg:py-28 bg-surface">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fade(0)}>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get in Touch</span>
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Let's talk about your{" "}
              <span className="text-gradient-gold">next shipment</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Whether you're sourcing volume for the first time or rebalancing a global supply chain — our trade desk is
              ready to help.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Call us", value: "+1 (415) 555-0142" },
                { icon: Mail, label: "Email", value: "trade@lathyrus.com" },
                { icon: MapPin, label: "Headquarters", value: "Pier 17, Suite 800, San Francisco, CA" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                      <p className="mt-0.5 font-medium text-foreground">{c.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.form
            {...fade(0.15)}
            onSubmit={onSubmit}
            className="rounded-2xl bg-card border border-border/70 shadow-soft p-7 lg:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Full name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className="h-11"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  className="h-11"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={onChange}
                placeholder="Sourcing inquiry"
                className="h-11"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about volume, timing and destination markets..."
                className="flex w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="mt-6 w-full bg-gradient-gold text-primary font-semibold shadow-gold-glow hover:opacity-90 h-12"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-1 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
