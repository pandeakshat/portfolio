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
    link: "https://github.com/pandeakshat/Carbon-Activity",
  },
  {
    title: "Property NFT Marketplace",
    techs: ["Web3, Solidity, React"],
    link: "https://github.com/pandeakshat/property-nft",
  },
  {
    title: "Scribe Solace",
    techs: ["Python", "TypeScript"],
    link: "https://github.com/exp-er/scribe-solace",
  },
  {
    title: "Customer Sentiment Analysis",
    techs: ["Python", "BeautifulSoup4", "NLTK"],
    link: "https://github.com/pandeakshat/customer-sentiment-analysis",
  },
  {
    title: "Anime Wisdom Vault",
    techs: ["Python", "Firebase", "NLTK"],
    link: "https://github.com/exp-er/AnimeWisdomVault",
    isComingSoon: true,
  }
];

export default projects;
