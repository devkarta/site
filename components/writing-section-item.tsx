import React from "react";
import { writings } from "#site/content"; // Ensure the correct import path
import { sortWritings } from "@/lib/utils";
import { siteConfig } from "@/config";

const WritingSectionItem = () => {
  const sortedWritings = sortWritings(
    writings.filter((post) => post.published)
  );

  if (sortedWritings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <h2 className="font-semibold capitalize">
        {siteConfig.section.landing.title}
      </h2>
      <ul className="list-disc list-inside space-y-1">
        {sortedWritings.slice(0, 3).map((post) => (
          <li key={post.slug}>
            <a
              href={post.slug}
              className="text-blue-500 dark:text-muted-foreground transition-all duration-300 ease-in-out hover:opacity-90 hover:text-blue-300 dark:hover:text-foreground tracking-tight"
            >
              {post.title}
            </a>
          </li>
        ))}
        {sortedWritings.length > 3 && (
          <li>
            <a
              href="/writing"
              className="text-blue-500 dark:text-muted-foreground transition-all duration-300 ease-in-out hover:opacity-90 hover:text-blue-300 dark:hover:text-foreground tracking-tight"
            >
              {siteConfig.section.landing.readmore}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default WritingSectionItem;
