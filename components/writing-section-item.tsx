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
    <div>
      <h2 className="capitalize">{siteConfig.section.landing.writing.title}</h2>
      <div className="h-2" />
      <ul className="list-disc list-inside space-y-1">
        {sortedWritings.slice(0, 3).map((post) => (
          <li key={post.slug}>
            <a
              href={post.slug}
              className="text-blue-500 dark:text-muted-foreground transition-colors duration-300  hover:text-blue-300 dark:hover:text-foreground "
            >
              {post.title}
            </a>
          </li>
        ))}
        {sortedWritings.length > 3 && (
          <li>
            <a
              href="/writing"
              className="text-blue-500 dark:text-muted-foreground transition-colors duration-300  hover:text-blue-400 dark:hover:text-foreground "
            >
              {siteConfig.section.landing.writing.readmore}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default WritingSectionItem;
