import "@/styles/mdx.css";
import { writings } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { formatDateDay } from "@/lib/utils";
import { Back } from "@/components/back";
import { Separator } from "@/components/ui/separator";

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
      <div className="flex justify-start">
        <Back />
      </div>

      <div className="h-9" />
        <h1 className="text-4xl font-semibold ">
          {post.title}
        </h1>
        <div className="h-3" />
        {post.date && (
          <time dateTime={post.date} className=" text-muted-foreground">
            {formatDateDay(post.date)}
          </time>
        )}
      <article className="prose dark:prose-invert">
        <div className="h-8" />
        <Separator />
        <div className="h-6" />
        <div className="prosemdx">

        <MDXContent code={post.body} />
        </div>
      </article>
    </>
  );
}
