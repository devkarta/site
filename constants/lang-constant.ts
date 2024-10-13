
export const languages = {
  en: {
    name: "English",
    label: "en",
    desc: "I'm a software engineer with a passion for both code and design, creating intuitive, user-focused digital experiences.",
    readMore: "Read more",
  },
  id: {
    name: "Indonesia",
    label: "id",
    desc: "Saya seorang software engineer yang memiliki minat pada kode dan desain, menciptakan pengalaman digital yang intuitif dan berfokus pada pengguna.",
    readMore: "Baca lebih lanjut",
  },
};

export type LanguageCode = keyof typeof languages;
