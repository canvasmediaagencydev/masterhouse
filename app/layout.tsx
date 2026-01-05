/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "O2 Airflow by Masterhouse",
  description:
    "Premium clean-air solutions, products, and services from Masterhouse O2 Airflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${notoSansThai.variable} font-noto-sans-thai bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark antialiased transition-colors duration-300`}
        style={{ fontFamily: 'var(--font-noto-sans-thai), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
