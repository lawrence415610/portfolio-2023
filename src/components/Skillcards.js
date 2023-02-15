import "./Skillcards.scss";
import CardContainer from "../UI/CardContainer";
import Card from "../UI/Card";
const data = [
  {
    icon: "bi bi-filetype-html",
    title: "HTML5",
    des: "Use senmantic HTML to improve the SEO result.",
  },
  {
    icon: "bi bi-filetype-scss",
    title: "SCSS",
    des: "Use advanced CSS skill to create beautiful animations.",
  },
  {
    icon: "bi bi-filetype-jsx",
    title: "React",
    des: "Use reusable UI library to streamline front-end work.",
  },
  {
    icon: "bi bi-database",
    title: "Redux",
    des: "Use centralized state manage tool to build complex web app.",
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
