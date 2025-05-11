'use client'

import { motion } from 'framer-motion'
import { Star, Eye } from 'lucide-react'

const Card = ({
    title,
    icon,
    content,
    borderColor,
    lineColor,
}: {
    title: string
    icon: React.ReactNode
    content: string
    borderColor: string
    lineColor: string
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative bg-white rounded-2xl p-10 pl-8 shadow-xl border-l-8 ${borderColor} backdrop-blur-sm overflow-hidden`}
        >
            {/* Spinning Star */}
            <div className="absolute -top-6 -right-6 w-24 h-24 animate-spin-slow opacity-30">
                <Star className="text-yellow-400 w-full h-full" />
            </div>

            <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{icon}</div>
                <div>
                    <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
                    <div className={`h-1 w-12 mt-2 rounded-full ${lineColor}`} />
                </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed tracking-wide">{content}</p>
        </motion.div>
    )
}

const MissionVisionSection = () => {
    return (
        <section
            className="relative w-full py-20 overflow-hidden m-0"
            style={{
                background: 'linear-gradient(135deg, #f9fbfd 0%, #eef4fa 100%)',
            }}
        >
            {/* Disques décoratifs */}
            <div className="absolute top-10 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-2xl animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100 rounded-full opacity-30 blur-3xl animate-pulse-slow" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Card
                        title="Notre Mission"
                        icon={<span>🎯</span>}
                        content="Fournir des solutions stratégiques, financières et opérationnelles personnalisées, pour aider les organisations à renforcer leur efficacité, sécuriser leurs financements et créer un impact durable."
                        borderColor="border-orange-500"
                        lineColor="bg-orange-500"
                    />
                    <Card
                        title="Notre Vision"
                        icon={<Eye className="w-10 h-10 text-blue-900" />}
                        content="Être un cabinet de référence en Afrique pour la structuration, la croissance et la professionnalisation des organisations à fort potentiel d’impact."
                        borderColor="border-blue-900"
                        lineColor="bg-blue-900"
                    />
                </div>
            </div>
        </section>
    )
}

export default MissionVisionSection
