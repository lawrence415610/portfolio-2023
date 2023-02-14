import "./InformationCards.scss";

const InformationCards = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <div className="information">
            <h3 className="information__title">{item.title}</h3>
            <div className="information__sub">{`${item.time} | ${item.place}`}</div>
            <div className="information__des">{item.des}</div>
          </div>
        );
      })}
    </div>
  );
};

export default InformationCards;
