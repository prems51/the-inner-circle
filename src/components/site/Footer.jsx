import { CandlestickChart, Twitter, Instagram, Youtube, MessagesSquare } from "lucide-react";
import socials from "@/lib/utils";

const DISCORD_URL = socials.discord;
const WHOP_URL = socials.innercirclepremium;


const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container-tight py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <CandlestickChart className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-extrabold text-foreground">The Inner Circle</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
            A trading community and education platform. Daily live sessions, structured courses, and traders who actually trade.
          </p>
          {/* <div className="mt-5 flex items-center gap-2">
            {[
              { Icon: MessagesSquare, href: DISCORD_URL, label: "Discord" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <p className="font-display text-sm font-bold text-foreground">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["Benefits", "#benefits"],
              ["Journey", "#journey"],
              ["Testimonials", "#testimonials"],
              ["Pricing", "#pricing"],
              ["Why Us", "#why"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-muted-foreground hover:text-foreground transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold text-foreground">Community</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
            </li>
            <li>
              <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Join via Whop
              </a>
            </li>
            {/* <li><a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a></li> */}
            <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold text-foreground">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>Risk Disclosure</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} The Inner Circle. Trading involves risk. Past performance is not indicative of future results.</p>
        <p>Built for traders, by traders.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
