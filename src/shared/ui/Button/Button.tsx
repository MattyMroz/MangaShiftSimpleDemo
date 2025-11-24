'use client';

import React from 'react';
import GlassSurface from '@/shared/ui/GlassSurface/GlassSurface';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
    const baseStyles = "relative inline-block cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.95]";

    if (variant === 'primary') {
        return (
            <button className={`${baseStyles} ${className || ''}`} {...props}>
                <GlassSurface
                    width="auto"
                    height="auto"
                    borderRadius={50}
                    borderWidth={0.3}
                    brightness={50}
                    opacity={0.5}
                    blur={11}
                    displace={0.5}
                    backgroundOpacity={0.75}
                    saturation={1}
                    distortionScale={-180}
                    redOffset={0}
                    greenOffset={10}
                    blueOffset={20}
                    mixBlendMode="lighten"
                    className="px-12 py-5 backdrop-invert"
                    style={{ boxShadow: 'none' }}
                >
                    <span className="text-[2.2rem] font-bold text-[var(--text-primary)] tracking-tight whitespace-nowrap">
                        {children}
                    </span>
                </GlassSurface>
            </button>
        );
    }

    // Ghost variant
    return (
        <button className={`${baseStyles} ${className || ''}`} {...props}>
            <GlassSurface
                width="auto"
                height="auto"
                borderRadius={50}
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
                className="px-12 py-5"
                style={{ boxShadow: 'none' }}
            >
                <span className="text-[2.2rem] font-bold text-[var(--text-primary)] tracking-tight whitespace-nowrap">
                    {children}
                </span>
            </GlassSurface>
        </button>
    );
};