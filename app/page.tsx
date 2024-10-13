import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { sectionItems } from "@/constants/section-constant";
import { Desc } from "@/components/desc";

export default function Page() {
  return (
    <section>
      <Avatar className="mb-5 h-24 w-24 ">
        <AvatarImage src="https://github.com/devkarta.png" />
        <AvatarFallback>KRT</AvatarFallback>
      </Avatar>
      <h1 className="mb-8 text-2xl font-mono font-semibold tracking-tighter">
        Habib Ilham Alqifari
      </h1>
      <Desc />
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
