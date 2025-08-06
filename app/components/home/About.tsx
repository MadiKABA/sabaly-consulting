'use client'

import Image from 'next/image'
import { Lightbulb, Users, Globe2, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

// Animations Framer Motion
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
}

const AboutSection = () => {
    return (
        <section className="w-full py-20 bg-white overflow-hidden" id='about'>
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                {/* LEFT - Text Content */}
                <div>
                    <motion.h3
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="text-orange-500 uppercase tracking-[0.3em] font-semibold text-md mb-7"
                    >
                        À propos de Sabaly Consulting
                    </motion.h3>

                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="uppercase text-3xl md:text-4xl font-medium text-gray-700 relative inline-block mb-10 leading-tight tracking-wide"
                    >
                        Une histoire de<br />
                        <span className="inline-block mt-3">vision </span><br />
                        <span className="inline-block mt-3">d&apos;engagement </span><br />
                        <span className="inline-block mt-3 mb-5">et de rigueur </span>
                        <span className="absolute left-0 -bottom-2 w-28 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full" />
                    </motion.h2>

                    {/* Icon sections */}
                    <div className="space-y-6">
                        {[
                            {
                                icon: <Lightbulb size={28} />,
                                text: (
                                    <>
                                        Fondée par <strong>Merry D. Niang</strong>, experte-comptable certifiée (CPA), Sabaly Consulting accompagne les <strong>PMEs</strong>, <strong>start-ups</strong> et <strong>ONG africaines</strong> dans leur structuration et leur croissance.
                                    </>
                                ),
                            },
                            {
                                icon: <Users size={28} />,
                                text: (
                                    <>
                                        Notre approche allie <strong>exigence professionnelle</strong>, <strong>proximité humaine</strong> et <strong>compréhension des réalités locales</strong>.
                                        Notre ambition : créer un pont entre <strong>vision stratégique</strong> et <strong>capacité opérationnelle</strong> pour transformer les ambitions en <strong>résultats durables</strong>.
                                    </>
                                ),
                            },
                            {
                                icon: <Globe2 size={28} />,
                                text: (
                                    <>
                                        Nous intervenons auprès d’<strong>entrepreneurs</strong>, de <strong>ministères</strong>, d’<strong>instituts de recherche</strong> ou de <strong>bailleurs internationaux</strong>, toujours avec la même rigueur, le même sens du détail, et la même passion.
                                    </>
                                ),
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index + 2}
                                className="flex items-start space-x-4"
                            >
                                <div className="text-orange-500 mt-1">{item.icon}</div>
                                <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT - Founder Image & Modern Quote */}
                <div className="relative">
                    {/* Founder image with parallax on hover */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={5}
                        whileHover={{ scale: 1.03, rotate: 0.5, y: -5 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                        >
    <Image
  src="/images/photodirectrice.jpeg"
  alt="Merry D. Niang - Fondatrice"
  width={500}
  height={650}
  className="object-contain rounded-3xl shadow-xl bg-white"
  layout="responsive"
/>


                          
                        </motion.div>
                    </motion.div>

                    {/* Quote box */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={6}
                        className="mt-6 relative border-l-4 border-orange-500 rounded-xl p-6 shadow-lg bg-white"
                    >
                        <Quote className="absolute top-4 right-4 text-orange-300" size={28} />
                        <p className="text-gray-700 italic text-base leading-relaxed">
                            “Chaque organisation mérite des fondations solides pour réaliser sa vision. Sabaly Consulting est née de cette conviction.”
                        </p>
                        <span className="block mt-4 text-orange-600 font-bold text-sm">
                            – Merry D. Niang
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection