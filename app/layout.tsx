import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caramel Digital Studio",
  description: "Digital design and development studio",
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
