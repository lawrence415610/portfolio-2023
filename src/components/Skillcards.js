import "./Skillcards.scss";
import CardContainer from "../UI/CardContainer";
import Card from "../UI/Card";
const data = [
	{
		icon: "bi bi-filetype-jsx",
		title: "React",
		des: "Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)",
	},
	{
		icon: "bi bi-database",
		title: "Redux",
		des: "Use centralized state manage tool to build complex web app.",
	},
	{
		icon: "bi bi-box-seam",
		title: "NodeJs",
		des: "Knowledge of multiple back-end languages (e.g. C#, Python) and Node.js",
	},
	{
		icon: "bi bi-pencil",
		title: "Design",
		des: "Excellent UI / UX creativity and skill",
	},
];

const Skillcards = () => {
  return (
    <CardContainer>
      {data.map((item) => {
        return (
          <Card className="skillcard__container">
            <i className={`${item.icon} skillcard__icon`}></i>
            <h4 className="skillcard__title">{item.title}</h4>
            <div className="skillcard__des">{item.des}</div>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default Skillcards;
