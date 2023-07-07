import "./PortfolioPage.scss";
import "../UI/Description";
import TitleSmall from "../UI/TitleSmall";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";
import Container from "../layout/Container";
import PortfolioCards from "../components/PortfolioCards";

const PortfolioPage = () => {


  const data = [
    {
      img: "/portfolio.jpg",
      title: "React Personal Portfolio",
      type: "React",
      link: "/",
      des: "A responsive Portfolio created by React. Use React Router to manage web links and use lazy loading to improve performance. Use SCSS to manage the CSS file.",
    },
    {
      img: "/1.jpg",
      title: "Nature Landing Page",
      type: "CSS",
      link: "/",
      des: "A landing page created by HTML5, CSS3, using SCSS to manage the files.",
    },
    {
      img: "/1.jpg",
      title: "React Data Dashboard",
      type: "React",
      link: "/",
      des: "Use React, React router, React redux to build a data app to get important data.",
    },
    {
      img: "/1.jpg",
      title: "Team Kanban",
      type: "React",
      link: "/",
      des: "A responsive Portfolio created by React. Use React Router to manage web links and use lazy loading to improve performance. Use SCSS to manage the CSS file.",
    },
  ];

  return (
    <section className="section--portfolio">
      <Container className="portfolio">
        <ContainerLeft>
          <TitleSmall>Demo Projects</TitleSmall>
          <PortfolioCards data={data}></PortfolioCards>
        </ContainerLeft>
        <ContainerRight img="/coverImg1.png"></ContainerRight>
      </Container>
    </section>
  );
};

export default PortfolioPage;
