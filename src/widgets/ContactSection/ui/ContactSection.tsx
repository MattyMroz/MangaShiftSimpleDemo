'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { Section } from '@/shared/ui/Section/Section';
import { SmartText } from '@/shared/ui/SmartText/SmartText';
import { Button } from '@/shared/ui/Button/Button';
import GlassSurface from '@/shared/ui/GlassSurface/GlassSurface';

const contactMethods = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: 'Email',
        value: 'mateuszmroz001@gmail.com',
        href: 'mailto:mateuszmroz001@gmail.com',
        isEmail: true
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        ),
        title: 'GitHub',
        value: 'github.com/MattyMroz',
        href: 'https://github.com/MattyMroz',
        isEmail: false
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        title: 'LinkedIn',
        value: 'linkedin.com/in/mattymroz',
        href: 'https://www.linkedin.com/in/mattymroz/',
        isEmail: false
    }
];

export const ContactSection = () => {
    const [copied, setCopied] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMobileDevice(isMobile);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText('mateuszmroz001@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <Section id="contact" title="Contact" gridCols={1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--section-gap-horizontal)] items-center w-full">

                {/* Text Column */}
                <motion.div
                    className="order-1 w-full flex flex-col items-center lg:items-start gap-[var(--section-gap-vertical)] text-center lg:text-left px-[var(--section-padding-x-mobile)] md:px-[var(--section-padding-x-tablet)] lg:pl-[var(--section-padding-x-desktop-sm)] lg:pr-[var(--section-padding-x-tablet)]"
                    initial={isMobileDevice ? { opacity: 0, x: -50 } : false}
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
                        Let&apos;s Connect
                    </motion.h3>
                    <motion.div
                        className="flex flex-col gap-[var(--card-gap)] max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <SmartText>
                            <p className="text-[length:var(--h3-font-size)] leading-relaxed text-[var(--text-primary)] opacity-90">
                                Have questions about MangaShift? Interested in collaboration or want to learn more about our technology?
                                <br /><br />
                                We&apos;d love to hear from you. Reach out through any of the channels listed, and we&apos;ll get back to you as soon as possible.
                            </p>
                        </SmartText>
                    </motion.div>
                    <a href="mailto:mateuszmroz001@gmail.com" className="mb-8 lg:mb-0">
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
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    Send Email
                                </span>
                            </Button>
                        </motion.div>
                    </a>
                </motion.div>

                {/* Contact Cards Column */}
                <div className="order-2 w-full flex flex-col gap-[var(--card-gap)] py-12 lg:py-16 px-[var(--section-padding-x-mobile)] md:px-[var(--section-padding-x-tablet)] lg:pl-[var(--section-padding-x-tablet)] lg:pr-[var(--section-padding-x-desktop-sm)]">
                    {contactMethods.map((method) => {
                        const isEmail = method.isEmail;
                        const Component = isEmail ? motion.div : motion.a;
                        const props = isEmail ? {
                            onClick: handleCopyEmail,
                            className: "group block cursor-pointer"
                        } : {
                            href: method.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group block"
                        };

                        return (
                            <Component
                                key={method.title}
                                {...props}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <GlassSurface
                                    width="100%"
                                    height="auto"
                                    borderRadius={20}
                                    borderWidth={0.07}
                                    brightness={50}
                                    opacity={0.5}
                                    blur={11}
                                    displace={0.5}
                                    backgroundOpacity={0.05}
                                    saturation={1}
                                    distortionScale={-180}
                                    redOffset={0}
                                    greenOffset={10}
                                    blueOffset={20}
                                    mixBlendMode="lighten"
                                    className="p-[var(--card-padding-mobile)] md:p-[var(--card-padding-desktop)] hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-full flex items-center justify-center">
                                        <div className="w-full max-w-[300px] flex items-center gap-6">
                                            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-[var(--text-primary)]">
                                                {method.icon}
                                            </div>
                                            <div className="flex flex-col gap-1 min-w-0 flex-1">
                                                <h4 className="text-[length:var(--h2-font-size)] font-bold text-[var(--text-primary)]">
                                                    {method.title}
                                                </h4>
                                                <SmartText>
                                                    <p className="text-[length:var(--normal-font-size)] text-[var(--text-secondary)] truncate">
                                                        {isEmail && copied ? 'Copied to clipboard!' : method.value}
                                                    </p>
                                                </SmartText>
                                            </div>
                                        </div>
                                    </div>
                                </GlassSurface>
                            </Component>
                        );
                    })}
                </div>

            </div>
        </Section>
    );
};
