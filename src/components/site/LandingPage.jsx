import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import About from "./About";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Stats from "./Stats";
import Industries from "./Industries";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Industries />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default LandingPage;
