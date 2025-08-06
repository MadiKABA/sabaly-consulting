"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
    {
        title: "Stratégie & Croissance",
        items: [
            "Plans stratégiques pluriannuels",
            "Business models & plans d’affaires",
            "Fusions, acquisitions, due diligence",
            "Levée de fonds",
        ],
    },
    {
        title: "Conseil Financier & Révision",
        items: [
            "Restructuration financière",
            "Révision comptable, assistance audit",
            "Retraitement d'états financiers (SYSCOA/IFRS)",
        ],
    },
    {
        title: "Contrôle de Gestion",
        items: [
            "Budgets, forecasts, reporting",
            "Suivi de la performance",
            "Tableaux de bord personnalisés",
        ],
    },
    {
        title: "Comptabilité",
        items: [
            "Tenue comptable (SYSCOA, IFRS, US GAAP, SYCEBNL)",
            "Comptabilité analytique",
            "Externalisation partielle ou complète",
        ],
    },
    {
        title: "Audit & Organisation",
        items: [
            "Diagnostic organisationnel",
            "Audit de performance",
            "Cartographie des risques",
        ],
    },
    {
        title: "Digitalisation & Process",
        items: [
            "Mise en place d’ERP",
            "Manuels de procédures",
            "Gestion du changement",
        ],
    },
    {
        title: "Support Opérationnel",
        items: [
            "Mise à disposition de personnel (CFO, RH, admin)",
            "Gestion paie, achats, subventions",
            "Accompagnement post-création et passage à l’échelle",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-12 overflow-hidden" id="services">
            {/* SVG deco top-left */}
            <svg
                className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] opacity-10 animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
            >
                <circle cx="50" cy="50" r="45" stroke="#005A9C" strokeWidth="5" />
            </svg>

            {/* SVG deco bottom-right */}
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

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-[#005A9C] mb-4"
                >
                    Nos Services
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-slate-600 max-w-3xl mx-auto mb-12"
                >
                    Des services intégrés pour répondre à tous vos défis de structuration
                    et de performance.
                </motion.p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-lg rounded-xl p-6 text-left border border-slate-200 hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-[#005A9C] mb-4">
                                {service.title}
                            </h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                {service.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-[#005A9C] mt-[2px]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
