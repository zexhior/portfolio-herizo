import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/navbar/navbar";
import FooterComponent from "@/components/footer/footer";
import { LanguageProvider } from "@/provider/langprovider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Portfolio herizo",
  description: "Portfolio de Herizo, développeur web fullstack",
  icons: {
    icon: "/herizo-icon.png",
    shortcut: "/herizo-icon.png",
    apple: "/herizo-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/herizo-icon.png",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased w-full`}>
        <LanguageProvider>
          <NavbarComponent />
          {children}
          <FooterComponent />
          <p className="mx-auto text-white text-md w-full flex flex-col md:flex-row lg:flex-wrap items-center justify-around bg-gray-950 p-4">Copyright © : Portfolio Herizo 2025</p>
        </LanguageProvider>
      </body>
    </html>
  );
}
