import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
// Projects
import ProjectIgnite from "./ProjectIgnite";
import ProjectCapture from "./ProjectCapture";
import ProjectWaves from "./ProjectWaves";
const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Canvas>
        <div className="section-heading">
          <h1>Some Of My Work</h1>
        </div>
        <ProjectWaves />
        <ProjectIgnite />
        <ProjectCapture />
      </Canvas>
    </PortfolioStyled>
  );
};

export default Portfolio;

const PortfolioStyled = styled(motion.div)`
  height: max-content;
  /* height: max-content; */
  width: 100%;
  background: #1b1b1b;
  /* display: none; */
`;

const Canvas = styled(motion.div)`
  color: #f2f2f2;
  margin: 0 auto;
  width: 85%;
  padding: 4rem 0;
  display: flex;
  position: relative;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  .section-heading {
    color: inherit;
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
    font-family: initial;
    text-shadow: 1px 1px 5px grey;
    width: 100%;
  }
  .project {
    /* border: 1px solid white; */
    height: max-content;
    width: 100%;
    padding-bottom: 2rem;
    .line {
      margin-bottom: 5.5rem;
    }
  }
  .project-description {
    margin-top: 2.6rem;
    .header-container {
      display: flex;
      justify-content: space-between;
      .description-buttons {
        display: flex;
        align-self: center;
        a {
          text-decoration: none;
          padding: 7px 13px;
          border: 1.5px solid orange;
          border-radius: 5px;
          margin: 0 13px;
          font-weight: medium;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.5s ease;
          letter-spacing: 1px;
          color: white;
          &:hover {
            background: orange;
            cursor: pointer;
          }
        }
      }
    }

    .project-name {
      text-transform: uppercase;
      font-family: "Gotham", sans-serif;
      font-weight: bolder;
      color: white;
      letter-spacing: 2px;
      font-size: 24px;
      height: max-content;
      align-self: center;
      text-shadow: 1px 1px 6px grey;
    }
    p {
      margin-top: 1.8rem;
      font-size: 16.6px;
      opacity: 0.8;
      font-family: "Raleway", sans-serif;
      font-weight: regular;
      line-height: 150%;
    }
  }
  .tags-container {
    margin-top: 2rem;
    height: max-content;
    width: 100%;
    display: block;
    flex-basis: auto;
  }
  .tag {
    display: inline-block;
    width: max-content;
    /* height: 100%; */
    padding: 1.5px 9px;
    background: #4d4d4d;
    border-radius: 3px;
    margin: 5px 8px 5px 0;
    p {
      color: white;
      width: max-content;
      margin: 0;
      font-size: 8.8px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
  .image-field {
    /* border: 1px solid lightblue; */
    height: auto;
    width: 100%;
    position: relative;
    display: flex;
  }
`;
