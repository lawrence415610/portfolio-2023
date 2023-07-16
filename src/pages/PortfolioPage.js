import "./PortfolioPage.scss";
import "../UI/Description";
import TitleSmall from "../UI/TitleSmall";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";
import Container from "../layout/Container";
import PortfolioCards from "../components/PortfolioCards";
import Box from "@mui/material/Box";

//TODO: Add github chart, using heatmap and github api

const PortfolioPage = () => {
  return (
		<section className="section--portfolio">
			<Container className="portfolio">
				<ContainerLeft>
					<TitleSmall>Coding History</TitleSmall>
					<Box
						sx={{
							width: "80%",
							margin: "0 auto",
							paddingBottom: "40px",
						}}
					>
						
						<img
							src="https://ghchart.rshah.org/9d00c9/lawrence415610"
							alt="Lawrence's Github Chart"
							style={{ width: "100%" }}
						/>
					</Box>
					<TitleSmall>Demo Projects</TitleSmall>
					<PortfolioCards />
				</ContainerLeft>
				<ContainerRight img="/coverImg1.png"></ContainerRight>
			</Container>
		</section>
  );
};

export default PortfolioPage;
