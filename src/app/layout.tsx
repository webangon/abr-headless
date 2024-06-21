//"use client";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amazing Business Results",
  description: "Zoho One Premium Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
