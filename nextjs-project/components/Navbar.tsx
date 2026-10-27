"use client";
import React from "react";
import Link from "next/link";
import { Shield, Globe } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const { lang, toggleLanguage } = useApp();
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-indigo-700 flex items-center justify-center text-white shadow-md">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold text-slate-900">Civilprep</span>
            <span className="text-xl font-bold text-emerald-600">.ai</span>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-emerald-600">
            {lang === "mr" ? "मुख्यपृष्ठ" : "Home"}
          </Link>
          <Link href="/interview" className="hover:text-emerald-600">
            {lang === "mr" ? "मॉक मुलाखत" : "Interview"}
          </Link>
          <Link href="/report" className="hover:text-emerald-600">
            {lang === "mr" ? "मूल्यांकन अहवाल" : "Report"}
          </Link>
        </nav>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs sm:text-sm font-semibold"
        >
          <Globe className="w-4 h-4" />
          <span>{lang === "mr" ? "मराठी ✓ | EN" : "EN ✓ | मराठी"}</span>
        </button>
      </div>
    </header>
  );
}
