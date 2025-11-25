'use client';

import { Section } from '@/shared/ui/Section/Section';
import CardSwap, { Card } from '@/shared/ui/CardSwap/CardSwap';

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
        <Section id="about" title="About">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32 items-center w-full">
                <div className="order-1 w-full flex flex-col items-center xl:items-start gap-8 text-center xl:text-left px-4 xl:px-8">
                    <h3 className="text-[3rem] font-bold text-[var(--text-primary)] leading-tight">
                        What is MangaShift?
                    </h3>
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <p className="text-[1.8rem] leading-relaxed text-[var(--text-primary)] opacity-90">
                            MangaShift is an automated system that transforms static manga pages into dynamic, 
                            accessible audiovisual adaptations. Using AI-powered analysis, translation, 
                            voice synthesis, and image enhancement, we create immersive motion comics 
                            that bring stories to life.
                        </p>
                        <p className="text-[1.8rem] leading-relaxed text-[var(--text-primary)] opacity-90">
                            Our goal is to make manga accessible to everyone — especially those with visual 
                            or motor impairments — while offering a new dimension of storytelling for all readers.
                        </p>
                    </div>
                </div>

                <div className="order-2 w-full flex justify-center items-center min-h-[400px] xl:min-h-[450px] py-150 xl:py-100 px-4 xl:px-8">
                    <CardSwap
                        cardDistance={40}
                        verticalDistance={50}
                        delay={4000}
                        pauseOnHover={true}
                        width={400}
                        height={260}
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
                                        <p className="text-[1.4rem] text-[var(--text-primary)] opacity-80 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </Section>
    );
};
