import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Globe2 } from "lucide-react";

const tickers = [
  { sym: "CU", name: "Copper", price: "9,420", change: "+1.84%", up: true },
  { sym: "AU", name: "Gold", price: "2,341", change: "+0.62%", up: true },
  { sym: "WHT", name: "Wheat", price: "612.40", change: "-0.34%", up: false },
  { sym: "BRT", name: "Brent", price: "84.12", change: "+2.10%", up: true },
];

const AnimatedDashboard = () => {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* Glow backdrop */}
      <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" aria-hidden />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative rounded-2xl bg-card shadow-elegant border border-border/60 p-6 lg:p-7"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Live Markets</p>
            <p className="font-display font-semibold text-foreground mt-0.5">Global Commodities</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-ticker-pulse" />
            LIVE
          </span>
        </div>

        {/* Mini chart */}
        <div className="mb-5 rounded-xl bg-surface p-4">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground">Portfolio Index</p>
              <p className="font-display text-2xl font-bold text-primary">$24,891.40</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
              <ArrowUpRight className="h-4 w-4" />
              +12.4%
            </span>
          </div>
          <svg viewBox="0 0 300 80" className="w-full h-16" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,60 L30,52 L60,58 L90,40 L120,45 L150,30 L180,34 L210,22 L240,28 L270,15 L300,18 L300,80 L0,80 Z"
              fill="url(#chartFill)"
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? false : { opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.path
              d="M0,60 L30,52 L60,58 L90,40 L120,45 L150,30 L180,34 L210,22 L240,28 L270,15 L300,18"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={reduce ? false : { pathLength: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
            />
          </svg>
        </div>

        {/* Tickers */}
        <div className="space-y-2">
          {tickers.map((t, i) => (
            <motion.div
              key={t.sym}
              initial={reduce ? false : { opacity: 0, x: 10 }}
              animate={reduce ? false : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="flex items-center justify-between rounded-lg bg-surface/60 px-3 py-2.5 hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 font-display text-xs font-bold text-primary">
                  {t.sym}
                </span>
                <span className="text-sm font-medium text-foreground">{t.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground tabular-nums">${t.price}</span>
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold tabular-nums ${
                    t.up ? "text-emerald-600" : "text-rose-500"
                  }`}
                >
                  {t.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {t.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={reduce ? false : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -top-5 -left-5 lg:-left-10 rounded-xl bg-card shadow-elegant border border-border/60 px-4 py-3 animate-float hidden sm:flex items-center gap-2.5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
          <Globe2 className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Markets</p>
          <p className="text-sm font-bold text-foreground">42 Countries</p>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={reduce ? false : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{ animationDelay: "1s" }}
        className="absolute -bottom-5 -right-5 lg:-right-8 rounded-xl bg-primary text-primary-foreground shadow-elegant px-4 py-3 animate-float hidden sm:flex items-center gap-2.5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-primary">
          <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-primary-foreground/60">Growth YoY</p>
          <p className="text-sm font-bold">+34.8%</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedDashboard;
