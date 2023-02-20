import React from "react";

import "./CoverPage.scss";

const CoverPage = () => {

  return (
    <section className="cover">
      <h1 className="cover__title">
        <span className="cover__name">
          <span className="cover__name--left">Yelin</span>
          <span className="cover__name--right">Liu</span>
        </span>
        <span className="cover__job">
          <span className="cover__job--left">I'm a </span>
          <span className="cover__job--right">creative developer.</span>
        </span>
      </h1>
    </section>
  );
};
export default CoverPage;
