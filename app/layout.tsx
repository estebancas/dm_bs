import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import Providers from "@/components/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Dylan Mateo Baby Shower",
  description: "Bienvenidos al Baby Shower de Dylan Mateo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased items-center" ,
          inter.variable,
          playfair.variable
        )}
      >
        <div className="flex flex-col w-full max-w-[480px] py-24 px-6">
        <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
