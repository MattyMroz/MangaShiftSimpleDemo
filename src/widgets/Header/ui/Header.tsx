"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Hamburger } from "@/shared/ui/Hamburger/Hamburger";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import GlassSurface from "@/shared/ui/GlassSurface/GlassSurface";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Nasłuchiwanie scrolla dla efektu tła
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Blokowanie scrollowania body gdy menu mobilne jest otwarte
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => document.body.classList.remove("no-scroll");
    }, [isOpen]);

    // Zamykanie menu przy zmianie rozmiaru okna
    useEffect(() => {
        const handleResize = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Obsługa smooth scroll
    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        if (isOpen) {
            setIsOpen(false);
        }

        const targetId = href.replace('/', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const elementTop = targetElement.offsetTop;
            const elementHeight = targetElement.offsetHeight;
            const windowHeight = window.innerHeight;

            // Oblicz pozycję aby wyśrodkować sekcję
            const scrollTo = elementTop - (windowHeight / 2) + (elementHeight / 2);

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        } else if (targetId === 'home' || href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Lista linków (bez "Home" - logo działa jako link do home)
    const navLinks = [
        { name: "Demo", href: "/demo" },
        { name: "Updates", href: "/updates" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full h-[15rem] z-[1030] flex items-center justify-center px-4 md:px-12">
                <GlassSurface
                    width="100%"
                    height="9rem"
                    borderRadius={50}
                    borderWidth={0.07}
                    brightness={50}
                    opacity={0.93}
                    blur={11}
                    displace={0.5}
                    backgroundOpacity={0.1}
                    saturation={1}
                    distortionScale={-180}
                    redOffset={0}
                    greenOffset={10}
                    blueOffset={20}
                    mixBlendMode="lighten"
                    className={`max-w-[140rem] px-6 md:px-16 transition-all duration-300 ${isScrolled ? 'shadow-[var(--shadow-lg)]' : ''}`}
                    style={{ boxShadow: 'none' }}
                >

                    {/* Dodano 'relative', aby elementy absolute pozycjonowały się względem nav */}
                    <nav className="relative flex items-center justify-between w-full h-full">

                        {/* Logo - Działa teraz jak Home */}
                        <Link
                            href="/home"
                            onClick={(e) => handleNavLinkClick(e, "/home")}
                            className="z-[1030] whitespace-nowrap pl-4 cursor-pointer"
                        >
                            <span className="text-[2.8rem] font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent tracking-tight">
                                MangaShift
                            </span>
                        </Link>

                        {/* Desktop Navigation - Wyśrodkowana absolutnie */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                            <ul className="flex items-center gap-12 list-none">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleNavLinkClick(e, link.href)}
                                            className="nav-link relative inline-block py-2 text-[2.5rem] font-semibold text-[var(--text-primary)] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text transition-all duration-300 hover:text-transparent"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-8 z-[1030]">
                            {/* Theme Toggle - Desktop */}
                            <div className="hidden lg:flex items-center justify-center">
                                <ThemeSwitcher />
                            </div>
                            {/* Hamburger - Mobile */}
                            <div className="lg:hidden">
                                <Hamburger isOpen={isOpen} toggle={toggleMenu} />
                            </div>
                        </div>
                    </nav>
                </GlassSurface>
            </header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[1020] bg-[var(--bg-primary)] pt-[18rem] px-12 pb-12 overflow-y-auto"
                    >
                        <ul className="flex flex-col items-center gap-6 mb-2 list-none">
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Link
                                    href="/home"
                                    onClick={(e) => handleNavLinkClick(e, "/home")}
                                    className="block text-[2.8rem] font-bold text-[var(--text-primary)] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text transition-all duration-300 hover:text-transparent"
                                >
                                    Home
                                </Link>
                            </motion.li>

                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 + 0.15 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleNavLinkClick(e, link.href)}
                                        className="block text-[2.8rem] font-bold text-[var(--text-primary)] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text transition-all duration-300 hover:text-transparent"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex justify-center mt-auto"
                        >
                            <ThemeSwitcher />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};