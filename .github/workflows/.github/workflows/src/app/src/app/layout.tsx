import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marca Power",
  description: "Tu aliado en IA y negocios para emprendedores.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
