"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRELOADER_DURATION = 800;
const FADE_DURATION = 400;

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const minLoadTime = setTimeout(() => {
            setIsLoading(false);
        }, PRELOADER_DURATION);

        const cleanup = setTimeout(() => {
            setShouldRender(false);
        }, PRELOADER_DURATION + FADE_DURATION);

        return () => {
            clearTimeout(minLoadTime);
            clearTimeout(cleanup);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FADE_DURATION / 1000, ease: "easeOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0a0a0a]"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center gap-8"
                    >
                        <div className="relative w-32 h-32">
                            <motion.span
                                className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10"
                            />
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-t-2 border-black dark:border-white"
                            />
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-black/40 dark:text-white/40 text-lg font-light tracking-[0.5em] uppercase"
                        >
                            MangaShift
                        </motion.h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
