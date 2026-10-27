"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mic, FileText, ChevronRight, CheckCircle2 } from "lucide-react";
import { useApp } from "@/context/AppContext";

const QUESTIONS = [
  {
    id: 1,
    mr: "तुमच्या जिल्ह्यामध्ये कृषी प्रक्रिया उद्योग (Agro-processing) आणि ग्रामीण रोजगाराच्या वाढीसाठी प्रशासकीय अधिकारी म्हणून तुमच्या पहिल्या तीन प्राथमिकता काय असतील?",
    en: "As an administrative officer, what would be your top three priorities to boost agro-processing industries and rural employment in your home district?"
  },
  {
    id: 2,
    mr: "महाराष्ट्र शासनाच्या महसूल आणि नागरी सेवांमध्ये आर्टिफिशियल इंटेलिजन्स (AI) वापरताना पारदर्शकता आणि सर्वसमावेशकता कशी राखता येईल?",
    en: "How can transparency and inclusivity be ensured while integrating Artificial Intelligence (AI) into Maharashtra's revenue and citizen service delivery?"
  },
  {
    id: 3,
    mr: "पूरग्रस्त भागात मदतकार्य सुरू असताना स्थानिक प्रभावशाली गटाकडून एका विशिष्ट भागालाच आधी मदत देण्यासाठी तुमच्यावर दबाव आला, तर तुम्ही काय भूमिका घ्याल?",
    en: "During flood relief operations, if an influential group pressures you to divert relief supplies to a non-critical area first, how will you handle it?"
  }
];

export default function InterviewPage() {
  const { lang, district, answers, setAnswers } = useApp();
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"text" | "audio">("text");

  const q = QUESTIONS[idx];
  const progress = Math.round(((idx + 1) / QUESTIONS.length) * 100);

  const saveAndNext = (finish: boolean) => {
    const updated = [
      ...answers.filter((a) => a.questionId !== q.id),
      {
        questionId: q.id,
        responseText: text || (lang === "mr" ? "नमुना प्रशासकीय उत्तर सादर केले." : "Submitted structured response."),
        contentScore: 82,
        commScore: 85,
        clarityScore: 80
      }
    ];
    setAnswers(updated);
    if (finish || idx + 1 >= QUESTIONS.length) {
      router.push("/report");
    } else {
      setIdx(idx + 1);
      setText("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex justify-between text-xs font-bold text-slate-600">
          <span>DAF District: {district}</span>
          <span>
            Question {idx + 1} of {QUESTIONS.length} ({progress}%)
          </span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-600 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-5">
        <p className="text-lg font-bold text-slate-900">“{q[lang]}”</p>

        <div className="flex gap-2">
          <button
            onClick={() => setMode("text")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
              mode === "text" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            <FileText className="w-4 h-4" /> Text
          </button>
          <button
            onClick={() => setMode("audio")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
              mode === "audio" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            <Mic className="w-4 h-4" /> Audio
          </button>
        </div>

        <textarea
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={lang === "mr" ? "तुमचे उत्तर येथे लिहा..." : "Type your response here..."}
          className="w-full rounded-2xl border border-slate-300 p-4 text-sm"
        />

        <div className="flex justify-end gap-3">
          {idx + 1 < QUESTIONS.length && (
            <button
              onClick={() => saveAndNext(false)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center gap-1.5"
            >
              <span>{lang === "mr" ? "पुढील प्रश्न" : "Next Question"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => saveAndNext(true)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{lang === "mr" ? "मुलाखत पूर्ण करा" : "Finish Interview"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
