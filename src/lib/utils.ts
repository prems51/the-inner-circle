import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


 const socials = {
  "discord" : "https://discord.gg/2WAbwSfMsd",
  "X" : "https://x.com/Trssx",
  "youtube" : "https://www.youtube.com/results?search_query=trssx+trades",
  "tiktok" : "https://www.tiktok.com/@trssxtrades?lang=en",
  "innercirclepremium" : "https://whop.com/trssxpremium/trssxpremium/",
  "innercirclepremiumlifetime" : "https://whop.com/trssxpremium/lifetime-0/",
  "instagram" : "https://www.instagram.com/trssxtrades/",

}

export default socials;