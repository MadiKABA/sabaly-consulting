import { FC } from "react";
import { FaUniversity, FaMicroscope, FaBuilding, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

const references = [
    {
        icon: <FaUniversity className="text-indigo-600 text-2xl" />,
        title: "Secteur public & éducation",
        items: [
            "Ministère de l’Éducation Nationale du Sénégal : assistance financière et technique (PASEB, ADEMII), diagnostics organisationnels.",
        ],
    },
    {
        icon: <FaMicroscope className="text-indigo-600 text-2xl" />,
        title: "Recherche & enseignement supérieur",
        items: [
            "AIMS Sénégal : retraitement des états financiers (IFRS/SYSCOHADA).",
            "Institut Pasteur de Dakar : transformation du reporting financier (avec NKAC Audit & Conseil).",
        ],
    },
    {
        icon: <FaBuilding className="text-indigo-600 text-2xl" />,
        title: "Secteur privé",
        items: [
            "SCCT : due diligence pour une acquisition stratégique.",
            "Awa et Khassim : diagnostic, restructuration, digitalisation, mise en place de processus.",
            "SophieResto, SABAN AGRO, TIAK TIAK, TITUS MEDICAL, LAB’EQUIP : business plans et accompagnement stratégique.",
        ],
    },
    {
        icon: <FaHandsHelping className="text-indigo-600 text-2xl" />,
        title: "ONG & bailleurs",
        items: [
            "Teranga Gestion : manuel de procédures du projet E4Y.",
            "REPSFECO : manuels, protocoles et conventions dans 15 pays CEDEAO (projet ONUFEMMES).",
            "Urgence Écologique : rédaction de manuels de procédures.",
            "Appui à la structuration, digitalisation et mise en conformité de projets financés par FCDO, Mastercard Foundation, ONUFEMMES, Bill & Melinda Gates, etc.",
        ],
    },
];

const ReferencesSection: FC = () => {
    return (
        <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* SVG décoratif bleu */}
            <svg
                className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] opacity-10 animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
            >
                <circle cx="50" cy="50" r="45" stroke="#005A9C" strokeWidth="5" />
            </svg>
            <svg
                className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] opacity-10 animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M50 0 C77 0 100 23 100 50 C100 77 77 100 50 100 C23 100 0 77 0 50 C0 23 23 0 50 0 Z"
                    stroke="#005A9C"
                    strokeWidth="4"
                />
            </svg>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Références</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        À la croisée des secteurs public, privé et à but non lucratif, nous apportons des solutions concrètes à fort impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {references.map((ref, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {ref.icon}
                                <h3 className="text-xl font-semibold text-gray-800">{ref.title}</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                                {ref.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaCheckCircle className="text-blue-500 mt-1 text-sm shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Nos interventions couvrent tout le cycle de vie des organisations :
                        structuration, transformation digitale, levée de fonds, gouvernance, reporting, capacités…
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReferencesSection;
