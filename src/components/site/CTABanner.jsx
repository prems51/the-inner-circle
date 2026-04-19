import { ArrowRight, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHOP_URL = "https://whop.com";
const DISCORD_URL = "https://discord.com";

const CTABanner = () => (
  <section className="py-20 lg:py-24">
    <div className="container-tight">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-10 lg:p-16 text-center shadow-elegant">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="relative">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Ready to trade with a real community?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary-foreground/85 max-w-xl mx-auto">
            Join thousands of members learning live every day. Start with our flagship plan or jump into Discord first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 h-12 px-7 group"
            >
              <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">
                Join The Inner Circle
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <MessagesSquare className="mr-1 h-4 w-4" />
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
