import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reet Batra: Developer Advocate",
  description:
    "Developer Advocate at the intersection of crypto + AI, turning complex protocols into communities developers actually love.",
  openGraph: {
    title: "Reet Batra- Developer Advocate",
    description:
      "4+ years DevRel in Web3 & AI. Reached 4,800+ devs, managed $21K in grants, organized 20+ events.",
    url: "https://reetbatra.com",
    siteName: "Reet Batra",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
