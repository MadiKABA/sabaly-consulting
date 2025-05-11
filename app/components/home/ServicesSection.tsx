'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    Compass,
    BarChart2,
    LayoutDashboard,
    BookOpenText,
} from 'lucide-react'

const services = [
    {
        title: 'Stratégie & Croissance',
        icon: <Compass size={32} />,
        description:
            'Plans stratégiques, business models, fusions/acquisitions, levées de fonds',
    },
    {
        title: 'Conseil Financier & Révision',
        icon: <BarChart2 size={32} />,
        description:
            'Restructuration, révision comptable, retraitements SYSCOA/IFRS',
    },
    {
        title: 'Contrôle de Gestion',
        icon: <LayoutDashboard size={32} />,
        description:
            'Budgets, reporting, tableaux de bord personnalisés de performance',
    },
    {
        title: 'Comptabilité',
        icon: <BookOpenText size={32} />,
        description:
            'Tenue comptable SYSCOA/IFRS/US GAAP, comptabilité analytique, externalisation',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
}

const ServicesSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#0B1E3A] text-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                >
                    Nos Métiers
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={1}
                    className="text-gray-300 max-w-2xl mx-auto mb-14"
                >
                    Des services intégrés pour relever vos défis de structuration et de performance.
                </motion.p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index + 2}
                            className="bg-[#122947] border border-blue-700 p-6 rounded-2xl shadow-[0_0_15px_rgba(0,112,243,0.3)] hover:shadow-[0_0_25px_rgba(0,112,243,0.6)] hover:scale-[1.03] transition-all duration-300"
                        >
                            <div className="text-blue-400 mb-4 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={services.length + 3}
                    className="mt-12"
                >
                    <Link
                        href="/nos-services"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(0,112,243,0.4)] hover:bg-blue-700 transition-all duration-300"
                    >
                        Voir plus
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesSection
