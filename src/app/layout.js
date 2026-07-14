import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Navbartop } from "./Components/Navbar/Navbartop";
import { NavLogo } from "./Components/Navbar/NavLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sultanabad High School",
  description: "Sultanabad High School",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" >
            <Navbartop/>
             <NavLogo/>
             <Navbar/>

        {children}
        </body>
    </html>
  );
}
