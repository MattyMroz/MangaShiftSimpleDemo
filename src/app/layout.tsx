import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/widgets/Header/ui/Header";
import SplashCursor from "@/shared/ui/SplashCursor/SplashCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
