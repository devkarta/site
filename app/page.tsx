import { WritingPosts } from "@/components/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";

const sectionItems = {
  writing: {
    component: <WritingPosts />,
  },
  // code: {
  //   component: <WritingPosts />,
  // },
  // video: {
  //   component: <WritingPosts />,
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
          <div key={name} className=" flex flex-col ">
            <h1 className="capitalize text-[17px]">{name}</h1>
            {component}
            <Link href={`/${name}`}>
              <p className="text-blue-500 dark:text-muted-foreground dark:hover:text-secondary-foreground  transition-colors duration-200 tracking-tight flex items-center ">
                <Dot className="text-foreground" size={30} />
                <span>Read more</span>
                <ArrowRight className="ml-2" size="15" />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
