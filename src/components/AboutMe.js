import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
//Images
import pumpkinBoy from "../images/pumpkinBoy.png";

const AboutMe = () => {
  return (
    <Content1 id="about">
      <AboutStyled>
        <div class="text-container">
          <h1 class="section-heading">Hello, I'm Patipat.</h1>
          <p class="section-subheading">
            I'm a detail oriented web developer with an eye for design. My
            passion is combining beautiful code with beautiful design.
          </p>
          <span class="line"></span>
          <div class="section-about">
            <p>
              <span class="strong">
                I'm currently a first year student at Drew University in
                Madison, New Jersey
              </span>{" "}
              studying computer science. My work revolves around developing and
              designing software for the web, from simple landing pages to
              contemporary web applications. Each line of code is hand crafted
              for the purpose of building software that provides pixel-perfect
              user experiences.
            </p>
            <p>
              I look forward to my work each day, as every day I have is an
              opportunity to improve. I love learning new and better ways to
              create interactive user experiences with clean and organized code.
              In the future, I hope to be able to work full time to build the
              web alongside people that bring out the best in me.
            </p>
            <p>
              <div class="strong">
                When I'm not in front of a computer screen...
              </div>{" "}
              I find myself playing the guitar or enjoying myself on a nice
              ferry boat ride at the New York Waterway.
            </p>
          </div>
        </div>
        <ImageField>
          <div className="img-container">
            <img src={pumpkinBoy} alt="" />
          </div>
        </ImageField>
      </AboutStyled>
    </Content1>
  );
};

export default AboutMe;

const Content1 = styled(motion.section)`
  background: #1b1b1b;
  width: 100vw;
  min-height: max-content;
  overflow: hidden;
  z-index: 999;
  // Toggle Display
  /* display: none; */
`;

const AboutStyled = styled(motion.div)`
  color: #f2f2f2;
  margin: 0 auto;
  width: 85%;
  height: max-content;
  padding: 3rem 0;
  display: flex;
  position: relative;
  font-family: Roboto, sans-serif;
  .text-container {
    width: 100%;
  }

  .text-container .section-heading {
    color: inherit;
    font-size: 3em;
    padding: 0;
    margin: 0;
    font-family: initial;
    text-shadow: 1px 1px 5px grey;
  }
  .text-container .section-subheading {
    color: inherit;
    padding: 0;
    margin: 10px 0;
    opacity: 0.8;
    font-weight: bold;
    font-size: 17.2px;
    line-height: 140%;
    width: 100%;
    letter-spacing: 0.3px;
  }
  .section-about {
    padding: 0;
    margin: 1em 0;
    color: inherit;
    font-family: inherit;
    font-weight: medium;
    font-size: 15.2px;
    line-height: 1.6em;
    opacity: 0.9;
    width: 100%;
    letter-spacing: 0.3px;
  }
  .section-about p {
    margin: 1.75em 0;
  }
  .section-about p:nth-of-type(4) {
    margin-top: 2.5em;
    width: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    .text-container {
      width: 100%;
    }
  }
`;

const ImageField = styled(motion.div)`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  align-self: center;
  .image-container {
    margin: 0;
    width: max-content;
  }
  img {
    width: 100%;
    height: auto;
    max-width: 450px;
    border: 10px solid #eb923a;
    border-radius: 50%;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;
