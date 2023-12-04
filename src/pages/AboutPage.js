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
import MySkill from "../components/MySkill";
const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
	auth: process.env.NOTION_KEY,
});

const AboutPage = () => {
	async function getDatabase() {
		const response = await notion.databases.query({
			database_id: process.env.NOTION_DATABASE_ID,
		});
		console.log(response);
	}
	getDatabase();
	
	return (
		<section className="section--about">
			<Container>
				<ContainerLeft>
					<TitleBig>About Me</TitleBig>
					<Description>
						Hello, I'm <Emphasis>Yelin</Emphasis>. I am a{" "}
						<Emphasis>creative</Emphasis> developer based on Sydney.
						I am enthusiastic about web development and I am a{" "}
						<Emphasis>result-oriented</Emphasis> problem solver.
					</Description>
					<div className="about__btns">
						<Button link="/resume.pdf">Download CV</Button>
					</div>
					<TitleSmall>My Technical Stack</TitleSmall>
					<MySkill />
					<Skillcards />
				</ContainerLeft>
				<ContainerRight>
					<img
						style={{
							height: "100vh",
						}}
						src="/coverImg2.png"
						alt="coverImg2"
					/>
				</ContainerRight>
			</Container>
		</section>
	);
};

export default AboutPage;
