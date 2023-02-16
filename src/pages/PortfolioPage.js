import "./PortfolioPage.scss";
import "../UI/Description";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";
import Description from "../UI/Description";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";
import Container from "../layout/Container";
import Emphasis from "../UI/Emphasis";
import PortfolioCards from "../components/PortfolioCards";

const PortfolioPage = () => {


  const data = [
    {
      img: "/1.jpg",
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
      title: "React Redux Order App",
      type: "React",
      link: "/",
      des: "Use React, react router, react redux, .",
    },
    {
      img: "/1.jpg",
      title: "React ",
      type: "React",
      link: "/",
      des: "A responsive Portfolio created by React. Use React Router to manage web links and use lazy loading to improve performance. Use SCSS to manage the CSS file.",
    },
  ];

  return (
    <section className="section--portfolio">
      <Container className="portfolio">
        <ContainerLeft>
          <TitleBig>My Portfolio</TitleBig>
          <Description>
            I am familiar with <Emphasis>HTML5</Emphasis>,{" "}
            <Emphasis>CSS3</Emphasis>, to create{" "}
            <Emphasis>Responsive Web application</Emphasis>. I also use{" "}
            <Emphasis>Figma</Emphasis> to design, and use{" "}
            <Emphasis>React</Emphasis> and <Emphasis>Redux</Emphasis> to deliver
            highly-efficient front-end experience. I can also use{" "}
            <Emphasis>Next.js</Emphasis> to create commercial website.
          </Description>
          <TitleSmall>My works</TitleSmall>
          <PortfolioCards data={data}></PortfolioCards>
        </ContainerLeft>

        <ContainerRight img="/3.jpg"></ContainerRight>
      </Container>
    </section>
  );
};

export default PortfolioPage;
