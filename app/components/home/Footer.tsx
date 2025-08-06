'use client'

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className=" bg-[#0B1E3A] text-white pt-16 pb-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Présentation */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">Sabaly Consulting</h2>
                    <div className="w-16 h-1 bg-orange-500 mb-4"></div>
                    <p className="text-sm text-gray-300 mb-4">
                        Cabinet de conseil sénégalais engagé aux côtés des PMEs, startups et ONG pour construire des structures solides, efficaces et résilientes.
                    </p>
                    <div className="flex space-x-3">
                        <a href="https://www.facebook.com/profile.php?id=61579309882904&mibextid=wwXIfr&rdid=Fp3xRV7av4Av6vZ7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FaF9wBWeo%2F%3Fmibextid%3DwwXIfr#" className="p-2 rounded-full border border-blue-500 transition hover:scale-110">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/company/sabaly-consulting/" className="p-2 rounded-full border border-blue-500 transition hover:scale-110">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-blue-500 transition hover:scale-110">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/sabaly_consulting?igsh=eXQ0bDhya216bHJ1&utm_source=qr" className="p-2 rounded-full border border-blue-500 transition hover:scale-110">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Navigation</h2>
                    <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-orange-400 transition">Accueil</a></li>
                        <li><a href="#about" className="hover:text-orange-400 transition">À propos</a></li>
                        <li><a href="#services" className="hover:text-orange-400 transition">Services</a></li>
                        <li><a href="#programmes" className="hover:text-orange-400 transition">programmes</a></li>
                        <li><a href="#references" className="hover:text-orange-400 transition">Nos Partenaires</a></li>
                        <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Services</h2>
                    <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Conseil stratégique</li>
                        <li>Accompagnement PME</li>
                        <li>Formation</li>
                        <li>Coaching</li>
                        <li>Management de projets</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                    <ul className="text-sm text-gray-300 space-y-3">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 text-orange-400" />
                            <span>
                                Immeuble Elysée, Cité Keur Gorgui, 4e étage<br />Dakar, Sénégal
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-orange-400" />
                            +221 78 638 29 52
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-orange-400" />
                            info@sabalyconsulting.com
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Sabaly Consulting. Tous droits réservés.
            </div>
        </footer>
    )
}

export default Footer
