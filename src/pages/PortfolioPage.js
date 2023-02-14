import "./PortfolioPage.scss";
import "../UI/Description";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";

const PortfolioPage = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__left">
        <TitleBig>Portfolio</TitleBig>
        <TitleSmall>My Recent Development Work</TitleSmall>
      </div>
      <div className="portfolio__right"></div>
    </section>
  );
};

export default PortfolioPage;
