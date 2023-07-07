import "./AboutPage.scss";
import "../UI/Description";
import Description from "../UI/Description";
import Emphasis from "../UI/Emphasis";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";
import Skillcards from "../components/Skillcards";
import Container from "../layout/Container";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";
import Button from "../UI/Button";

const AboutPage = () => {
  return (
    <section className="section--about">
      <Container>
        <ContainerLeft>
          <TitleBig>About Me</TitleBig>
          <Description>
            Hello, I'm <Emphasis>Yelin</Emphasis>. I am a{" "}
            <Emphasis>creative</Emphasis> developer based on Sydney. I am
            enthusiastic about web development and I am a{" "}
            <Emphasis>result-oriented</Emphasis> problem solver.
          </Description>
          <div className="about__btns">
            <Button link="/resume.pdf">Download CV</Button>
          </div>
          <TitleSmall>My Technical Stack</TitleSmall>
          <Skillcards />
        </ContainerLeft>
        <ContainerRight img="/coverImg2.png"></ContainerRight>
      </Container>
    </section>
  );
};

export default AboutPage;
