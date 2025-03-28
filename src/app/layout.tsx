import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InitialLoader from "@/components/InitialLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Tristan Wehrle",
  description: "© Tristan Wehrle - Tous droits réservés",
  icons: {
    icon: "/favicon.ico",
  },
};

function GridBackgroundDemo() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-full h-full bg-neutral-950 bg-grid-white/[0.2] relative">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white relative`}>
        <InitialLoader />
        <GridBackgroundDemo />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}