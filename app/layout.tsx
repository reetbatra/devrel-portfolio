import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// The width axis is doing real work here: headlines run expanded,
// sub-headlines run condensed. Without `wdth` this is just another grotesk.
const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
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
      className={`${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
