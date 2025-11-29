'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { Section } from '@/shared/ui/Section/Section';
import TiltedCard from '@/shared/ui/TiltedCard/TiltedCard';
import { Button } from '@/shared/ui/Button/Button';
import { SmartText } from '@/shared/ui/SmartText/SmartText';

export const DemoSection = () => {
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMobileDevice(isMobile);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Section id="demo" title="Demo" gridCols={1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--section-gap-horizontal)] items-center w-full">
                <motion.div
                    className="order-2 lg:order-1 w-full flex justify-center py-32 lg:py-16 px-[var(--section-padding-x-tablet)] lg:pl-[var(--section-padding-x-desktop-sm)] lg:pr-[var(--section-padding-x-tablet)]"
                    initial={isMobileDevice ? { opacity: 0, scale: 0.9 } : false}
                    whileInView={isMobileDevice ? { opacity: 1, scale: 1 } : undefined}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-full max-w-[40rem]">
                        <TiltedCard
                            imageSrc={`${process.env.NODE_ENV === 'production' ? '/MangaShiftSimpleDemo' : ''}/images/chainsawman/RezeArc.webp`}
                            altText="Chainsaw Man - Reze Arc Poster"
                            captionText="Chainsaw Man - Reze Arc"
                            containerHeight="min(500px, 80vh)"
                            containerWidth="100%"
                            imageHeight="min(500px, 80vh)"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="w-full h-full flex items-start justify-start p-8">
                                    <div className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]">
                                        <SmartText>
                                            <p className="text-white font-bold text-lg tracking-wide">
                                                Colored Manga
                                            </p>
                                        </SmartText>
                                    </div>
                                </div>
                            }
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 dark:bg-black/40 blur-xl rounded-full" />
                    </div>
                </motion.div>
                <motion.div
                    className="order-1 lg:order-2 w-full flex flex-col items-center lg:items-start gap-[var(--section-gap-vertical)] text-center lg:text-left px-[var(--section-padding-x-tablet)] lg:pl-[var(--section-padding-x-tablet)] lg:pr-[var(--section-padding-x-desktop-sm)]"
                    initial={isMobileDevice ? { opacity: 0, x: 50 } : false}
                    whileInView={isMobileDevice ? { opacity: 1, x: 0 } : undefined}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h3
                        className="text-[length:var(--h1-font-size)] font-bold text-[var(--text-primary)] leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Discover Reze&apos;s Story
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <SmartText>
                            <p className="text-[length:var(--h3-font-size)] leading-relaxed text-[var(--text-primary)] opacity-90 max-w-2xl">
                                Experience the Chainsaw Man: Reze Arc — Part 1 as a motion comic with AI-powered Polish dubbing and narration.
                                <br /><br />
                                Over 100 manga pages transformed into an immersive animated experience.
                                <br /><br />
                                Discover a new dimension of storytelling where art comes alive.
                            </p>
                        </SmartText>
                    </motion.div>
                    <Link href="/chainsawman">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button variant="ghost">
                                <span className="flex items-center gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-8 h-8"
                                    >
                                        <circle cx="12" cy="12" r="9" />
                                        <polygon points="11 9 16 12 11 15 11 9" fill="currentColor" />
                                    </svg>
                                    Watch Demo
                                </span>
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </Section>
    );
};
