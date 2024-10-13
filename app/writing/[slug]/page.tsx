import { notFound } from 'next/navigation'
import {  getWritingPosts } from '../utils';
import { CustomMDX } from '@/components/mdx';


// import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  const posts = getWritingPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// export function generateMetadata({ params }) {
//   const post = getBlogPosts().find((post) => post.slug === params.slug)
//   if (!post) {
//     return
//   }

//   const {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata
//   const ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

export default function Writing({ params }: { params: { slug: string } }) {
  const post = getWritingPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            // image: post.metadata.image
            //   ? `${baseUrl}${post.metadata.image}`
            //   : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            // url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
    
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
