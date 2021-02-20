import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";

const ResumeRibbon = () => {
  return (
    <RibbonStyled>
      <div className="focal-point">
        <h2>
          <a href="../data/resume.pdf" download>
            view my full resume
          </a>
        </h2>
      </div>
    </RibbonStyled>
  );
};

export default ResumeRibbon;

export const RibbonStyled = styled(motion.div)`
  width: 100%;
  height: 14vh;
  /* background: #47c2eb; */
  display: flex;
  background: #00b7c7;
  transition: all 0.2s ease;
  cursor: pointer;
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
  }
  h2 {
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: #f2f2f2;
    font-size: 16px;
    font-family: "Gotham", sans-serif;
    letter-spacing: 1px;
    text-shadow: 0px 0px 15px #f2f2f2;
    align-self: center;
    justify-self: center;
    width: 100%;
  }
  &:hover {
    background: #10c9da;
  }
`;
