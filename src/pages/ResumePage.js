import "./ResumePage.scss";
import "../UI/Description";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";
import InformationCard from "../UI/InformationCard";
import Description from "../UI/Description";
import Emphasis from "../UI/Emphasis";

const experience = [{ title: "UI/UX designer", time: "2020.8 - 2023.1", place: "datareachable", des: "work closely with " }];

const education = [{}];

const AboutPage = () => {
  return (
    <section className="resume">
      <div className="resume__left">
        <TitleBig>My Resume</TitleBig>
        <Description>
          I am a <Emphasis>creative</Emphasis> problem solver. My education
          background involves <Emphasis>design</Emphasis> and{" "}
          <Emphasis>computer science</Emphasis> and I have{" "}
          <Emphasis>working experience</Emphasis> in both fields.
        </Description>
        <div className="resume__detail">
          <div className="resume__experience">
            <TitleSmall>My Experience</TitleSmall>
            <InformationCard data={experience} />
          </div>
          <div className="resume__education">
            <TitleSmall>My Education</TitleSmall>
            <InformationCard data={education} />
          </div>
        </div>
      </div>
      <div className="resume__right"></div>
    </section>
  );
};

export default AboutPage;
