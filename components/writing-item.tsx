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
        <p className="text-blue-500 dark:text-muted-foreground transition-colors duration-300  hover:text-blue-400 dark:hover:text-foreground ">
          {title}
        </p>
      </div>
    </Link>
  );
}
