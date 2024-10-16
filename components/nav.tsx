// Navbar.tsx
import { navConfig } from "@/config";
import { NavItem } from "./nav-item";


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
              <NavItem key={name} name={name} path={path} />
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
