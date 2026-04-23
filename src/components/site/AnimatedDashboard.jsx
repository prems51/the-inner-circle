import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Users, TrendingUp } from "lucide-react";

const tickers = [
  { sym: "ES", name: "S&P 500", price: "5,284.40", change: "+0.84%", up: true },
  { sym: "NQ", name: "Nasdaq", price: "18,640", change: "+1.22%", up: true },
  { sym: "GC", name: "Gold", price: "2,341.10", change: "+0.62%", up: true },
  { sym: "CL", name: "Crude Oil", price: "78.45", change: "-0.34%", up: false },
];

const AnimatedDashboard = () => {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" aria-hidden />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative rounded-2xl bg-card shadow-elegant border border-border p-6 lg:p-7"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Live Session</p>
            <p className="font-display font-bold text-foreground mt-0.5">Indices & Commodities</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-ticker-pulse" />
            LIVE
          </span>
        </div>

        <div className="mb-5 rounded-xl bg-surface p-4 border border-border/60">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground">Today's P/L</p>
              <p className="font-display text-2xl font-extrabold text-foreground">+$1,285.40</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-accent">
              <ArrowUpRight className="h-4 w-4" />
              +12.4%
            </span>
          </div>
          <svg viewBox="0 0 300 80" className="w-full h-16" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
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
              stroke="url(#chartStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={reduce ? false : { pathLength: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
            />
          </svg>
        </div>

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
                <span className="text-sm font-semibold text-foreground tabular-nums">{t.price}</span>
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold tabular-nums ${
                    t.up ? "text-accent" : "text-rose-500"
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

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={reduce ? false : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -top-5 -left-5 lg:-left-10 rounded-xl bg-card shadow-elegant border border-border px-4 py-3 animate-float hidden sm:flex items-center gap-2.5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
          <Users className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Online now</p>
          <p className="text-sm font-bold text-foreground">1,284 members</p>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={reduce ? false : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{ animationDelay: "1s" }}
        className="absolute -bottom-5 -right-5 lg:-right-8 rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant px-4 py-3 animate-float hidden sm:flex items-center gap-2.5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20">
          <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-primary-foreground/70">Win rate</p>
          <p className="text-sm font-bold">68.4%</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedDashboard;
