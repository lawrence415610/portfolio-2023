import React from "react";
import "./MySkill.scss";
import { Box } from "@mui/system";

// const COLORS = [
// 	"#bbf7d0",
// 	"#99f6e4",
// 	"#bfdbfe",
// 	"#ddd6fe",
// 	"#f5d0fe",
// 	"#fed7aa",
// 	"#fee2e2",
// ];

const TAGS = [
	"HTML",
	"CSS",
	"JavaScript",
	"Typescript",
	"Angular",
	"Tailwind",
	"React",
	"Next.js",
	"Node.js",
	"UI/UX",
	"Figma",
	"ESLint",
	"Webpack",
	"Jest",
	"Redux",
	"React Router",
	"React Hook Form",
	"Redux Toolkit",
	"Firebase",
	"Material UI",
	"Storybook",
	"ChatGPT",
	"Midjourney",
	"Python",
	"C#",
	"SQL",
	"MongoDB",
	"Express",
	"Git",
	"GitHub",
	".Net",
];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
	return (
		<div
			className="loop-slider"
			style={{
				"--duration": `${duration}ms`,
				"--direction": reverse ? "reverse" : "normal",
			}}
		>
			<div className="inner">
				{children}
				{children}
			</div>
		</div>
	);
};

const Tag = ({ text }) => (
	<div className="tag">
		<span>#</span> {text}
	</div>
);

const MySkill = () => (
	<Box
		sx={{
			width: "100%",
			alignItems: "center",
			marginTop: "50px",
			marginBottom: "50px",
		}}
	>
		<Box className="tag-list">
			{[...new Array(ROWS)].map((_, i) => (
				<InfiniteLoopSlider
					key={i}
					duration={random(DURATION - 5000, DURATION + 5000)}
					reverse={i % 2}
				>
					{shuffle(TAGS)
						.slice(0, TAGS_PER_ROW)
						.map((tag) => (
							<Tag text={tag} key={tag} />
						))}
				</InfiniteLoopSlider>
			))}
			<Box className="fade" />
		</Box>
	</Box>
);

export default MySkill;
