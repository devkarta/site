"use client";

import { languages } from "@/constants/lang-constant";
import { useLangStore } from "@/stores/lang-store";

export const Desc = () => {
  const lang = useLangStore((state) => state.lang);

  return <p className="mb-4">{languages[lang].desc}</p>;
};
