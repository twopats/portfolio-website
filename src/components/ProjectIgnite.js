import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
//Project Images
import igniteLarge from "../images/ignite/igniteLarge.png";
import igniteMedium from "../images/ignite/igniteMedium.png";
import igniteSmall from "../images/ignite/igniteSmall.png";

const ProjectIgnite = () => {
  return (
    <IgniteStyled className="project ignite">
      <div className="line"></div>
      <div className="image-field">
        <div className="img-lg-container ">
          <div className="lg"></div>
        </div>
        <div className="img-md-container ">
          <div className="md"></div>
        </div>
        <div className="img-sm-container ">
          <div className="sm"></div>
        </div>
      </div>
      <div className="project-description">
        <div className="header-container">
          <h2 className="project-name">Ignite</h2>
          <div className="description-buttons">
            <a
              href="https://lpatipat.github.io/ignite/"
              target="_blank"
              className="demo"
            >
              DEMO
            </a>
            <a
              href="https://github.com/lpatipat/ignite"
              target="_blank"
              className="code"
            >
              CODE
            </a>
          </div>
        </div>
        <p>
          Ignite is a web application that fetches latest video game data via
          axos from the rawg.io api. The information are arranged into
          minilastically styled cards for each game component that displays the
          information in an intuitive manner. Another savvy feature is the
          search bar that navigates through states as the key is updated via the
          input.
        </p>
        <div className="tags-container">
          <div className="tag">
            <p>React</p>
          </div>
          <div className="tag">
            <p>Redux</p>
          </div>
          <div className="tag">
            <p>Axios</p>
          </div>
          <div className="tag">
            <p>API</p>
          </div>
          <div className="tag">
            <p>Javascript</p>
          </div>
          <div className="tag">
            <p>Styled Components</p>
          </div>
        </div>
      </div>
    </IgniteStyled>
  );
};

export default ProjectIgnite;

const IgniteStyled = styled(motion.div)`
  .lg {
    width: 100%;
    padding-top: 56.25%;
    background: url(${igniteLarge}) no-repeat center;
    background-size: cover;
  }

  .md {
    width: 100%;
    padding-top: 130.33%;
    background: url(${igniteMedium}) no-repeat center;
    background-size: cover;
  }

  .sm {
    width: 100%;
    padding-top: 177.77%;
    background: url(${igniteSmall}) no-repeat center;
    background-size: cover;
  }
`;
