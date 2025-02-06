export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Carbon Activity",
    techs: ["Python", "TypeScript"],
    link: "https://puppetfactory.app/",
  },
  {
    title: "Property NFT Marketplace",
    techs: ["Web3, Solidity, React"],
    link: "https://github.com/MaeWolff/create-nextjs-app-bash-script",
  },
  {
    title: "Scribe Solace",
    techs: ["Python", "TypeScript"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Customer Sentiment Analysis",
    techs: ["Python", "BeautifulSoup4", "NLTK"],
    link: "https://github.com/MaeWolff/astro-portfolio-template",
  },
  {
    title: "GrowthTrack (FitBase, JobTrack)",
    techs: ["Python", "BeautifulSoup4", "NLTK"],
    link: "https://github.com/MaeWolff/astro-portfolio-template",
    isComingSoon: true,
  }
];

export default projects;
