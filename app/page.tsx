import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Trust from "./components/Trust";
import WhoWeHelp from "./components/WhoWeHelp";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Trust />
      <WhoWeHelp />
      <Services />
      <Work />
      <Process />
      <WhyUs />
      <Pricing />
      <Insights />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
