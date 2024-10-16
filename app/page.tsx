import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import WritingSectionItem from "@/components/writing-section-item";
import { siteConfig } from "@/config";

export default function Page() {
  return (
    <section>
      <Avatar className="mb-5 h-24 w-24">
        <AvatarImage src={siteConfig.avatar} />
        <AvatarFallback>
          <Skeleton className="h-full w-full rounded-full" />
        </AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-xl font-medium ">{siteConfig.name}</h1>
        <div className="h-1" />
        <p className="text-muted-foreground capitalize">{siteConfig.job}</p>
      </div>
      <div className="h-7" />
      <div className="leading-relaxed ">
        <h2 className="capitalize">{siteConfig.section.landing.about.title}</h2>
        <div className="h-2" />

        <p className="text-muted-foreground">{siteConfig.section.landing.about.desc}</p>
      </div>
      <div className="h-7" />

      <WritingSectionItem />
    </section>
  );
}
