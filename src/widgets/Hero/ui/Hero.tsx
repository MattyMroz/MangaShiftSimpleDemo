import { Button } from "@/shared/ui/Button/Button";

export const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen flex flex-col items-center overflow-hidden"
        >
            <div className="flex-1" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 shrink-0 w-full max-w-[100vw]">
                <div className="relative flex items-center justify-center w-full">
                    <h1 className="text-[clamp(5rem,14vw,15rem)] font-bold text-[var(--text-primary)] tracking-tighter drop-shadow-2xl leading-none font-[family-name:var(--font-inter)] break-words w-full">
                        MangaShift
                    </h1>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start pt-12 z-10 px-4 w-full">
                <div className="flex flex-col items-center gap-4 mb-12 text-center">
                    <p className="text-[clamp(1.6rem,4vw,3rem)] text-[var(--text-secondary)] font-light tracking-wide font-[family-name:var(--font-montserrat)]">
                        Turning Static Pages Into Living Worlds
                    </p>
                    <p className="text-[clamp(1rem,2.5vw,1.4rem)] text-[var(--text-tertiary)] font-mono tracking-[0.5em] uppercase opacity-80 font-[family-name:var(--font-montserrat)]">
                        Culture Without Barriers
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 w-full sm:w-auto px-4">
                    <Button variant="primary" className="w-full sm:w-auto justify-center">
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
                    <Button variant="ghost" className="w-full sm:w-auto justify-center">Learn More</Button>
                </div>
            </div>
        </section>
    );
};