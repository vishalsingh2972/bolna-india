import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bolna India",
  description: "Talk instead of filling forms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}