import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import WritingSectionItem from "@/components/writing-section-item";
import { siteConfig } from "@/config";

export default function Page() {
  return (
    <section className="p-6">
      <Avatar className="mb-5 h-24 w-24">
        <AvatarImage src={siteConfig.avatar} />
        <AvatarFallback>
          <Skeleton className="h-full w-full rounded-full" />
        </AvatarFallback>
      </Avatar>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {siteConfig.name}
      </h1>
      <p className="mb-4">{siteConfig.description}</p>
      <WritingSectionItem />
    </section>
  );
}
