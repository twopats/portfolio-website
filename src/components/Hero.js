import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
//Images
import portalbg from "../images/portalbg.jpg";
import clouds from "../images/clouds.png";

const Hero = () => {
  return (
    <HeroStyled className="parallax">
      <Clouds />
      <div className="introduction">
        <div className="name">
          <h1>Patipat Luangwirun</h1>
        </div>
        <div className="subtitle">
          <h2>Front End Web Developer</h2>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;

const HeroStyled = styled(motion.section)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  .introduction {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 1em;
    z-index: 501;
    margin-bottom: 3rem;
  }

  .introduction .name h1 {
    margin: 0.7rem 0;
    font-size: 3rem;
    color: #f3f3f3;
    /* color: #464648; */
    text-transform: uppercase;
    text-shadow: 0.05em 0.035em 10px #f3f3f3;
    letter-spacing: 10px;
    z-index: 100;
  }
  .introduction .subtitle h2 {
    margin: 0.7rem 0;
    color: white;
    text-transform: uppercase;
    text-shadow: 0.08em 0.07em 7px #f3f3f3;
  }

  }
  &:after {
    content: " ";
    position: absolute;
    transform: translateZ(-0.5px) scale(1.5);
    background-size: 100%;
    z-index: -100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${portalbg});
    background-repeat: no-repeat;
    background-position-y: 50%;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 700px) {
    .introduction .name h1 {
      font-size: 2.25rem;
    }
  }
`;

const Clouds = styled(motion.div)`
  background: url(${clouds}) no-repeat 50% 50%;
  background-size: cover;
  position: absolute;
  width: 110vw;
  height: 110vh;
  opacity: 0.15;
  z-index: 9;
`;
