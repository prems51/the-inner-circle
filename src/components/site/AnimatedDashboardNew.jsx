import { motion, useReducedMotion } from "framer-motion";
import { Users, TrendingUp, } from "lucide-react";

const cardContent = [
  { title: "TMT Archive", description: "Archive of old educational content" },
  { title: "TMT Files", description: "TMT Mentorship livestream library" },
  { title: "TMT Mentorship", description: "Get Mentorship from Professional Traders" },
  { title: "Instructor Content", description: "Included in course module" },
];

function getRandomNo(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AnimatedDashboard = () => {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-full" aria-hidden />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative rounded-2xl shadow-elegant border border-border p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >

        {
          cardContent.map((card, i) =>
            <div key={i} className="relative h-full">
              <div className="absolute -right-3 -bottom-3 md:-right-4 md:-bottom-4 bg-gradient-primary h-full w-full rounded-xl"></div>
              <div className="relative bg-white text-gray-700 rounded-xl p-6 lg:p-8 space-y-5 lg:space-y-7 shadow-elegant h-full flex flex-col">
                <div className="h-2 w-16 lg:w-20 bg-gradient-primary rounded-full"></div>
                <div className="text-xl lg:text-2xl font-extrabold">{card.title}</div>
                <p className="leading-snug text-gray-500">{card.description}</p>
              </div>
            </div>
          )
        }



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
          <p className="text-sm font-bold text-foreground">{getRandomNo(200, 1200)} members</p>
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
          <p className="text-sm font-bold">88.4%</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedDashboard;
