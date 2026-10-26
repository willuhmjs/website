import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "willuhmjs",
  GOVNAME: "William Faircloth",
  EMAIL: "willuhmjs@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "William is a cybersecurity student and systems administrator at Old Dominion University.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Selected projects",
  DESCRIPTION: "Selected projects, each one explained in plain English: what it is, who it's for, and what it does.",
};

export const EXPERIENCE: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "My work, education, and academic experience in systems administration and cybersecurity.",
};

export const SKILLS = [
  { LABEL: "Systems", ITEMS: "Linux, Windows Server, Active Directory, PowerShell, Bash" },
  { LABEL: "Infrastructure", ITEMS: "Ansible, Kubernetes, Harvester, Docker, Proxmox, GPU Clusters" },
  { LABEL: "Networking & security", ITEMS: "DNS, Enterprise Networking, Firewalls, Log Monitoring, Patching & Hardening" },
  { LABEL: "Development", ITEMS: "Python, JavaScript, Web Development, Git/GitHub" },
  { LABEL: "Languages", ITEMS: "English, German" },
];

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
