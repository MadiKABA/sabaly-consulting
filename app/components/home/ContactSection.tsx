'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ContactSection = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true })

    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Map & adresse */}
                <div id='contact' className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                        className="w-full h-96"
                        src="https://www.google.com/maps?q=Immeuble+Elysée,+Cité+Keur+Gorgui,+Dakar,+Sénégal&output=embed"
                        loading="lazy"
                    ></iframe>
                    <div className="p-4 bg-gray-50 border-t text-sm text-gray-700">
                        <p className="font-semibold">Notre adresse</p>
                        <p>Immeuble Elysée, Cité Keur Gorgui, 4e étage</p>
                        <p>Dakar, Sénégal</p>
                    </div>
                </div>

                {/* Formulaire */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white shadow-sm p-6 rounded-lg"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">📬 Contactez-nous</h2>
                    <form className="space-y-6">
                        {/* Nom et email */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-transparent border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors duration-300 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-transparent border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors duration-300 py-2"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-transparent border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors duration-300 py-2 resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Bouton */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className=" bg-[#0B1E3A] hover:bg-[#007bbd] text-white px-6 py-3 rounded-full transition duration-300"
                        >
                            Envoyer le message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default ContactSection
