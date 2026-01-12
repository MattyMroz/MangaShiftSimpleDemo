'use client';

import dynamic from 'next/dynamic';

const SplashCursor = dynamic(() => import("@/shared/ui/SplashCursor/SplashCursor"), {
  ssr: false,
  loading: () => null
});

const LightRays = dynamic(() => import("@/shared/ui/LightRays/LightRays"), {
  ssr: false,
  loading: () => null
});

interface BackgroundEffectsProps {
  splashCursorProps: React.ComponentProps<typeof SplashCursor>;
  lightRaysProps: React.ComponentProps<typeof LightRays>;
}

export const BackgroundEffects = ({ splashCursorProps, lightRaysProps }: BackgroundEffectsProps) => {
  return (
    <>
      <SplashCursor {...splashCursorProps} />
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <LightRays {...lightRaysProps} />
      </div>
    </>
  );
};
