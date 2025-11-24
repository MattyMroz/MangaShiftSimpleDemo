import { Section } from '@/shared/ui/Section/Section';
import TiltedCard from '@/shared/ui/TiltedCard/TiltedCard';
import { Button } from '@/shared/ui/Button/Button';

export const DemoSection = () => {
    return (
        <Section id="demo" title="Demo">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <TiltedCard
                        imageSrc="/images/chainsawman/RezeArc.webp"
                        altText="Chainsaw Man - Reze Arc Poster"
                        captionText="Chainsaw Man - Reze Arc"
                        containerHeight="500px"
                        containerWidth="400px"
                        imageHeight="500px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <div className="w-full h-full flex items-start justify-start p-6">
                                <p className="tilted-card-demo-text text-white font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                                    Colored Manga
                                </p>
                            </div>
                        }
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
                    <h3 className="text-[3rem] font-bold text-[var(--text-primary)] leading-tight">
                        Discover Reze&apos;s Story
                    </h3>
                    <p className="text-[1.8rem] leading-relaxed text-[var(--text-primary)] opacity-90 max-w-2xl">
                        Experience the Chainsaw Man: Reze Arc - Part 1 as a motion comic with AI-powered Polish dubbing and narration.
                        <br /><br />
                        Over 100 manga pages transformed into <br />an immersive animated experience.
                        <br /><br />
                        Discover a new dimension of storytelling where art comes alive.
                    </p>
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
                </div>
            </div>
        </Section>
    );
};
