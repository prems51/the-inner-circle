import useLenis from "@/hooks/useLenis";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Journey from "./Journey";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import WhyUs from "./WhyUs";
// import Team from "./Team";
import FAQ from "./FAQ";
import CTABanner from "./CTABanner";
import Footer from "./Footer";

const LandingPage = () => {
  useLenis();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Journey />
        <Testimonials />
        <Pricing />
        <WhyUs />
        {/* <Team /> */}
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
