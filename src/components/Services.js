import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
//Images
import eslandscape from "../images/eslandscape.jpg";
//Icons
import { SiWebmoney, SiMaterialdesign } from "react-icons/si";
import { DiGhostSmall } from "react-icons/di";
import { FaHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <ServicesStyled className="section">
      <div class="text-container">
        <h1 class="section-heading">What I Do</h1>
        <span class="line"></span>
        <div class="quads-container">
          <div class="quad quad1">
            <div class="quad-heading">
              <SiWebmoney size="50px" className="serviceIcon" />
              <h2>Web Development</h2>
            </div>
            <p>
              I have a passion for developing pixel-perfect websites and apps
              while maintaining clean, modular, and DRY code base that provides
              for reusable components.
            </p>
          </div>
          <div class="quad quad2">
            <div class="quad-heading">
              <DiGhostSmall size="50px" className="serviceIcon" />
              <h2>Responsive UI Design</h2>
            </div>
            <p>
              <span class="strong">
                "A user interface is like a joke. If you have to explain it,
                it's not that good."
              </span>
              I strive to develop and implement responsive and aesthetically
              pleasing interfaces for websites and apps that provides for any
              device or platform.
            </p>
          </div>
          <div class="quad quad3">
            <div class="quad-heading">
              <SiMaterialdesign size="50px" className="serviceIcon" />
              <h2>Experience Design</h2>
            </div>
            <p>
              The biggest problem for many app designs is the unncessary
              complexity for the users. My goal is to emphasize intuitive UI for
              everyday people in everyday places.
            </p>
          </div>
          <div class="quad quad4">
            <div class="quad-heading">
              <FaHandshake size="50px" className="serviceIcon" />
              <h2>Customer Service</h2>
            </div>
            <p>
              <span class="strong">
                If you're not happy- I'm not finished!{" "}
              </span>
              Creating solutions that I genuinely believe are useful and
              desirable. I am focused on translating seeds of great ideas into
              powerful and organized code.
            </p>
          </div>
        </div>
      </div>
    </ServicesStyled>
  );
};

export default Services;

const ServicesStyled = styled(motion.section)`
  padding: 2rem 0;
  width: auto;
  height: max-content;

  .text-container {
    margin: 0 auto 3rem auto;
    width: 85%;
    height: 650px;
    display: flex;
    flex-direction: column;
  }
  .section-heading {
    color: #f2f2f2;
    font-size: 3em;
    padding: 0;
    margin: 1rem 0 0 0;
    font-family: initial;
    text-shadow: 1px 1px 5px grey;
  }

  .line {
    margin: 1rem 0 2.5rem 0;
  }

  .quads-container {
    width: 100%;
    height: 100%;
    /* border: 2px solid lightblue; */
    display: grid;
    /* justify-self: center; */
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    min-height: max-content;
    grid-template-areas:
      "quad1 quad2"
      "quad3 quad4";
    padding: 40px 30px;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    margin: initial 2rem initial 2rem;
  }

  .quad {
    margin: 0.3rem 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    font-family: Roboto, sans-serif;
    font-weight: lighter;
    color: white;
    text-shadow: 2px 2px 2.5px rgb(17, 17, 17);
    padding: 10px 0;
  }

  p {
    font-size: 1rem;
  }

  .quad-heading {
    display: flex;
    padding: 1rem 0;

    h2 {
      text-align: left;
      align-items: center;
      display: flex;
    }

    .serviceIcon {
      margin-right: 1rem;
    }
  }

  &:after {
    content: " ";
    position: absolute;
    transform: translateZ(-0.5px) scale(1.5);
    z-index: -100;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${eslandscape});
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: center center;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 950px) {
    .text-container {
      height: max-content;
    }
    .quads-container {
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: 1200px) {
    background-size: contain;
    width: 100vw;
    background-size: 100vw;
  }
`;
