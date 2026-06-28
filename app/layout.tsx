import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guaranteed Sports Picks",
  description: "Professional sports picks, transparent results, and proven strategies trusted since 1999.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${montserrat.variable} h-full antialiased bg-[#050B14] text-white`}
    >
      <body className="min-h-full flex flex-col bg-[#050B14] text-white font-sans">{children}</body>
    </html>
  );
}
