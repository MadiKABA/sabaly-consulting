import ContactSection from "../components/home/ContactSection";
import PartenairesSection from "../components/home/PartenairesSection";
import PageHeroWithCTA from "../components/PageHeroWithCTA";
import ReferencesSection from "./ReferencesSection";



export default function ProgrammePage() {
    return (
        <div className="">
            <main className="">

                <PageHeroWithCTA
                    title="Des interventions stratégiques au service de l’impact"
                    subtitle="Nous accompagnons institutions, ONG, PME et entrepreneurs à relever leurs défis organisationnels, financiers et digitaux à chaque étape clé de leur développement."
                    ctaLabel="Contactez-nous"
                    ctaLink="#contact"
                    imageSrc="/images/references-hero.png" // remplace par une image pertinente (ex: mission sur terrain, réunion, etc.)
                />


                <ReferencesSection />
                <PartenairesSection />
                <ContactSection />
            </main>

        </div>
    );
}
