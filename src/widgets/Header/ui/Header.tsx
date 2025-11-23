"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Hamburger } from "@/shared/ui/Hamburger/Hamburger";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => document.body.classList.remove("no-scroll");
    }, [isOpen]);

    // Handle resize - close menu on any resize
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

    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        if (isOpen) {
            setIsOpen(false);
        }

        // Smooth scroll to section
        const targetId = href.replace('/#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = 100; // Approximate header height
            const targetOffset = targetElement.offsetTop;
            const scrollTo = targetOffset - headerHeight;

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "Demo", href: "/#demo" },
        { name: "Updates", href: "/#updates" },
        { name: "About Us", href: "/#about" },
        { name: "Contact Us", href: "/#contact" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <>
            <header
                className={`header-shell fixed top-3 left-1/2 -translate-x-1/2 z-[1000] w-[80%] max-w-7xl rounded-full px-4 py-2 md:px-6 transition-all duration-300 ${isScrolled ? 'header--scrolled' : ''}`}
            >
                <div className="nav flex items-center justify-between h-11 md:h-12">
                    {/* Logo - zawsze widoczne */}
                    <Link href="/" className="nav__logo flex items-center shrink-0 pl-6 md:pl-10 text-[var(--text-primary)]">
                        <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] bg-clip-text text-transparent tracking-tight whitespace-nowrap">
                            MangaShift
                        </span>
                    </Link>

                    {/* Desktop Navigation - zawsze widoczna na desktop */}
                    <nav className="hidden lg:flex items-center justify-center lg:flex-1">
                        <ul className="nav__list flex items-center gap-2 xl:gap-8 list-none m-0 p-0">
                            {navLinks.map((link) => (
                                <li key={link.name} className="nav__item shrink-0">
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleNavLinkClick(e, link.href)}
                                        className="nav__link navlink relative inline-block py-2 px-3 text-sm font-semibold whitespace-nowrap transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3 shrink-0 pr-2 md:pr-4 text-[var(--icon-primary)]">
                        {/* ThemeSwitcher - tylko na desktop */}
                        <div className="hidden lg:block">
                            <ThemeSwitcher />
                        </div>
                        {/* Hamburger - tylko na mobile */}
                        <div className="lg:hidden">
                            <Hamburger isOpen={isOpen} toggle={toggleMenu} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-navbar fixed inset-0 z-[999] lg:hidden pt-20"
                    >
                        <div className="flex flex-col items-center justify-start h-full px-6 py-8 overflow-y-auto">
                            <nav className="flex flex-col items-center gap-5 w-full max-w-md mb-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 + 0.1 }}
                                        className="w-full text-center"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleNavLinkClick(e, link.href)}
                                            className="navlink block py-4 text-3xl font-bold transition-colors text-[var(--text-primary)]"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-auto mb-8 flex justify-center"
                            >
                                <ThemeSwitcher />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
