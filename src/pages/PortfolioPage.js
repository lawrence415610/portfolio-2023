import "./PortfolioPage.scss";
import "../UI/Description";
import TitleSmall from "../UI/TitleSmall";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";
import Container from "../layout/Container";
import PortfolioCards from "../components/PortfolioCards";
//TODO: use GraphQL to fetch Github commit data and build heatmap myself
const PortfolioPage = () => {
	return (
		<section className="section--portfolio">
			<Container className="portfolio">
				<ContainerLeft>
					<TitleSmall>Demo Projects</TitleSmall>
					<PortfolioCards />
				</ContainerLeft>
				<ContainerRight img="/coverImg1.png"></ContainerRight>
			</Container>
		</section>
	);
};

export default PortfolioPage;
