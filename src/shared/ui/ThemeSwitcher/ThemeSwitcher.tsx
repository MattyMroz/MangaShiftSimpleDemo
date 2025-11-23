"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const THEME_STORAGE_KEY = "theme";
type ThemeMode = "light" | "dark";

const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    if (mode === "dark") {
        root.setAttribute("data-theme", "dark");
        root.style.colorScheme = "dark";
    } else {
        root.removeAttribute("data-theme");
        root.style.colorScheme = "light";
    }
};

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<ThemeMode>("light");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const saved = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
        const prefersDark = mediaQuery.matches;
        const initial = saved ?? (prefersDark ? "dark" : "light");

        applyTheme(initial);

        const syncTheme = () => {
            setTheme(initial);
            setMounted(true);
        };

        if (typeof window.requestAnimationFrame === "function") {
            window.requestAnimationFrame(syncTheme);
        } else {
            window.setTimeout(syncTheme, 0);
        }

        const handlePreferenceChange = (event: MediaQueryListEvent) => {
            if (window.localStorage.getItem(THEME_STORAGE_KEY)) {
                return;
            }
            const next = event.matches ? "dark" : "light";
            setTheme(next);
            applyTheme(next);
        };

        mediaQuery.addEventListener("change", handlePreferenceChange);

        return () => {
            mediaQuery.removeEventListener("change", handlePreferenceChange);
        };
    }, []);

    useEffect(() => {
        if (!mounted) return;
        applyTheme(theme);
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const iconVariants = {
        initial: { scale: 0, rotate: -180 },
        animate: { scale: 1, rotate: 0 },
        exit: { scale: 0, rotate: 180 }
    };

    if (!mounted) {
        return <div className="w-16 h-16" aria-hidden="true" />;
    }

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {theme === "light" ? (
                <motion.svg
                    key="sun"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </motion.svg>
            ) : (
                <motion.svg
                    key="moon"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </motion.svg>
            )}
        </motion.button>
    );
};
