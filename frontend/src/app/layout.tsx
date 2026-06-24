import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suasion.in"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Suasion Group | Integrated Financial Services Kolkata",
    template: "%s | Suasion Group",
  },
  description:
    "Suasion Group is a Kolkata-based multi-generational financial services house operating across NBFC lending, insurance distribution, property investments, and mutual fund distribution. Guiding wealth across generations.",
  keywords: [
    "Suasion Group Kolkata",
    "Suasion Finvest Private Limited",
    "Suasion Services Private Limited",
    "Suasion Securities",
    "NBFC in Kolkata",
    "Life insurance advisor Kolkata",
    "Mutual fund distributor Kolkata",
    "Property investment advisor Kolkata",
    "Wealth management Kolkata",
    "Financial services group Kolkata",
  ],
  authors: [{ name: "Suasion Group" }],
  creator: "Suasion Group",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.suasion.in",
    title: "Suasion Group | Guiding Wealth Across Generations",
    description:
      "A trusted Kolkata-based family office financial service group providing NBFC business finance, insurance, property advisory, and wealth management.",
    siteName: "Suasion Group",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suasion Group - Guiding Wealth Across Generations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suasion Group | Integrated Financial Services",
    description: "Kolkata-based family-owned integrated financial services group.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#082A6B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${ibmPlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
