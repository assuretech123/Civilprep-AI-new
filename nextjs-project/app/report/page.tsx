"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function ReportPage() {
  const { lang, district } = useApp();

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
            Civilprep.ai Evaluation • {district}
          </span>
          <h1 className="text-3xl font-extrabold mt-1">
            {lang === "mr" ? "मुलाखत मूल्यांकन अहवाल" : "Mock Interview Assessment Report"}
          </h1>
        </div>
        <div className="text-center bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700">
          <span className="text-4xl font-extrabold text-emerald-400">82%</span>
          <span className="block text-xs text-slate-400 mt-1">Overall Readiness</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900">Content Knowledge (विषय ज्ञान)</h3>
          <p className="text-2xl font-extrabold text-emerald-600 mt-2">82%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900">Communication (संवाद कौशल्य)</h3>
          <p className="text-2xl font-extrabold text-indigo-600 mt-2">85%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900">Analytical Clarity (विश्लेषणात्मक स्पष्टता)</h3>
          <p className="text-2xl font-extrabold text-teal-600 mt-2">80%</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/interview" className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm">
          {lang === "mr" ? "पुन्हा मुलाखत द्या" : "Retake Interview"}
        </Link>
        <Link href="/" className="px-6 py-3 rounded-xl bg-slate-200 text-slate-800 font-bold text-sm">
          {lang === "mr" ? "मुख्यपृष्ठावर जा" : "Back to Home"}
        </Link>
      </div>
    </div>
  );
}
