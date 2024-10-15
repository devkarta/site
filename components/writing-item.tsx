import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";

interface WritingItemProps {
  slug: string;
  title: string;
  date: string;
  showDate: boolean;
 
}

export function WritingItem({
  slug,
  title,
  date,
  showDate,
}: WritingItemProps) {
  return (
    <Link href={slug} className={cn("block")}>
      <div className="flex items-start">
        <time
          dateTime={date}
          className={cn(
            "text-sm text-muted-foreground h-6 flex items-center w-14"
          )}
        >
          {showDate && formatDate(date)}
        </time>
        <p className="text-blue-500 dark:text-foreground transition-all duration-300 ease-in-out hover:opacity-90 hover:text-blue-300 dark:hover:text-muted-foreground tracking-tight">
          {title}
        </p>
      </div>
    </Link>
  );
}
