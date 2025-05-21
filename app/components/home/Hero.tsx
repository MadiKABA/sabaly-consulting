'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const animatedWords = ['transformation', 'stratégie', 'formation']

const Hero = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % animatedWords.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-[100vh] w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/hero-bg.jpg')", // Remplace ce chemin par ton image
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950 opacity-90"></div>
            </div>

            {/* Content aligned with navbar spacing */}
            <div className="relative z-10 flex items-center justify-start h-full">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <div className="text-white max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Boostez votre performance
                            <br /> avec <span className="text-blue-400">Sabaly Consulting</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-200">
                            Nous vous accompagnons dans vos projets de{' '}
                            <span
                                key={index}
                                className="text-orange-400 font-semibold animate-fade-in transition duration-500"
                            >
                                {animatedWords[index]}
                            </span>
                            .
                        </p>
                        <Link href="#contact">
                            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition">
                                Contactez-nous
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
