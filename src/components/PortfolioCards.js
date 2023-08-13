import { useState, useEffect } from "react";
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
		img: "/iasanaCover.png",
		title: "Iasana Team Kanban",
		type: "react",
		link: "https://agile-project-manager.now.sh/home",
		des: "React, Redux, Typescript, Storybook, Material UI, React Beautiful DND, React Router, React Hook Form, React Testing Library, Jest",
	},
	{
		img: "/designPortfolio.png",
		title: "Design Portfolio",
		type: "design",
		link: "https://issuu.com/yelinliu/docs/yelin_s_portfolio_v3",
		des: "My personal UI/UX design portfolio.",
	},
	{
		img: "/AIGCCover.png",
		title: "AIGC Image Gallery",
		type: "design",
		link: "https://css-practice-1.pages.dev/",
		des: "A website to show the image gallery of AIGC. All the images are created by midjourney and other image generation tools. Use SCSS to manage the CSS file.",
	},
	{
		img: "/1.jpg",
		title: "DDSN Code Test",
		type: "react",
		link: "https://ddsn-code-test.pages.dev/",
		des: "It is a pure HTML CSS JS website as a code test given by a digital agency, designed as client request.",
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

	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth,
	});

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
				<ToggleButton value="design">Design</ToggleButton>
				<ToggleButton value="nextjs">NestJs</ToggleButton>
			</ToggleButtonGroup>
			<Box
				sx={{
					width: "100%",
					padding: "40px",
				}}
			>
				<ImageList
					variant="masonry"
					cols={screenSize.width < 1080 ? 1 : 2}
					gap={12}
				>
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
