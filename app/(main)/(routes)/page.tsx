import ParallaxSection from "../_components/parallax-section";
import HeroSection from "./hero/hero-section";
import PortfolioSection from "./portfolio/portfolio-section";
import ServicesSection from "./services/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection id="Homepage" />
      <ParallaxSection id="Parallax" type="services" />
      <ServicesSection />
      <PortfolioSection id="Portfolio" />
    </div>
  );
}
