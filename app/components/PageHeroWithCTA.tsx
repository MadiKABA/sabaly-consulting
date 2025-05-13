import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
  imageSrc: string;
};

export default function PageHeroWithCTA({
  title,
  subtitle,
  ctaLabel,
  ctaLink,
  imageSrc,
}: HeroProps) {
  return (
    <section
      className="relative bg-slate-900 text-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Overlay & Neon Effects */}
      <div className="absolute inset-0 z-0">
        {/* Neon light pulses */}
        <div className="absolute top-[-30%] left-[-30%] w-[80vw] h-[80vw] bg-[#005A9C] rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-purple-700 rounded-full opacity-20 blur-2xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-slate-900 to-[#002B55] opacity-90" />

        {/* Decorative SVG pattern top-left */}
        <svg
          className="absolute top-0 left-0 w-[200px] h-[200px] opacity-10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>

        {/* Decorative SVG pattern bottom-right */}
        <svg
          className="absolute bottom-0 right-0 w-[200px] h-[200px] opacity-10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <pattern id="lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#lines)" />
        </svg>
      </div>

      {/* Centered content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_12px_#005A9C]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8">{subtitle}</p>
        <Link
          href={ctaLink}
          className="inline-block px-6 py-3 bg-[#005A9C] text-white font-medium rounded-full hover:bg-[#0071cc] transition shadow-lg"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
