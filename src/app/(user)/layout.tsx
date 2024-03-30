import type { Metadata } from "next";

import "../../styles/globals.css";
import Header from "@/components/shared/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageButton from "@/components/ui/PageButton";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display">
        <Header />
        <PageButton/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}