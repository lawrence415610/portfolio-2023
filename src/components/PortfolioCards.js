import { useState } from "react";
import { Link } from "react-router-dom";
import {
	Box,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	ToggleButtonGroup,
	ToggleButton,
	IconButton,
	Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./PortfolioCards.scss";

const data = [
	{
		img: "/AIGCCover.png",
		title: "AIGC Image Gallery",
		type: "ai",
		link: "https://css-practice-1.pages.dev/",
		des: "A website to show the image gallery of AIGC. All the images are created by midjournay and other image generation tools. Use SCSS to manage the CSS file.",
	},
	{
		img: "/1.jpg",
		title: "React Data Dashboard",
		type: "react",
		link: "https://ddsn-code-test.pages.dev/",
		des: "Use React, React router, React redux to build a data app to get important data.",
	},
	{
		img: "/iasanaCover.png",
		title: "Iasana Team Kanban",
		type: "react",
		link: "https://agile-project-manager.now.sh/home",
		des: "React, Redux, Typescript, Storybook, Material UI, React Beautiful DND, React Router, React Hook Form, React Testing Library, Jest",
	},
	{
		img: "/portfolioCover.png",
		title: "React Personal Portfolio",
		type: "react",
		link: "https://yelinliu.com",
		des: "A responsive Portfolio created by React. Use React Router to manage web links and use lazy loading to improve performance. Use SCSS to manage the CSS file.",
	},
];

const PortfolioCards = () => {
	const [alignment, setAlignment] = useState("all");

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	const filteredData =
		alignment === "all"
			? data
			: data.filter((item) => item.type === alignment);

	return (
		<Box>
			<ToggleButtonGroup
				color="primary"
				value={alignment}
				onChange={handleAlignment}
				exclusive
				sx={{
					width: "100%",
					padding: "0 40px",
				}}
			>
				<ToggleButton value="all">All</ToggleButton>
				<ToggleButton value="react">React</ToggleButton>
				<ToggleButton value="ai">AI</ToggleButton>
				<ToggleButton value="nextjs">NestJs</ToggleButton>
			</ToggleButtonGroup>
			<Box
				sx={{
					width: "100%",
					padding: "40px",
				}}
			>
				<ImageList variant="masonry" cols={2} gap={40}>
					{filteredData.map((item) => (
						<Link to={item.link}>
							<ImageListItem key={item.title}>
								<img
									src={item.img}
									srcSet={item.img}
									alt={item.title}
									loading="lazy"
								/>
								<ImageListItemBar
									title={<h4>{item.title}</h4>}
									subtitle={`Build with ${item.type}`}
									actionIcon={
										<Tooltip title={item.des} arrow>
											<IconButton
												sx={{
													color: "rgba(255, 255, 255, 0.54)",
												}}
												aria-label={`info about ${item.title}`}
											>
												<InfoIcon />
											</IconButton>
										</Tooltip>
									}
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
