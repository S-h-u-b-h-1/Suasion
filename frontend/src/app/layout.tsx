import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";
import { Analytics } from '@vercel/analytics/next';

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
    default: "Suasion Group Kolkata | Ashok, Sumaan Shree & Shubhaang Kataruka",
    template: "%s | Suasion Group Kolkata",
  },
  description:
    "Suasion Group Kolkata is a premier integrated financial services house operating Suasion Finvest (NBFC), Suasion Services (Insurance), Suasion Infrastructure (Property), and Suasion Securities. Led by CA Ashok Kataruka, Sumaan Shree Kataruka, and Shubhaang Kataruka.",
  keywords: [
    "Suasion Group Kolkata",
    "Suasion Group",
    "suasion group kolkata search",
    "Ashok Kataruka",
    "Shubhaang Kataruka",
    "Sumaan Shree Kataruka",
    "Sumaan Kataruka",
    "Suasion Finvest Private Limited",
    "Suasion Services Private Limited",
    "Suasion Infrastructure Private Limited",
    "Suasion Securities",
    "Suasion Finvest Pvt Ltd",
    "Suasion Services Pvt Ltd",
    "Suasion Infrastructure Pvt Ltd",
    "Chartered Accountant Ashok Kataruka",
    "CA Ashok Kataruka",
    "Financial Advisors Kolkata",
    "NBFC Kolkata",
    "Life Insurance Kolkata",
    "Mutual Fund Distributor Kolkata",
    "Property Investment Advisor Kolkata",
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
  verification: {
    google: "28wzXtfgF8eLXJjdjdI0iaQoH0P1gWViRrvz2Fy_9lQ",
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
        <Analytics />
      </body>
    </html>
  );
}
