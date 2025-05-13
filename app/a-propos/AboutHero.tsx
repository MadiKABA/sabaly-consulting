export default function AboutHero() {
    return (
        <section className="relative bg-slate-900 text-white py-24 px-6 text-center overflow-hidden">
            <div className="max-w-3xl mx-auto z-10 relative">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_#005A9C]">
                    Donner vie à vos ambitions avec rigueur et impact.
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8">
                    Merry D. Niang, experte-comptable & fondatrice de Sabaly Consulting, accompagne les structures africaines vers une gestion solide et durable.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="bg-[#005A9C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0073C1] transition"
                    >
                        Travailler avec nous
                    </a>
                    <a
                        href="#mission"
                        className="border border-[#005A9C] text-[#005A9C] px-6 py-3 rounded-full font-semibold hover:bg-[#005A9C] hover:text-white transition"
                    >
                        En savoir plus
                    </a>
                </div>
            </div>

            {/* Effet néon personnalisé */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#005A9C]/20 via-transparent to-purple-500/10 blur-3xl opacity-40 pointer-events-none"></div>
        </section>
    );
}
