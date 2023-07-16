import "./PortfolioPage.scss";
import "../UI/Description";
import TitleSmall from "../UI/TitleSmall";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";
import Container from "../layout/Container";
import PortfolioCards from "../components/PortfolioCards";
import TitleBig from "../UI/TitleBig";
import Clock from "../components/BinaryClock";
import { Box } from "@mui/system";
//TODO: use GraphQL to fetch Github commit data and build heatmap myself
const PortfolioPage = () => {
	return (
		<section className="section--portfolio">
			<Container className="portfolio">
				<ContainerLeft>
					<TitleBig>My Portfolio</TitleBig>
					<TitleSmall>Demo Projects</TitleSmall>
					<PortfolioCards />
				</ContainerLeft>
				<ContainerRight>
					<Box>
						<Box sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}>
							<Clock />
						</Box>
						<img
							style={{
								height: "100vh",
							}}
							src="/coverImg1.png"
							alt="coverImg1"
						/>
					</Box>
				</ContainerRight>
			</Container>
		</section>
	);
};

export default PortfolioPage;
