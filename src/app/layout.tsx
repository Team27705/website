import "~/styles/globals.css";

import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Rubik, Rubik_Mono_One } from "next/font/google";
import SmoothScroller from "~/components/smooth-scroller";
import Header from "~/components/header";
import Footer from "~/components/footer";

export const metadata: Metadata = {
  title: "The ByteKnights - FTC 27705",
  description:
    "The official website of FTC Team 27705, the Brooklyn ByteKnights.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  themeColor: '#15162c',
}

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rubik",
});

const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-mono-one",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${rubik.variable} ${rubikMonoOne.variable}`}
    >
      <body className="bg-[#15162c]">
        {/* Header must be outside the SmoothSmoother wrapper so it remains fixed to the viewport */}
        <Header />
        <SmoothScroller>
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
