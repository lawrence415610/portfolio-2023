import "./Skillcards.scss";
import CardContainer from "../UI/CardContainer";
import Card from "../UI/Card";
const data = [
	{
		icon: "bi bi-filetype-jsx",
		title: "React / Angular",
		des: "Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, jQuery, Angular, React, TailwindCSS)",
	},
	{
		icon: "bi bi-database",
		title: "Redux",
		des: "Can use centralized state manage tool to build complex web app.",
	},
	{
		icon: "bi bi-box-seam",
		title: "NodeJs, SQL",
		des: "Knowledge of multiple back-end languages (e.g. C#, Python) and Node.js, Express, MongoDB, SQL",
	},
	{
		icon: "bi bi-pencil",
		title: "UX Design",
		des: "UI / UX creativity and skill",
	},
];

const Skillcards = () => {
  return (
    <CardContainer>
      {data.map((item,index) => {
        return (
          <Card key={index} className="skillcard__container">
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
