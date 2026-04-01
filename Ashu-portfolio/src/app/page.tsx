import PortfolioPage from "@/components/portfolio-page";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return <PortfolioPage data={portfolioData} />;
}
