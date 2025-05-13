'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navLinks = [
        { href: '/', label: 'Accueil' },
        { href: '/a-propos', label: 'À propos' },
        { href: '/services', label: 'Services' },
        { href: '/programmes', label: 'Programmes' },
        { href: '/references', label: 'References' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const textColor = scrolled ? 'text-gray-800' : 'text-white'

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="Sabaly Consulting" width={160} height={40} priority />
                </Link>

                {/* Desktop Menu */}
                <nav className={`hidden md:flex items-center space-x-6 text-sm font-semibold transition-colors ${textColor}`}>
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`hover:text-orange-500 transition-colors pb-1 ${pathname === href ? 'text-orange-500 border-b-2 border-orange-500' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link href="#contact">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full ml-4">
                            Faire appel
                        </button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden transition-colors ${scrolled ? 'text-orange-500' : 'text-white'}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-4 flex flex-col space-y-4 text-gray-800 font-semibold">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`hover:text-orange-500 transition-colors ${pathname === href ? 'text-orange-500' : ''}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-full">
                            Faire appel
                        </button>
                    </Link>
                </div>
            </div>

            {/* Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/70  z-30 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </header>
    )
}

export default Navbar
