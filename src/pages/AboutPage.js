import "./AboutPage.scss";
import "../UI/Description";
import Description from "../UI/Description";
import Emphasis from "../UI/Emphasis";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";
import Skillcards from "../components/Skillcards";

const AboutPage = () => {
  return (
    <section className="about">
      <div className="about__left">
        <TitleBig>About Me</TitleBig>
        <Description>
          Hello, I'm <Emphasis>Yelin</Emphasis>. I am a <Emphasis>creative</Emphasis> developer based on Sydney. I am
          enthusiastic about web development and I am a <Emphasis>result-oriented</Emphasis> problem solver.
        </Description>
        <div className="about__btns">btn</div>
        <TitleSmall>My Technical Stack</TitleSmall>
        <Skillcards />
      </div>
      <div className="about__right"></div>
    </section>
  );
};

export default AboutPage;
