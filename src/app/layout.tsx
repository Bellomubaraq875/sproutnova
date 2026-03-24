import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { I18nProvider } from "./providers";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LAB Foundation",
  description:
    "LAB Foundation provides food, shelter, education, and healthcare to vulnerable communities across 120+ countries.",
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
        {/* I18nProvider handles dynamic lang internally */}
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
