import Link from "next/link";
import { getWritingPosts } from "@/app/writing/utils";

export function ThreeWritingPosts({ children }: { children?: React.ReactNode }) {
  const allWritings = getWritingPosts(); // Fetch posts based on current language

  return (
    <div>
      {allWritings
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
        ) // Sort in descending order
        .slice(0, 3) // Limit to the latest 3 writings
        .map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="w-fit flex "
          >
            <div className="h-[5px] w-[5px] my-2 mr-2 bg-foreground rounded-full" />
            <p className="text-blue-500 w-fit dark:text-muted-foreground transition-colors duration-200 dark:hover:text-secondary-foreground tracking-tight">
              {post.metadata.title}
            </p>
          </Link>
        ))}
      {children}
    </div>
  );
}
