// Page.tsx
import { writings } from "#site/content";
import { WritingTable } from "@/components/writing-table"; // Ensure the path is correct
import { siteConfig } from "@/config";
import { sortWritings } from "@/lib/utils";

export const metadata = {
  title: "Writing",
  description:
    "Explore my thoughts on software development, design, and technology.",
};

export default function Page() {
  const sortedWritings = sortWritings(
    writings.filter((post) => post.published)
  );

  return (
    <section>
      <h1 className="font-medium text-2xl capitalize">
        {siteConfig.section.writing.title}
      </h1>
      <div className="h-2" />
      <p className="text-muted-foreground">{siteConfig.section.writing.desc}</p>
      <div className="h-10" />

      {sortedWritings?.length > 0 ? (
        <WritingTable writings={sortedWritings} />
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </section>
  );
}
