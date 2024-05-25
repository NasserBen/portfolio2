import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const mono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasser Ben",
  description: "Developer, designer, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <main className="flex flex-col items-center ">
          <div className="mt-48 w-[700px]">
            <Navbar /> {children} <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
