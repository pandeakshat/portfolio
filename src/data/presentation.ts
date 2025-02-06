type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "mail@pandeakshat.com",
  title: "Welcome to my portfolio.",
  // profile: "/profile.webp",
  description:
    "",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/iam_akshatpande",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/pandeakshat",
    },
    {
      label: "Github",
      link: "https://github.com/pandeakshat",
    },
  ],
};

export default presentation;
