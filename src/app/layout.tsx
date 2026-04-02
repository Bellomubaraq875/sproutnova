import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SproutNova - Empowering Farmers with AI-Driven Solutions",
  description:
    "SproutNova provides AI-driven solutions to empower farmers and improve agricultural outcomes.",
  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
    apple: "/logo/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={jost.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
       
          <Header />
          <main>{children}</main>
          <Footer />
       
      </body>
    </html>
  );
}
