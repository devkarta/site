export const siteConfig = {
  name: "Ilham Alqifari",
  job: "software engineer",
  avatar: "https://github.com/devkarta.png",
  url: "devkarta.com",

  author: "Ilham Alqifari",
  links: {
    x: "https://x.com/devkarta",
    instagram: "https://instagram.com/devkarta",
    github: "https://github.com/devkarta",
    youtube: "https://youtube.com/@devkarta",
  },
  section: {
    writing: {
      title: "writing",
      desc: "I share my thoughts on dev, design, and all things tech.",
      dateTable: "date",
      titleTable: "title",
    },
    landing: {
      about: {
        title: "about",
        desc: "I'm a software engineer with a passion for both code and design, creating intuitive, user-focused digital experiences.",
      },
      writing: {
        title: "writing",
        readmore: "Read more",
      },
    },
  },
};

export type SiteConfig = typeof siteConfig;
