import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font from Google
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer-Section/Footer";

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"], // Specify font subsets
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include font weights
  variable: "--font-poppins", // Set a CSS variable for the font
});

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
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
