import Link from "next/link";

import { getWritingPosts } from "@/app/writing/utils";

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
            className="w-fit flex "
          >
            <div className="h-[5px] w-[5px] my-2 mr-2 bg-foreground rounded-full " />
            <p className="text-blue-500 w-fit dark:text-muted-foreground  transition-colors duration-200 dark:hover:text-secondary-foreground tracking-tight  ">
              {post.metadata.title}
            </p>
          </Link>
        ))}
      {children}
    </div>
  );
}
