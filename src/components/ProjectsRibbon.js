import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { RibbonStyled } from "../components/ResumeRibbon";

const ProjectsRibbon = () => {
  return (
    <RibbonStyled>
      <div className="focal-point">
        <h2>See All Projects</h2>
      </div>
    </RibbonStyled>
  );
};

export default ProjectsRibbon;
