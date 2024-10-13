import { create } from "zustand";
import { LanguageCode } from "@/constants/lang-constant";

interface LangState {
  lang: LanguageCode;
  setLang: (language: LanguageCode) => void;
}

const useLangStore = create<LangState>((set) => ({
  lang: "en",
  setLang: (language) => set({ lang: language }),
}));

export { useLangStore };
