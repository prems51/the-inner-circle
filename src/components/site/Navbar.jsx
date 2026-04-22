import { useEffect, useState } from "react";
import { Menu, X, CandlestickChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import socials from "@/lib/utils"

const links = [
  { href: "#benefits", label: "Benefits" },
  { href: "#journey", label: "Journey" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why", label: "Why Us" },
  // { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

const DISCORD_URL = socials.discord;
const WHOP_URL = socials.innercirclepremium;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2 group">
          <img src="./tmLogo.png" alt="logo" className="w-[45px] rounded-md" />
          <span className="font-display text-lg font-extrabold text-foreground">The Inner Circle</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="text-foreground/80 hover:text-foreground hover:bg-secondary"
          >
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a>
          </Button>
          <Button
            asChild
            className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-95 transition-opacity"
          >
            <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">Join</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border/50 animate-fade-in">
          <div className="container-tight flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
            >
              Discord
            </a>
            <Button
              asChild
              className="mt-2 bg-gradient-primary text-primary-foreground font-semibold"
            >
              <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">Join</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
