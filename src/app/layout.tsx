import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion App",
  description: "Demo Fashion Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">
        <header className="header">
          <nav className="navbar">
            <div className="links">
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
            </div>
            <div>
              <Link href="">Account </Link>
              <Link href="">Cart</Link>
            </div>

            <Link href="http://localhost:3000" className="logo">
              Example Fashion
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
