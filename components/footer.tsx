import { siteConfig } from "@/config";
import { Icons } from "./icons";
import { ModeToggle } from "./theme-toggle";

export default function Footer() {
  return (
    <footer className="my-16 flex  items-start  md:items-center justify-between ">
      <ul className="font-sm  flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 ">
        {Object.entries(siteConfig.links).map(([name, path]) => {
          return (
            <li key={name} className="group">
              <a
                className="flex items-center transition-all group-hover:underline hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href={path}
              >
                <Icons.arrow />
                <p className="ml-2 h-7">{name}</p>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="w-9 h-9">
        <ModeToggle />
      </div>
    </footer>
  );
}
