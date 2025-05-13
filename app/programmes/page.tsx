import ContactSection from "../components/home/ContactSection";
import PartenairesSection from "../components/home/PartenairesSection";
import PageHeroWithCTA from "../components/PageHeroWithCTA";
import ProgrammesSection from "./ProgrammesSection";



export default function ProgrammePage() {
    return (
        <div className="">
            <main className="">

                <PageHeroWithCTA
                    title="Des programmes conçus pour booster votre projet"
                    subtitle="Entrepreneurs, associations, ONG… Nos programmes vous accompagnent dans la structuration, la croissance et la recherche de financement, à chaque étape de votre parcours."
                    ctaLabel="Contactez-nous"
                    ctaLink="#contact"
                    imageSrc="/images/programmes-hero.png" // Remplace par l'image de ton choix
                />

                <ProgrammesSection />
                <PartenairesSection />
                <ContactSection />
            </main>

        </div>
    );
}
