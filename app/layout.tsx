import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://curiositylabs.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Curiosity Labs",
  title: {
    default: "Curiosity Labs",
    template: "%s | Curiosity Labs",
  },
  description:
    "Curiosity Labs is a technology hub solving Africa's problems through innovation, building applications, investing in startups, and pushing original tech solutions.",
  keywords: [
    "Curiosity Labs",
    "African technology hub",
    "startup accelerator Africa",
    "AI solutions Africa",
    "technology innovation Africa",
    "Teleba",
  ],
  authors: [{ name: "Curiosity Labs", url: BASE_URL }],
  creator: "Curiosity Labs",
  publisher: "Curiosity Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Curiosity Labs",
    title: "Curiosity Labs | African Technology & Innovation Hub",
    description:
      "A technology hub driven by curiosity, building solutions that solve Africa's problems one question at a time.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Curiosity Labs — What if it's possible?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curiosity Labs | African Technology & Innovation Hub",
    description:
      "A technology hub driven by curiosity, building solutions that solve Africa's problems one question at a time.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: "/icon.png",
  },
  appleWebApp: {
    title: "Curiosity Labs",
  },
  other: {
    "facebook-domain-verification": "ock9q3gljtvurx6y96sdxa6dn4nxmp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
