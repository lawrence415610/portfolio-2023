import { Link } from "react-router-dom";
import Card from "../UI/Card";
import CardContainer from "../UI/CardContainer";
import "./PortfolioCards.scss";

const PortfolioCards = ({ data }) => {
  return (
    <>
      <div className="portfolio__tag">portfolio tag</div>
      <CardContainer>
        {data.map((item) => {
          console.log(item.img);
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
