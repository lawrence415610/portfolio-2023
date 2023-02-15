import Card from "../UI/Card";
import CardContainer from "../UI/CardContainer";
import "./InformationCards.scss";

const InformationCards = ({ data }) => {
  return (
    <CardContainer>
      {data.map((item) => {
        return (
          <Card className="information">
            <h3 className="information__title">{item.title}</h3>
            <div className="information__sub">{item.time}<br></br>{item.place}</div>
            <div className="information__des">{item.des}</div>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default InformationCards;
