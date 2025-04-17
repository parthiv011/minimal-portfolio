import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parthiv.",
  description: "Portfolio Website of Parthiv Parmar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
