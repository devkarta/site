import { WritingPosts } from "@/components/posts";

export const metadata = {
  title: "Writing",
  description:
    "Explore my thoughts on software development, design, and technology.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Writing</h1>
      <p className=" mb-8">
        I share my thoughts on dev, design, and all things tech.
      </p>
      <WritingPosts />
    </section>
  );
}
