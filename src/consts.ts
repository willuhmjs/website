import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "willuhmjs",
  GOVNAME: "William Faircloth",
  EMAIL: "willuhmjs@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "William is a software developer and computer science student..",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const EXPERIENCE: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "My academic and professional experience.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact",
  DESCRIPTION: "Get in touch with me!",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/willuhmjs",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/williamfaircloth",
  },
  {
    NAME: "email",
    HREF: "mailto:willuhmjs@gmail.com"
  }
];
