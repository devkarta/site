import { ReadMoreLink } from "@/components/read-more";
import { ThreeWritingPosts } from "@/components/three-posts";

const sectionItems = {
  writing: {
    component: (
      <ThreeWritingPosts>
        <ReadMoreLink href="/writing" />
      </ThreeWritingPosts>
    ),
  },
  // code: {
  //   component: (
  //     <CodePosts>
  //       <ReadMoreLink href="/code" />
  //     </CodePosts>
  //   ),
  // },
  // video: {
  //   component: (
  //     <VideoPosts>
  //       <ReadMoreLink href="/video" />
  //     </VideoPosts>
  //   ),
  // },
};

export { sectionItems };
