import { Link, NavLink } from "react-router-dom";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import "./PortfolioCards.scss";

const PortfolioCards = ({ data }) => {
	return (
		<Box>
			<ul className="portfolio__tags">
				<li className="portfolio__tag">
					<NavLink href="#" className="portfolio__link">
						All
					</NavLink>
				</li>
				<li className="portfolio__tag">
					<NavLink href="#" className="portfolio__link">
						CSS
					</NavLink>
				</li>
				<li className="portfolio__tag">
					<NavLink href="#" className="portfolio__link">
						React
					</NavLink>
				</li>
				<li className="portfolio__tag">
					<NavLink href="#" className="portfolio__link">
						Next.js
					</NavLink>
				</li>
			</ul>

			<Box
				sx={{
					width: "100%",
					padding: "40px",
				}}
			>
				<ImageList variant="masonry" cols={2} gap={40}>
					{data.map((item) => (
						<Link to={item.link}>
							<ImageListItem key={item.img}>
								<img
									src={item.img}
									srcSet={item.img}
									alt={item.title}
									loading="lazy"
								/>
								<ImageListItemBar
									position="below"
									title={item.title}
								/>
							</ImageListItem>
						</Link>
					))}
				</ImageList>
			</Box>
		</Box>
	);
};

export default PortfolioCards;
