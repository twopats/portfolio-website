import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { RibbonStyled } from "../components/ResumeRibbon";

const ProjectsRibbon = () => {
  return (
    <RibbonStyled>
      <a className="focal-point" href="https://github.com/lpatipat">
        <h2>See All Projects</h2>
      </a>
    </RibbonStyled>
  );
};

export default ProjectsRibbon;
