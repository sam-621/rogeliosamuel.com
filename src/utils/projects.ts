import ImpotradeImage from "../assets/images/impotrade.png";
import VendyxImage from "../assets/images/vendyx.png";
import WSQLImage from "../assets/images/wsql.png";
import AureoRealtyImage from "../assets/images/aureo-realty.png";
import FitnesscorpImage from "../assets/images/fitnesscorp.png";
import TicTacToeImage from "../assets/images/tic-tac-toe.webp";

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

export const SECONDARY_PROJECTS: typeof FEATURED_PROJECTS = [
  {
    name: "Aureo Realty",
    image: AureoRealtyImage,
    alt: "Aureo Realty",
    techs: ["next", "nest", "ts", "aws", "prisma", "postgresql"],
    href: "https://www.aureorealty.com/",
  },
  {
    name: "Fitnesscorp",
    image: FitnesscorpImage,
    alt: "Fitnesscorp",
    techs: ["next", "nest", "ts", "prisma", "postgresql"],
    href: "https://sistema.fitnesscorp.com.mx/",
  },
  {
    name: "Tic Tac Toe",
    image: TicTacToeImage,
    alt: "Tic Tac Toe",
    techs: ["react", "ts", "socket-io"],
    href: "https://tictactoe-multi.vercel.app/",
  },
];
