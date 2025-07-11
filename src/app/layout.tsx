import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })
const mono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: "Portfolio de Joseph Herrera",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.className} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}