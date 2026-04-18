import { useEffect, useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-18 items-center justify-between py-4">
        <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold shadow-gold-glow">
            <TrendingUp className="h-5 w-5 text-primary" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold text-primary-foreground">Lathyrus</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="relative text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={(e) => handleClick(e, "#contact")}
            className="bg-gradient-gold text-primary font-semibold shadow-gold-glow hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-glow animate-fade-in">
          <div className="container-tight flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="rounded-md px-3 py-3 text-sm font-medium text-primary-foreground/90 hover:bg-primary-glow hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <Button
              onClick={(e) => handleClick(e, "#contact")}
              className="mt-2 bg-gradient-gold text-primary font-semibold"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
