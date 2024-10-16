// NavItem.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  name: string;
  path: string;
}

export const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  const pathname = usePathname();

  const isActive = pathname === path || pathname.startsWith(`${path}/`);

  return (
    <Link
      href={path}
      className={cn(
        "transition-all duration-300 flex relative capitalize",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {name}
    </Link>
  );
};
