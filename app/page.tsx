import Hero from "./components/home/Hero";
import About from "./components/home/About";
import ServicesSection from "./components/home/ServicesSection";
import MissionVisionSection from "./components/home/MissionVisionSection";
import PartenairesSection from "./components/home/PartenairesSection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <About />
        <ServicesSection />
        <MissionVisionSection />
        <PartenairesSection />
        <ContactSection />
      </main>

    </div>
  );
}
