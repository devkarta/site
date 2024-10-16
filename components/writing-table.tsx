"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { siteConfig } from "@/config";
import { useRouter } from "next/navigation";

interface Writing {
  slug: string;
  date: string;
  title: string;
}

interface WritingTableProps {
  writings: Writing[];
}

export function WritingTable({ writings }: WritingTableProps) {
  const router = useRouter(); // Initialize router for navigation

  let lastYear: number | null = null; // Variable to track the last displayed year

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-[100px] capitalize">
            {siteConfig.section.writing.dateTable}
          </TableHead>
          <TableHead className="capitalize">
            {siteConfig.section.writing.titleTable}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {writings.map((writing) => {
          const currentYear = new Date(writing.date).getFullYear();
          const showYear = currentYear !== lastYear; // Only show the year if it’s different from the last year
          lastYear = currentYear; // Update lastYear to the current year

          return (
            <TableRow
              key={writing.slug}
              className="cursor-pointer "
              onClick={() => router.push(`/${writing.slug}`)} // Navigate on row click
            >
              <TableCell className="font-medium">
                {showYear ? currentYear : ""}{" "}
                {/* Show the year only for the first article of each year */}
              </TableCell>
              <TableCell>{writing.title}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
