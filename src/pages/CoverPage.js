import React from "react";
import "./CoverPage.scss";

const CoverPage = () => {

  return (
    <section className="cover">
      <video className="cover__video" autoPlay muted loop>
		<source src='/video/websiteVedio.mp4' type="video/mp4" />
	  </video>
    </section>
  );
};
export default CoverPage;
