// import { YouTubeVideos } from "@/components/videos";

export const metadata = {
  title: "Video",
  description: "Check out my latest YouTube videos.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Video</h1>
      <p className="mb-8">Catch my latest YouTube videos here!</p>
      {/* <YouTubeVideos /> */}
    </section>
  );
}
