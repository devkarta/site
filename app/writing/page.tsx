import { writings } from "#site/content";
import { WritingItem } from "@/components/writing-item";
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

  let lastYear: number | null = null;

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter capitalize">
        {siteConfig.section.writing.title}
      </h1>
      <p className="mb-8">{siteConfig.section.writing.desc}</p>
      {sortedWritings?.length > 0 ? (
        <ul className="flex flex-col">
          <div className="text-muted-foreground h-6 flex items-center ">
            <p className="w-14">{siteConfig.section.writing.dateTable}</p>
            <p>{siteConfig.section.writing.titleTable}</p>
          </div>
          <hr className="border-t border-neutral-300  dark:border-neutral-800 my-2 " />
          {sortedWritings.map((post, index) => {
            const { slug, date, title } = post;
            const postYear = new Date(date).getFullYear();
            const showDate = postYear !== lastYear;
            lastYear = postYear;

            return (
              <li key={slug}>
                <WritingItem
                  slug={slug}
                  date={date}
                  title={title}
                  showDate={showDate}
                />
                {index < sortedWritings.length - 1 && (
                  <hr className="border-t border-neutral-300  dark:border-neutral-800 my-2" />
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </section>
  );
}
