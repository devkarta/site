"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function Back() {
  return (
      <Link href="/writing" className="flex items-center group w-fit">
        {/* Arrow with hover animation */}
        <ArrowLeft className="mr-2 h-4 w-4 text-muted-foreground group-hover:translate-x-[-5px] group-hover:text-foreground transition-transform duration2300" />
        {/* Text color change on hover and active */}
        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          Back
        </span>
      </Link>
  );
}
