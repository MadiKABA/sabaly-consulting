import ContactSection from "../components/home/ContactSection";
import PageHeroWithCTA from "../components/PageHeroWithCTA";
import ServicesSection from "./ServicesSection";



export default function ServicePage() {
    return (
        <div className="">
            <main className="">

                <PageHeroWithCTA
                    title="Des services pensés pour votre impact"
                    subtitle="Audit, conseil, gestion financière, renforcement de capacités… Nous accompagnons les organisations africaines à chaque étape clé de leur croissance."
                    ctaLabel="Nous Contacter"
                    ctaLink="#contact"
                    imageSrc="/images/services-hero.png" // à remplacer par ton image
                />
                <ServicesSection />
                <ContactSection />
            </main>

        </div>
    );
}
