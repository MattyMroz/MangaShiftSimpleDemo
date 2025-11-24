"use client";

import React, { useEffect, useRef, useState, useId, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export interface GlassSurfaceProps {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    borderWidth?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    displace?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: 'R' | 'G' | 'B';
    yChannel?: 'R' | 'G' | 'B';
    mixBlendMode?:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'
    | 'plus-darker'
    | 'plus-lighter';
    className?: string;
    style?: React.CSSProperties;
}

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDark(theme === 'dark');
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    return isDark;
};

const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    width = 200,
    height = 80,
    borderRadius = 20,
    borderWidth = 0.07,
    brightness = 50,
    opacity = 0.93,
    blur = 11,
    displace = 0,
    backgroundOpacity = 0,
    saturation = 1,
    distortionScale = -180,
    redOffset = 0,
    greenOffset = 10,
    blueOffset = 20,
    xChannel = 'R',
    yChannel = 'G',
    mixBlendMode = 'difference',
    className = '',
    style = {}
}) => {
    const uniqueId = useId().replace(/:/g, '-');
    const filterId = `glass-filter-${uniqueId}`;
    const redGradId = `red-grad-${uniqueId}`;
    const blueGradId = `blue-grad-${uniqueId}`;

    const containerRef = useRef<HTMLDivElement>(null);
    const feImageRef = useRef<SVGFEImageElement>(null);
    const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

    const isDarkMode = useDarkMode();
    const pathname = usePathname();
    const [filterUrl, setFilterUrl] = useState(`url(#${filterId})`);
    const [isSVGSupported, setIsSVGSupported] = useState(false);
    const [isBackdropSupported, setIsBackdropSupported] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
            if (typeof window !== 'undefined') {
                // Check SVG support
                const checkSVG = () => {
                    if (typeof navigator === 'undefined') return false;
                    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
                    const isFirefox = /Firefox/.test(navigator.userAgent);

                    if (isWebkit || isFirefox) {
                        return false;
                    }

                    const div = document.createElement('div');
                    div.style.backdropFilter = `url(#${filterId})`;
                    return div.style.backdropFilter !== '';
                };
                setIsSVGSupported(checkSVG());

                // Check Backdrop support
                const checkBackdrop = () => {
                    return CSS.supports('backdrop-filter', 'blur(10px)');
                };
                setIsBackdropSupported(checkBackdrop());
            }
        }, 0);
        return () => clearTimeout(timer);
    }, [filterId]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const timer = setTimeout(() => {
                const currentUrl = window.location.href.split('#')[0];
                setFilterUrl(`url(${currentUrl}#${filterId})`);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [filterId, pathname]);

    const generateDisplacementMap = useCallback(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        const actualWidth = rect?.width || 400;
        const actualHeight = rect?.height || 200;
        const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

        const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

        return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
    }, [borderWidth, borderRadius, brightness, opacity, blur, mixBlendMode, redGradId, blueGradId]);

    const updateDisplacementMap = useCallback(() => {
        if (!feImageRef.current) return;
        feImageRef.current.setAttribute('href', generateDisplacementMap());
    }, [generateDisplacementMap]);

    useEffect(() => {
        if (!isSVGSupported) return;

        updateDisplacementMap();
        [
            { ref: redChannelRef, offset: redOffset },
            { ref: greenChannelRef, offset: greenOffset },
            { ref: blueChannelRef, offset: blueOffset }
        ].forEach(({ ref, offset }) => {
            if (ref.current) {
                ref.current.setAttribute('scale', (distortionScale + offset).toString());
                ref.current.setAttribute('xChannelSelector', xChannel);
                ref.current.setAttribute('yChannelSelector', yChannel);
            }
        });

        gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
    }, [
        isSVGSupported,
        width,
        height,
        borderRadius,
        borderWidth,
        brightness,
        opacity,
        blur,
        displace,
        distortionScale,
        redOffset,
        greenOffset,
        blueOffset,
        xChannel,
        yChannel,
        mixBlendMode,
        updateDisplacementMap
    ]);

    useEffect(() => {
        if (!containerRef.current || !isSVGSupported) return;

        const resizeObserver = new ResizeObserver(() => {
            setTimeout(updateDisplacementMap, 0);
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [updateDisplacementMap, isSVGSupported]);

    useEffect(() => {
        if (isSVGSupported) {
            setTimeout(updateDisplacementMap, 0);
        }
    }, [width, height, updateDisplacementMap, isSVGSupported]);

    const getContainerStyles = (): React.CSSProperties => {
        if (!isMounted) {
            return {
                ...style,
                width: typeof width === 'number' ? `${width}px` : width,
                height: typeof height === 'number' ? `${height}px` : height,
                borderRadius: `${borderRadius}px`,
                visibility: 'hidden' // Hide during SSR to avoid flash
            } as React.CSSProperties;
        }

        const baseStyles: React.CSSProperties = {
            ...style,
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
            borderRadius: `${borderRadius}px`,
            '--glass-frost': backgroundOpacity,
            '--glass-saturation': saturation,
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
        } as React.CSSProperties;

        if (isSVGSupported) {
            return {
                ...baseStyles,
                background: isDarkMode ? `hsl(0 0% 0% / ${backgroundOpacity})` : `hsl(0 0% 100% / ${backgroundOpacity})`,
                backdropFilter: `${filterUrl} saturate(${saturation})`,
                boxShadow: isDarkMode
                    ? `0 0 1px 0.5px color-mix(in oklch, white, transparent 90%) inset,
             0 0 4px 2px color-mix(in oklch, white, transparent 95%) inset,
             0px 2px 8px rgba(17, 17, 26, 0.1),
             0px 4px 12px rgba(17, 17, 26, 0.1)`
                    : `0 0 1px 0.5px color-mix(in oklch, black, transparent 90%) inset,
             0 0 4px 2px color-mix(in oklch, black, transparent 95%) inset,
             0px 2px 8px rgba(17, 17, 26, 0.08),
             0px 4px 12px rgba(17, 17, 26, 0.08)`
            };
        } else {
            if (isDarkMode) {
                if (!isBackdropSupported) {
                    return {
                        ...baseStyles,
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`
                    };
                } else {
                    return {
                        ...baseStyles,
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 30px rgba(255, 255, 255, 0.1)'
                    };
                }
            } else {
                if (!isBackdropSupported) {
                    return {
                        ...baseStyles,
                        background: 'rgba(255, 255, 255, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)`
                    };
                } else {
                    return {
                        ...baseStyles,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                    };
                }
            }
        }
    };

    const glassSurfaceClasses =
        'relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out';

    const focusVisibleClasses = isDarkMode
        ? 'focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2'
        : 'focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2';

    return (
        <div
            ref={containerRef}
            className={`${glassSurfaceClasses} ${focusVisibleClasses} ${className}`}
            style={getContainerStyles()}
        >
            {isSVGSupported && (
                <svg
                    className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
                            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

                            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
                            <feColorMatrix
                                in="dispRed"
                                type="matrix"
                                values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
                                result="red"
                            />

                            <feDisplacementMap
                                ref={greenChannelRef}
                                in="SourceGraphic"
                                in2="map"
                                id="greenchannel"
                                result="dispGreen"
                            />
                            <feColorMatrix
                                in="dispGreen"
                                type="matrix"
                                values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
                                result="green"
                            />

                            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
                            <feColorMatrix
                                in="dispBlue"
                                type="matrix"
                                values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
                                result="blue"
                            />

                            <feBlend in="red" in2="green" mode="screen" result="rg" />
                            <feBlend in="rg" in2="blue" mode="screen" result="output" />
                            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
                        </filter>
                    </defs>
                </svg>
            )}

            <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassSurface;
