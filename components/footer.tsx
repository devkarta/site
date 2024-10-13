import { ModeToggle } from "./theme-toggle";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const footerItems = {
  "https://x.com/devkarta": {
    name: "x",
  },
  "https://instagram.com/devkarta": {
    name: "instagram",
  },
  "https://github.com/devkarta": {
    name: "github",
  },
  "https://youtube.com/@devkarta": {
    name: "youtube",
  },
};

export default function Footer() {
  return (
    <footer className="my-16 flex  items-start  md:items-center justify-between ">
      <ul className="font-sm  flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 ">
        {Object.entries(footerItems).map(([path, { name }]) => {
          return (
            <li key={path}>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href={path}
              >
                <ArrowIcon />
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
