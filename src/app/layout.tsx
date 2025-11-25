import type { Metadata } from "next";
import { Montserrat, Inter, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/widgets/Header/ui/Header";
import SplashCursor from "@/shared/ui/SplashCursor/SplashCursor";
import LightRays from "@/shared/ui/LightRays/LightRays";
import { JapaneseBackground } from "@/shared/ui/JapaneseBackground/JapaneseBackground";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MangaShift",
  description: "Automatyczny Generator Audiowizualnych Adaptacji Mangi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${montserrat.variable} ${inter.variable} ${notoSansJP.variable} antialiased overflow-x-hidden`}
      >
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          CAPTURE_RESOLUTION={512}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={1.5}
          PRESSURE={0.4}
          PRESSURE_ITERATIONS={50}
          CURL={30}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          SHADING={true}
          COLOR_UPDATE_SPEED={3}
          BACK_COLOR={{ r: 0.5, g: 0, b: 0 }}
          TRANSPARENT={true}
        />
        <JapaneseBackground />
        <div className="fixed inset-0 pointer-events-none z-[1]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={1.0}
            pulsating={false}
            fadeDistance={1.0}
            saturation={1.0}
            followMouse={false}
            mouseInfluence={0.5}
            noiseAmount={0.0}
            distortion={0.0}
            className="w-full h-full"
            hideInLightMode={true}
          />
        </div>
        <Header />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
