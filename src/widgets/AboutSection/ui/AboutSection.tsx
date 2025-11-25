'use client';

import { Section } from '@/shared/ui/Section/Section';
import CardSwap, { Card } from '@/shared/ui/CardSwap/CardSwap';
import { SmartText } from '@/shared/ui/SmartText/SmartText';
import { Button } from '@/shared/ui/Button/Button';

const milestones = [
    {
        number: '01',
        title: 'Intelligent Analysis',
        description: 'AI-powered module that understands manga structure, detects panels, speech bubbles, and extracts text with proper reading order.',
        status: 'In Progress'
    },
    {
        number: '02',
        title: 'Content Enhancement',
        description: 'Translation to any language, AI voice synthesis for narration and dubbing, plus image upscaling for crystal-clear visuals.',
        status: 'Planned'
    },
    {
        number: '03',
        title: 'Prototype Development',
        description: 'First functional prototype with basic interface, capable of creating complete audiovisual manga adaptations.',
        status: 'Planned'
    },
    {
        number: '04',
        title: 'Final Product',
        description: 'Polished, optimized system with comprehensive testing, documentation, and production-ready deployment.',
        status: 'Q4 2026'
    }
];

export const AboutSection = () => {
    return (
        <Section id="about" title="About" gridCols={1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center w-full">
                <div className="order-1 w-full flex flex-col items-center lg:items-start gap-8 text-center lg:text-left px-12 lg:pl-24 lg:pr-12">
                    <h3 className="text-[length:var(--h1-font-size)] font-bold text-[var(--text-primary)] leading-tight">
                        What is MangaShift?
                    </h3>
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <SmartText>
                            <p className="text-[length:var(--h3-font-size)] leading-relaxed text-[var(--text-primary)] opacity-90">
                                MangaShift is an automated system that transforms static manga pages into dynamic,
                                accessible audiovisual adaptations.
                                <br /><br />
                                Using AI-powered analysis, translation,
                                voice synthesis, and image enhancement, we create immersive motion comics
                                that bring stories
                                to life.
                            </p>
                            <p className="text-[length:var(--h3-font-size)] leading-relaxed text-[var(--text-primary)] opacity-90">
                                Our goal is to make manga accessible
                                to everyone — especially those with visual
                                or motor impairments — while offering a new dimension of storytelling for all readers.
                            </p>
                        </SmartText>
                    </div>
                    <a href="https://www.youtube.com/watch?v=wZTBQfYB-qU" target="_blank" rel="noopener noreferrer" className="mb-32">
                        <Button variant="primary">
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
                                Watch Video
                            </span>
                        </Button>
                    </a>
                </div>

                <div className="order-2 w-full flex justify-center items-center min-h-[400px] lg:min-h-[450px] py-96 lg:pt-64 lg:pb-144 px-12 lg:pl-12 lg:pr-24">
                    <div className="w-full max-w-[40rem]">
                        <CardSwap
                            cardDistance={40}
                            verticalDistance={50}
                            delay={4000}
                            pauseOnHover={true}
                            width="100%"
                            height="260px"
                            skewAmount={3}
                            easing="elastic"
                        >
                            {milestones.map((milestone) => (
                                <Card key={milestone.number}>
                                    <div className="p-8 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="text-[4rem] font-black text-[var(--accent-primary)] opacity-60">
                                                    {milestone.number}
                                                </span>
                                                <span className="text-[1.2rem] font-semibold px-4 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)]">
                                                    {milestone.status}
                                                </span>
                                            </div>
                                            <h4 className="text-[2rem] font-bold text-[var(--text-primary)] mb-3">
                                                {milestone.title}
                                            </h4>
                                            <SmartText>
                                                <p className="text-[1.4rem] text-[var(--text-primary)] opacity-80 leading-relaxed">
                                                    {milestone.description}
                                                </p>
                                            </SmartText>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </CardSwap>
                    </div>
                </div>
            </div>
        </Section>
    );
};
