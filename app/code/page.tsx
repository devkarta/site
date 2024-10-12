// import { OpenSourceProjects } from "@/components/projects";

export const metadata = {
  title: "Code",
  description: "Check out my open-source projects on GitHub.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Code</h1>
      <p className="mb-8">Check out my open-source projects on GitHub!</p>
      {/* <OpenSourceProjects /> */}
    </section>
  );
}
