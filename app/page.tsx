import { WritingPosts } from "@/components/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";

function ReadMoreLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="text-blue-500 dark:text-muted-foreground flex items-center transition-colors duration-200 dark:hover:text-secondary-foreground tracking-tight w-fit"
    >
      <div className="h-[5px] w-[5px] my-2 mr-2 bg-foreground rounded-full " />
      <span>Read more</span>
      <ArrowRight className="ml-2" size="15" />
    </Link>
  );
}

const sectionItems = {
  writing: {
    component: (
      <WritingPosts>
        <ReadMoreLink href="/writing" />
      </WritingPosts>
    ),
  },
  // code: {
  //   component: (
  //     <CodePosts>
  //       <ReadMoreLink href="/code" />
  //     </CodePosts>
  //   ),
  // },
  // video: {
  //   component: (
  //     <VideoPosts>
  //       <ReadMoreLink href="/video" />
  //     </VideoPosts>
  //   ),
  // },
};

export default function Page() {
  return (
    <section>
      <Avatar className="mb-5 h-24 w-24 ">
        <AvatarImage src="https://github.com/devkarta.png" />
        <AvatarFallback>KRT</AvatarFallback>
      </Avatar>
      <h1 className="mb-8 text-2xl font-mono font-semibold tracking-tighter">
        I&apos;m Karta
      </h1>
      <p className="mb-4">
        {`I'm a software engineer with a passion for both code and design, creating intuitive, user-focused digital experiences.`}
      </p>

      <div className="space-y-8 flex flex-col mt-8">
        {Object.entries(sectionItems).map(([name, { component }]) => (
          <div key={name} className="flex flex-col">
            <h1 className="capitalize text-[17px] mb-4">{name}</h1>
            {component}
          </div>
        ))}
      </div>
    </section>
  );
}
