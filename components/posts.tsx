import Link from "next/link";

import { getWritingPosts } from "@/app/writing/utils";
import { Dot } from "lucide-react";

export function WritingPosts() {
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
          <Link key={post.slug} href={`/writing/${post.slug}`}>
            <p className="text-blue-500 dark:text-muted-foreground transition-colors duration-200 dark:hover:text-secondary-foreground tracking-tight flex items-center ">
              <Dot className="text-foreground" size={30} />
              {post.metadata.title}
            </p>
          </Link>
        ))}
        
    </div>
  );
}
