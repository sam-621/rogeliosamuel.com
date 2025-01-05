import ImpotradeImage from "../assets/images/impotrade.png";
import VendyxImage from "../assets/images/vendyx.png";
import WSQLImage from "../assets/images/wsql.png";

export const FEATURED_PROJECTS = [
  {
    image: ImpotradeImage,
    alt: "Impotrade",
    name: "Impotrade",
    techs: ["next", "nest", "ts", "prisma", "postgresql"],
    href: "/impotrade",
  },
  {
    image: WSQLImage,
    alt: "WSQL",
    name: "WSQL",
    techs: ["next", "ts", "tailwind"],
    href: "/websql",
  },
  {
    image: VendyxImage,
    alt: "Vendyx",
    name: "Vendyx",
    techs: ["next", "nest", "ts", "prisma", "postgresql"],
    href: "/vendyx",
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS];
