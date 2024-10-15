import { navConfig } from "@/config";
import Link from "next/link";

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight px-2">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-4">
            {Object.entries(navConfig).map(([name, path]) => (
              <Link
                key={name}
                href={path}
                className="transition-all hover:underline hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative  "
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
