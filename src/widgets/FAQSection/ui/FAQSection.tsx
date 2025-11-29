'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/shared/ui/Section/Section';
import { SmartText } from '@/shared/ui/SmartText/SmartText';

const faqs = [
    {
        question: 'What is MangaShift?',
        answer: 'MangaShift is an automated AI-powered system that transforms static manga pages into dynamic audiovisual adaptations. It analyzes manga structure, translates content, generates voice narration, and creates immersive motion comics.'
    },
    {
        question: 'How does the translation work?',
        answer: 'Our AI analyzes the manga panels, detects text in speech bubbles, and translates it to your preferred language while maintaining the original context and cultural nuances. The system supports multiple languages and adapts to manga-specific terminology.'
    },
    {
        question: 'Can I use MangaShift for my own manga?',
        answer: 'MangaShift is currently in development as a demonstration project. Once fully released, it will be available for creators and publishers who want to make their manga more accessible and engaging for global audiences.'
    },
    {
        question: 'What makes MangaShift different from regular manga readers?',
        answer: 'Unlike static readers, MangaShift creates a complete audiovisual experience with AI voice narration, image enhancement, and motion effects. It makes manga accessible to people with visual or motor impairments while offering an engaging new format for all readers.'
    },
    {
        question: 'Is the demo available now?',
        answer: 'Yes! You can watch the Chainsaw Man: Reze Arc demo showcasing over 100 pages transformed into an animated motion comic with Polish dubbing and narration. Check the Demo section above to experience it.'
    },
    {
        question: 'What technology powers MangaShift?',
        answer: 'MangaShift uses a combination of computer vision for panel detection, natural language processing for translation, AI voice synthesis for narration, and image processing algorithms for enhancement and animation effects.'
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq" title="FAQ" gridCols={1}>
            <div className="w-full max-w-[80rem] mx-auto px-6 md:px-12 mt-32">
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full rounded-[20px] border border-[var(--border-primary)] bg-[var(--bg-primary)]/50 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                                <motion.button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left py-10 px-15 cursor-pointer"
                                    whileTap={{ scale: 0.99 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-[length:var(--h2-font-size)] font-bold text-[var(--text-primary)] pr-4">
                                            {faq.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex-shrink-0"
                                        >
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
                                                className="text-[var(--text-primary)]"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-6 p-6 border-t border-[var(--border-primary)] mt-4">
                                                    <SmartText>
                                                        <p className="text-[length:var(--h3-font-size)] text-[var(--text-primary)] leading-relaxed font-[family-name:var(--font-inter)]">
                                                            {faq.answer}
                                                        </p>
                                                    </SmartText>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
