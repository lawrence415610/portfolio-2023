import "./ContainerRight.scss";

const ContainerRight = (props) => {
  return (
    <div
      className="container--right"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      {props.children}
    </div>
  );
};

export default ContainerRight;
