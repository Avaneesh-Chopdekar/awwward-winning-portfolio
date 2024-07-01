import "./globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { FooterSection } from "@/components/sections";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avaneesh Chopdekar",
  description: "Personal portfolio of Avaneesh Chopdekar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-14">
      <body
        className={`${inter.className} flex min-h-svh w-full flex-col scroll-smooth antialiased`}
      >
        <Providers>
          {children}
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
