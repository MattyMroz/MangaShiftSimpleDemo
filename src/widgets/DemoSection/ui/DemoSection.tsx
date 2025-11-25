import { Section } from '@/shared/ui/Section/Section';
import TiltedCard from '@/shared/ui/TiltedCard/TiltedCard';
import { Button } from '@/shared/ui/Button/Button';

export const DemoSection = () => {
    return (
        <Section id="demo" title="Demo">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32 items-center w-full">
                <div className="order-2 xl:order-1 w-full flex justify-center py-32 xl:py-16 px-4 xl:px-8">
                    <div className="relative">
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
                                <div className="w-full h-full flex items-start justify-start p-8">
                                    <div className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]">
                                        <p className="text-white font-bold text-lg tracking-wide">
                                            Colored Manga
                                        </p>
                                    </div>
                                </div>
                            }
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 dark:bg-black/40 blur-xl rounded-full" />
                    </div>
                </div>
                <div className="order-1 xl:order-2 w-full flex flex-col items-center xl:items-start gap-8 text-center xl:text-left px-4 xl:px-8">
                    <h3 className="text-[3rem] font-bold text-[var(--text-primary)] leading-tight">
                        Discover Reze&apos;s Story
                    </h3>
                    <p className="text-[1.8rem] leading-relaxed text-[var(--text-primary)] opacity-90 max-w-2xl">
                        Experience the Chainsaw Man: Reze Arc — Part 1 as a motion comic with AI-powered Polish dubbing and narration.
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
