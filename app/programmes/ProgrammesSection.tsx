"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const programmes = [
  {
    title: "Starter Pack de l’Entrepreneur",
    tagline:
      "Un tremplin stratégique pour lancer et structurer votre projet entrepreneurial.",
    audience: [
      "Les entrepreneurs qui veulent formaliser leur activité",
      "Les TPE souhaitant passer à l’échelle",
      "Les porteurs de projet en recherche de crédibilité",
    ],
    highlights: [
      "Diagnostic de votre projet ou de votre idée",
      "Structuration juridique (choix de la forme, enregistrement, etc.)",
      "Élaboration du business model et étude de marché",
      "Construction d’un plan d’affaires bancaire et réaliste",
      "Coaching stratégique et financier",
      "Préparation au pitch investisseur / institution",
      "Accès à notre réseau de partenaires et financeurs",
      "Suivi post-création",
    ]
    
  },
  {
    title: "Non-Profit Growth Lab",
    tagline:
      "Un accélérateur pour les organisations à but non lucratif qui veulent structurer, grandir et impacter.",
    audience: [
      "Les ONG en structuration ou en croissance",
      "Les associations en recherche de financement",
      "Les projets financés par des bailleurs ou en phase de renouvellement",
    ],
    highlights: [
      "Diagnostic organisationnel approfondi",
      "Mise en place ou mise à jour des manuels de procédures",
      "Structuration de la gouvernance et de la gestion financière",
      "Appui à la gestion de subventions et à la conformité bailleurs",
      "Accompagnement à la rédaction de propositions et levée de fonds",
      "Coaching des équipes de direction",
      "Digitalisation des processus (ERP, suivi budgétaire, etc.)",
    ]
  },
];

export default function ProgrammesSection() {
  return (
    <section className="relative py-24 bg-gray-100 text-gray-800 overflow-hidden" id="programmes">
      {/* SVG décoratifs */}
      <div className="absolute top-0 left-0 z-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#636652"
            d="M44.8,-61.4C56.5,-54.8,64.6,-42.3,69.7,-29.2C74.9,-16.2,77.1,-2.6,73.1,9.2C69.1,21,58.9,30.9,48,40.8C37.1,50.7,25.6,60.6,11.8,66.2C-1.9,71.8,-17.8,73,-33.8,68.4C-49.8,63.7,-65.9,53.3,-70.3,39.3C-74.8,25.4,-67.6,7.9,-64.3,-9.8C-61,-27.6,-61.5,-45.5,-52.5,-53.8C-43.6,-62.2,-25.1,-61.1,-8.5,-58.6C8.2,-56.1,16.3,-52.1,44.8,-61.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#22C55E"
            d="M38.1,-61.8C48.4,-54.5,55.4,-43.1,61.2,-31.1C66.9,-19,71.4,-6.3,71.1,6.6C70.8,19.4,65.8,32.4,57.2,41.4C48.5,50.4,36.2,55.4,23.9,61.5C11.7,67.6,-0.7,74.7,-12.6,73.6C-24.5,72.6,-36,63.5,-46.3,53C-56.6,42.6,-65.6,30.8,-70.5,17.2C-75.4,3.5,-76.2,-12,-70.4,-24.7C-64.5,-37.4,-52,-48.2,-38.7,-54.5C-25.4,-60.9,-12.7,-62.7,0.8,-64C14.2,-65.3,28.4,-66.1,38.1,-61.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          NOS PROGRAMMES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programmes.map((prog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >


              <h3 className="text-2xl font-bold mb-2 text-gray-900">{prog.title}</h3>
              <p className="mb-4 text-base text-gray-700 leading-relaxed">{prog.tagline}</p>

              <ul className="space-y-1 text-gray-700 mb-4">
                {prog.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#005A9C] mt-[2px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                <p className="font-semibold text-gray-800">🎯 Idéal pour :</p>
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  {prog.audience.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* <p className="italic text-gray-500">{prog.examples}</p> */}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
