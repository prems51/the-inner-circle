import { TrendingUp, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const handle = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-tight py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" onClick={handle("#home")} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
                <TrendingUp className="h-5 w-5 text-primary" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold">Lathyrus</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/65 max-w-xs">
              A global trading partner moving metals, agriculture, energy and industrial supplies across 42 countries.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/8 text-primary-foreground/70 hover:bg-accent hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Industries", "#industries"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handle(href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                "Metals & Minerals",
                "Agricultural Commodities",
                "Energy Products",
                "Industrial Supplies",
                "Logistics & Shipping",
              ].map((s) => (
                <li key={s} className="text-primary-foreground/70">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li>+1 (415) 555-0142</li>
              <li>trade@lathyrus.com</li>
              <li>Pier 17, Suite 800<br />San Francisco, CA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} Lathyrus Trading. All rights reserved.</p>
          <p>Privacy · Terms · Compliance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
