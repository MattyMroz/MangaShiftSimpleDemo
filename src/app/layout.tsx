import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Header } from "@/widgets/Header/ui/Header";
import SplashCursor from "@/shared/ui/SplashCursor/SplashCursor";
import LightRays from "@/shared/ui/LightRays/LightRays";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MangaShift - Automatyczny Generator Audiowizualnych Adaptacji Mangi",
  description: "Projekt IPI - Automatyczna konwersja mangi do wideo z audio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl-PL" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <SplashCursor
          SIM_RESOLUTION={128} // Rozdzielczość symulacji
          DYE_RESOLUTION={1440} // Rozdzielczość renderowania kolorów
          CAPTURE_RESOLUTION={512} // Rozdzielczość przechwytywania
          DENSITY_DISSIPATION={3.5} // Rozpraszanie gęstości
          VELOCITY_DISSIPATION={1.5} // Rozpraszanie prędkości
          PRESSURE={0.4} // Ciśnienie
          PRESSURE_ITERATIONS={50} // Iteracje ciśnienia
          CURL={30} // Siła skrętu
          SPLAT_RADIUS={0.2} // Promień rozprysku
          SPLAT_FORCE={6000} // Siła rozprysku
          SHADING={true} // Cieniowanie włączone/wyłączone
          COLOR_UPDATE_SPEED={3} // Szybkość aktualizacji koloru
          BACK_COLOR={{ r: 0.5, g: 0, b: 0 }} // Kolor tła (ciemnoczerwony)
          TRANSPARENT={true} // Przezroczystość włączona/wyłączona
        />
        <div className="fixed inset-0 pointer-events-none z-[1]">
          <LightRays
            raysOrigin="top-center" // Pozycja źródła promieni
            raysColor="#ffffff" // Kolor promieni
            raysSpeed={1} // Prędkość animacji promieni
            lightSpread={0.5} // Rozproszenie światła
            rayLength={1.0} // Maksymalna długość/promień promieni
            pulsating={false} // Włącz/wyłącz efekt pulsowania
            fadeDistance={1.0} // Odległość zanikania promieni
            saturation={1.0} // Nasycenie koloru
            followMouse={false} // Czy promienie mają podążać za kursorem myszy
            mouseInfluence={0.5} // Siła wpływu myszy na promienie
            noiseAmount={0.0} // Ilość szumu w promieniach
            distortion={0.0} // Apply wave distortion to rays
            className="w-full h-full" // Additional CSS classes to apply to the container
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
