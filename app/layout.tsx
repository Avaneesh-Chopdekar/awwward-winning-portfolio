import "./globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Providers from "./providers";
import { keywords } from "./_constants/keywords";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Avaneesh Chopdekar",
  description: "Personal portfolio of Avaneesh Chopdekar",
  keywords: keywords,
  // twitter
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
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
