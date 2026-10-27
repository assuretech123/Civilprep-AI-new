import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Civilprep.ai - MPSC & UPSC AI Mock Interview Platform",
  description: "Bilingual Marathi & English AI Mock Interview Simulator for Civil Services Aspirants in Maharashtra"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mr">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <AppProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
