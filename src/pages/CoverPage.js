import React, { useState } from "react";
import "./CoverPage.scss";
import SpinnyLoader from "../components/SpinnyLoader";

const CoverPage = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadStart = () => {
		setIsLoading(true);
	};

	const handleLoadedData = () => {
		setIsLoading(false);
	};

	return (
		<section className="cover">
			{isLoading && <SpinnyLoader />}
			<video
				className="cover__video"
				autoPlay
				muted
				playsInline
				loop
				onLoadStart={handleLoadStart}
				onLoadedData={handleLoadedData}
			>
				<source src="/video/intro_video.mp4" type="video/mp4" />
			</video>
		</section>
	);
};
export default CoverPage;
