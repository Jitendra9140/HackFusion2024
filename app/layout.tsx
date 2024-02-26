
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackFusion",
  description: "This is  Hackthon website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <AppRouterCacheProvider  options={{ enableCssLayer: true }}>
           {children}
+        </AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}

