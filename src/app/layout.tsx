import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WiDaySunny } from "react-icons/wi";

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
  title: "Weather Dashboard",
  description: "Stay updated with the latest weather conditions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-purple-500 flex flex-col items-center">
        <header className="flex justify-center ">
      <div className="flex items-center gap-3 mt-10  text-white  rounded-2xl ">
        <WiDaySunny className="text-yellow-300 text-6xl drop-shadow-lg" />

        <h1 className="text-6xl font-extrabold drop-shadow-md">
          Weather Dashboard
        </h1>
      </div>
    </header>
          <main className="flex justify-between p-4">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
