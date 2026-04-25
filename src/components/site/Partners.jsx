import Section from "./Section";



const partners = [
  {
    name: "Alpha Futures",
    href: "https://app.alpha-futures.com/signup/TRSSX/",
    src: "./images/alphaFutures.png",
    alt: "alphafutures",
  },
  {
    name: "Bulenox",
    href: "https://bulenox.com/member/aff/go/tmtrades",
    src: "./images/bulenox.png",
    alt: "bulenox",
  },
  {
    name: "Top One Futures",
    href: "https://toponefutures.com/?linkId=lp_707970&sourceId=trssx&tenantId=toponefutures",
    src: "./images/topOne.svg",
    alt: "topone",
  },
  {
    name: "Apex Trader Funding",
    href: "https://apextraderfunding.com/member/aff/go/trssxx",
    src: "./images/apex-logo.png",
    alt: "apex",
  },
  {
    name: "Tradecopia",
    href: "https://tradecopia.com/",
    src: "./images/tradecopia.svg",
    alt: "tradecopia",
  },
  {
    name: "Tradeify",
    href: "https://tradeify.co/?ref=trssx",
    src: "./images/tradeify.svg",
    alt: "tradeify",
  },
]



const Partners = () => {
  return (
    <Section id="partners" className="py-16 md:py-20">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
        Partnered with
      </p>
      <div className="relative -mx-6 lg:-mx-8 marquee-pause overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />


        <div className="marquee-track flex w-max items-center gap-10">
          {
            [...partners, ...partners, ...partners].map((p, i) => (
              <a key={i} href={p.href}>
                <img src={p.src} alt={p.alt} className="w-[200px]" />
              </a>
            ))
          }
        </div>
      </div>
    </Section>
  );
};

export default Partners;
