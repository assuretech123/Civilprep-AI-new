"use client";
import React from "react";
import Link from "next/link";
import { Compass, MessageSquare, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function LandingPage() {
  const { lang, district, setDistrict } = useApp();

  return (
    <div>
      <section className="bg-gradient-to-b from-slate-900 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>
              {lang === "mr"
                ? "MPSC आणि UPSC नागरी सेवा मुलाखत तयारी"
                : "Tailored for MPSC & UPSC Aspirants in Maharashtra"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {lang === "mr"
              ? "सनदी सेवेतील यशासाठी AI-आधारित मॉक मुलाखत"
              : "Ace Your Civil Services Board with AI Mock Interviews"}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            {lang === "mr"
              ? "तुमच्या गृहजिल्ह्यावर आणि DAF वर आधारित सानुकूल प्रश्न, मराठी व इंग्रजी भाषेत सराव आणि सखोल मूल्यांकन अहवाल."
              : "Adaptive DAF & Maharashtra governance questions, bilingual voice/text responses, and instant rubric reports."}
          </p>
          <div className="max-w-xs mx-auto">
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full rounded-xl px-4 py-2.5 text-slate-900 font-semibold text-sm"
            >
              <option value="Kolhapur (कोल्हापूर)">Kolhapur (कोल्हापूर)</option>
              <option value="Pune (पुणे)">Pune (पुणे)</option>
              <option value="Mumbai (मुंबई)">Mumbai (मुंबई)</option>
              <option value="Nagpur (नागपूर)">Nagpur (नागपूर)</option>
              <option value="Nashik (नाशिक)">Nashik (नाशिक)</option>
            </select>
          </div>
          <div className="pt-4">
            <Link
              href="/interview"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg shadow-lg"
            >
              <span>Start Mock Interview / मुलाखत सुरू करा</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <Compass className="w-8 h-8 text-emerald-600" />
          <h3 className="text-lg font-bold">Adaptive Questions (सानुकूल प्रश्न)</h3>
          <p className="text-sm text-slate-600">
            {lang === "mr"
              ? "तुमचा गृहजिल्हा, कृषी व औद्योगिक विकास आणि चालू घडामोडींवर आधारित प्रश्न."
              : "Personalized questions calibrated to your home district and Maharashtra socio-economic context."}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <MessageSquare className="w-8 h-8 text-indigo-600" />
          <h3 className="text-lg font-bold">AI Mock Interview (AI मुलाखत)</h3>
          <p className="text-sm text-slate-600">
            {lang === "mr"
              ? "वास्तविक पॅनेल संवाद आणि मजकूर/आवाज या दोन्ही माध्यमांतून उत्तर देण्याची सोय."
              : "Interactive Q&A board simulation with both text and voice recording options."}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <BarChart3 className="w-8 h-8 text-emerald-600" />
          <h3 className="text-lg font-bold">In-depth Feedback Report (सखोल फीडबॅक)</h3>
          <p className="text-sm text-slate-600">
            {lang === "mr"
              ? "विषय ज्ञान, संवाद कौशल्य आणि विश्लेषणात्मक स्पष्टता यावर सविस्तर गुणपत्रिका."
              : "Detailed scores on Content Knowledge, Communication, and Analytical Clarity."}
          </p>
        </div>
      </section>
    </div>
  );
}
