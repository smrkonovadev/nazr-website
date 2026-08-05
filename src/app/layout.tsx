import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavigationProvider } from "@/context/NavigationContext";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { ScaleWrapper } from "@/components/ui/ScaleWrapper";
import { GlobalZoom } from "@/components/ui/GlobalZoom";
import { DesktopScaler } from "@/components/ui/DesktopScaler";
import { Footer } from "@/components/ui/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const signPainter = localFont({
  src: "../../public/fonts/signpainter.ttf",
  variable: "--font-signpainter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nazrco.in"),
  title: "NAZR – India's First Women's Safety Ecosystem | SOS App, Smart Safety & Personal Protection",
  description: "NAZR is India's first connected women's safety ecosystem combining smart SOS technology, trusted guardians, live location sharing, personal safety products, and emergency support to help women stay safe every day.",
  icons: {
    icon: "/images/Favicon-round.webp",
    shortcut: "/images/Favicon-round.webp",
    apple: "/images/Favicon-round.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} ${inter.variable} ${signPainter.variable} antialiased bg-white`} suppressHydrationWarning>
        <GlobalZoom />
        <LoadingScreen duration={4000} autoHide={true} />
        <NavigationProvider>
          <NavigationMenu />
          <ScaleWrapper>
            {children}
            <DesktopScaler bgColor="#161616">
              <Footer />
            </DesktopScaler>
          </ScaleWrapper>
        </NavigationProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
