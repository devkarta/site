"use client"

import { languages } from "@/constants/lang-constant";
import { useLangStore } from "@/stores/lang-store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function ReadMoreLink({ href }: { href: string }) {
  const lang = useLangStore((state) => state.lang); // Get the current language
  return (
    <Link
      href={href}
      className="text-blue-500 dark:text-muted-foreground flex items-center transition-colors duration-200 dark:hover:text-secondary-foreground tracking-tight w-fit"
    >
      <div className="h-[5px] w-[5px] my-2 mr-2 bg-foreground rounded-full" />
      <span>{languages[lang].readMore}</span>
      <ArrowRight className="ml-2" size="15" />
    </Link>
  );
}

export { ReadMoreLink };
