import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Adote um Idoso neste Natal", description: "Escolha um idoso para presentear neste Natal e faça a diferença." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
