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
        <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-purple-500 flex flex-col items-center p-6">
          <header className="text-center text-white py-10">
            <h1 className="text-5xl font-extrabold mb-6">Weather Dashboard</h1>
            
          </header>
          <main className="flex justify-between p-4">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
