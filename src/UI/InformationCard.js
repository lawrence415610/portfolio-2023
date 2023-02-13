import "./InformationCard.scss";

const InformationCard = (props) => {
  return (
    <div className="information">
      <h3 className="information__title">{props.title}</h3>
      <div className="information__sub">{`${props.time} | ${props.place}`}</div>
      <div className="information__des">{props.des}</div>
    </div>
  );
};
export default InformationCard;
