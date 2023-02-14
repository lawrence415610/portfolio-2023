import "./ResumePage.scss";
import "../UI/Description";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";
import InformationCards from "../components/InformationCards";
import Description from "../UI/Description";
import Emphasis from "../UI/Emphasis";

const experience = [
  {
    title: "UI/UX designer",
    time: "2020.8 - 2023.1",
    place: "datareachable",
    des: "Work closely with front-end team to deliver design system, user experience design and graphic design.",
  },
  {
    title: "Developer Intern",
    time: "2020.5 - 2020.7",
    place: "JR Academy",
    des: "Work in developer team as front-end developer, develop user interfaces for team project.",
  },
  {
    title: "Research Assistant",
    time: "2019.4 - 2020.4",
    place: "University of Wollongong",
    des: "Work for academy website.",
  },
];

const education = [
  {
    title: "Master of Philosophy in Computer Science",
    time: "2019.2 - 2022.2",
    place: "University of Wollongong",
    des: "Accomplished 1 conference paper and 1 journal paper.",
  },
  {
    title: "Master of Design",
    time: "2017.2 - 2018.12",
    place: "Monash University",
    des: "Read a lot of books.",
  },
];

const ResumePage = () => {
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
            <InformationCards data={experience} />
          </div>
          <div className="resume__education">
            <TitleSmall>My Education</TitleSmall>
            <InformationCards data={education} />
          </div>
        </div>
      </div>
      <div className="resume__right"></div>
    </section>
  );
};

export default ResumePage;
