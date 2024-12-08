import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/providers/AuthProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mahabub Hossain - Frontend Developer Portfolio",
  description:
    "Welcome to Mahabub Hossain's personal portfolio. Explore my skills, projects, and experience as a Frontend Developer. Visit mahabub.me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Toaster/>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
