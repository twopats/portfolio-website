import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";

const ResumeRibbon = () => {
  return (
    <RibbonStyled>
      <div className="focal-point">
        <h2>view my full resume</h2>
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
  .focal-point {
    align-self: center;
    justify-self: center;
    text-align: center;
    width: 100%;
  }
  h2 {
    font-weight: bold;
    text-transform: uppercase;
    color: #f2f2f2;
    font-size: 16px;
    font-family: "Gotham", sans-serif;
    letter-spacing: 1px;
    text-shadow: 0px 0px 15px #f2f2f2;
  }
  &:hover {
    background: #10c9da;
  }
`;
