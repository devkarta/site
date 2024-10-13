import Link from "next/link";

import { getWritingPosts } from "@/app/writing/utils";
import { Dot } from "lucide-react";

export function WritingPosts({ children }: { children?: React.ReactNode }) {
  const allWritings = getWritingPosts();

  return (
    <div>
      {allWritings
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="w-fit"
          >
            <p className="text-blue-500 w-fit dark:text-muted-foreground flex items-center transition-colors duration-200 dark:hover:text-secondary-foreground tracking-tight  ">
              <Dot className="text-foreground" size={30} />
              {post.metadata.title}
            </p>
          </Link>
        ))}
      {children}
    </div>
  );
}
