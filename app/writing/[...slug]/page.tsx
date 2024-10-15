import "@/styles/mdx.css";

import { writings } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { formatDateDay } from "@/lib/utils";
import { Bread } from "@/components/bread";

interface WritingPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: WritingPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = writings.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  WritingPageProps["params"][]
> {
  return writings.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export default async function WritingPage({ params }: WritingPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      <Bread />
      <div className="h-6" />
      <article className="prose prose-headings:text-foreground prose-lead:text-foreground prose-h1:text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-h4:text-foreground prose-p:text-foreground prose-a:text-foreground dark:prose-invert">
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            {formatDateDay(post.date)}
          </time>
        )}

        <div className="h-3" />
        <h1 className="font-heading text-2xl  lg:text-3xl font-semibold ">
          {post.title}
        </h1>
        {post.description ? <p className="mt-0 ">{post.description}</p> : null}
        <MDXContent code={post.body} />
      </article>
    </>
  );
}
