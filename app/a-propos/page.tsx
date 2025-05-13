import AboutSection from "../components/home/About";
import ContactSection from "../components/home/ContactSection";
import MissionVisionSection from "../components/home/MissionVisionSection";
import PartenairesSection from "../components/home/PartenairesSection";
import AboutHero from "./AboutHero";

export default function AboutPage() {
    return (
        <div className="">
            <main className="">
                <AboutHero />
                <AboutSection />
                <MissionVisionSection />
                <PartenairesSection />
                <ContactSection />
            </main>

        </div>
    );
}
