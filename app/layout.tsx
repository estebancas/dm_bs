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
          "font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
