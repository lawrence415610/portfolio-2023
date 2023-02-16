import { Link } from "react-router-dom";
import CardContainer from "../UI/CardContainer";
import "./PortfolioCards.scss";

const PortfolioCards = ({ data }) => {
  return (
    <>
      <ul className="portfolio__tags">
        <li className="portfolio__tag">
          <a href="#" className="portfolio__link">
            All
          </a>
        </li>
        <li className="portfolio__tag">
          <a href="#" className="portfolio__link">
            CSS
          </a>
        </li>
        <li className="portfolio__tag">
          <a href="#" className="portfolio__link">
            React
          </a>
        </li>
        <li className="portfolio__tag">
          <a href="#" className="portfolio__link">
            Next.js
          </a>
        </li>
      </ul>

      <CardContainer>
        {data.map((item) => {
          return (
            <div
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              className="portfolio"
            >
              <Link to={item.link}></Link>
              <div className="portfolio__textbox">
                <h3 className="portfolio__title">{item.title}</h3>
                <div className="portfolio__type">{item.type}</div>
                <p className="portfolio__des">{item.des}</p>
              </div>
            </div>
          );
        })}
      </CardContainer>
    </>
  );
};

export default PortfolioCards;
