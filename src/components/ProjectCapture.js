import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
//Project Images
import captureLarge from "../images/capture/captureLarge.png";
import captureMedium from "../images/capture/captureMedium.png";
import captureSmall from "../images/capture/captureSmall.png";

const ProjectCapture = () => {
  return (
    <CaptureStyled className="project capture">
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
          <h2 className="project-name">Capture</h2>
          <div className="description-buttons">
            <a
              href="https://lpatipat.github.io/capture/"
              target="_blank"
              className="demo"
            >
              DEMO
            </a>
            <a
              href="https://github.com/lpatipat/capture"
              target="_blank"
              className="code"
            >
              CODE
            </a>
          </div>
        </div>
        <p>
          This is a three paged website that showcases mobile friendly design
          and transition animations. The theme is geared towards a plausible
          design for a business solution for photography professionals. The rest
          of the site is mostly occupied by lorem ipsum text.
        </p>
        <div className="tags-container">
          <div className="tag">
            <p>React</p>
          </div>
          <div className="tag">
            <p>Styled Components</p>
          </div>
          <div className="tag">
            <p>Framer Motion</p>
          </div>
        </div>
      </div>
    </CaptureStyled>
  );
};

export default ProjectCapture;

const CaptureStyled = styled(motion.div)`
  .lg {
    width: 100%;
    padding-top: 56.25%;
    background: url(${captureLarge}) no-repeat center;
    background-size: cover;
  }

  .md {
    width: 100%;
    padding-top: 130.33%;
    background: url(${captureMedium}) no-repeat center;
    background-size: cover;
  }

  .sm {
    width: 100%;
    padding-top: 177.77%;
    background: url(${captureSmall}) no-repeat center;
    background-size: cover;
  }
`;
