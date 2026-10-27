"use client";
import React, { createContext, useContext, useState } from "react";

export type Language = "mr" | "en";

export interface AnswerRecord {
  questionId: number;
  responseText: string;
  contentScore: number;
  commScore: number;
  clarityScore: number;
}

interface AppContextType {
  lang: Language;
  toggleLanguage: () => void;
  district: string;
  setDistrict: (d: string) => void;
  answers: AnswerRecord[];
  setAnswers: React.Dispatch<React.SetStateAction<AnswerRecord[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("mr");
  const [district, setDistrict] = useState<string>("Kolhapur (कोल्हापूर)");
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const toggleLanguage = () => setLang((p) => (p === "mr" ? "en" : "mr"));

  return (
    <AppContext.Provider value={{ lang, toggleLanguage, district, setDistrict, answers, setAnswers }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
