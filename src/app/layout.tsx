import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Rubik, Rubik_Mono_One } from "next/font/google";

export const metadata: Metadata = {
  title: "The ByteKnights - FTC 27705",
  description: "The official website of FTC Team 27705, the Brooklyn ByteKnights.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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
    <html lang="en" className={`${geist.variable} ${rubik.variable} ${rubikMonoOne.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
