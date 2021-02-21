import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
//Project Images
import wavesLarge from "../images/waves/wavesLarge.png";
import wavesMedium from "../images/waves/wavesMedium.png";
import wavesSmall from "../images/waves/wavesSmall.png";

const ProjectCapture = () => {
  return (
    <WavesStyled className="project waves">
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
          <h2 className="project-name">Waves</h2>
          <div className="description-buttons">
            <a
              href="https://lpatipat.github.io/react-player/"
              target="_blank"
              className="demo"
            >
              DEMO
            </a>
            <a
              href="https://github.com/lpatipat/react-player/tree/master"
              target="_blank"
              className="code"
            >
              CODE
            </a>
          </div>
        </div>
        <p>
          Waves is a simple music player that uses data manually logged into the
          code. This was my first project created with react, utilizing a
          components based organization. Here, Sass styling is implemented to be
          simplistic and easy to reuse for additions in the future.
        </p>
        <div className="tags-container">
          <div className="tag">
            <p>React</p>
          </div>
          <div className="tag">
            <p>Sass</p>
          </div>
          <div className="tag">
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </WavesStyled>
  );
};

export default ProjectCapture;

const WavesStyled = styled(motion.div)`
  .lg {
    width: 100%;
    padding-top: 56.25%;
    background: url(${wavesLarge}) no-repeat center;
    background-size: cover;
  }

  .md {
    width: 100%;
    padding-top: 130.33%;
    background: url(${wavesMedium}) no-repeat center;
    background-size: cover;
  }

  .sm {
    width: 100%;
    padding-top: 177.77%;
    background: url(${wavesSmall}) no-repeat center;
    background-size: cover;
  }
`;
