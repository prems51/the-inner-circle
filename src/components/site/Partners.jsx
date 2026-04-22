import Section from "./Section";





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

          <a href="https://app.alpha-futures.com/signup/TRSSX/">
            <img src="./images/alphaFutures.png" alt="alphafutures" className="w-[200px]" />
          </a>
          <a href="https://bulenox.com/member/aff/go/tmtrades" >
            <img src="./images/bulenox.png" alt="bulenox" className="w-[200px]" />
          </a>
          <a href="https://toponefutures.com/?linkId=lp_707970&sourceId=trssx&tenantId=toponefutures">
            <img src="./images/topOne.svg" alt="topone" className="w-[200px]" />
          </a>
          <a href="https://apextraderfunding.com/member/aff/go/trssxx">
            <img src="./images/apex-logo.png" alt="apex" className="w-[200px]" />
          </a>
          <a href="https://tradecopia.com/">
            <img src="./images/tradecopia.svg" alt="tradecopia" className="w-[200px]" />
          </a>
          <a href="https://tradeify.co/?ref=trssx">
            <img src="./images/tradeify.svg" alt="tradeify" className="w-[200px]" />
          </a>

        </div>
      </div>
    </Section>
  );
};

export default Partners;
