import React from "react";
//Styling
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
//Images
import vectoroffice from "../images/vectoroffice.png";
//Icons
import { FaCogs } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { MdPhotoFilter } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { IoMdCheckmark } from "react-icons/io";

const Skills = () => {
  return (
    <SkillsStyled id="skills">
      <div class="text-container">
        <h1 class="section-heading">Skills</h1>
        <span class="line"></span>
        <div class="showcase">
          <div className="showcase-row">
            <div className="edged">
              <div className="left">
                <div className="showcase-heading">
                  <FaCogs size="50px" />
                  <h1 className="heading-title ">Development</h1>
                </div>
                <div className="dev-grid">
                  <div className="cell">
                    <div className="dev">
                      <p>JavaScript</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>HTML5</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>CSS3</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>Jekyll</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>Python</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>React</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>Redux</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>Angular</p>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="dev">
                      <p>NodeJs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="flex-item1">
                  <div className="showcase-heading">
                    <MdPhotoFilter size="50px" />
                    <h1 className="heading-title ">Design</h1>
                  </div>
                  <div className="design-content">
                    <CgFigma className="rIcons" size="50px" />
                    <SiAdobephotoshop className="rIcons" size="50px" />
                  </div>
                </div>
                <div className="flex-item2">
                  <div className="showcase-heading">
                    <VscTools size="50px" />
                    <h1 className="heading-title ">Tools</h1>
                  </div>
                  <ul>
                    <li>
                      <IoMdCheckmark className="check" />
                      Git + Github
                    </li>
                    <li>
                      <IoMdCheckmark className="check" />
                      Chrome Dev Tools
                    </li>
                    <li>
                      <IoMdCheckmark className="check" />
                      Command Line
                    </li>
                    <li>
                      <IoMdCheckmark className="check" />
                      ColorZilla
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="last">
              <div className="image-container">
                <img src={vectoroffice} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkillsStyled>
  );
};

export default Skills;

const SkillsStyled = styled(motion.section)`
  padding: 2rem 0;
  color: #f2f2f2;
  /* background: #1b1b1b; */
  background: #000000;
  width: 100vw;
  /* margin-top: 100vh; */
  height: max-content;
  /* display: none; */
  .text-container {
    margin: 0 auto 3rem auto;
    width: 85%;
    height: max-content;
    display: flex;
    flex-direction: column;
  }
  .section-heading {
    color: inherit;
    font-size: 3em;
    padding: 0;
    margin: 0;
    font-family: initial;
  }

  .showcase {
    /* border: 1px solid lightblue; */
    margin: 1.5rem 0 0 0;
    width: 100%;
    height: max-content;
    margin: 2rem;
  }

  .showcase-heading {
    display: flex;
  }
  .heading-title {
    vertical-align: center;
    font-size: 1.3rem;
    margin-left: 1rem;
    font-weight: bolder;
    text-transform: uppercase;
    font-family: "Gotham", sans-serif;
    align-self: center;
  }
  .showcase-row {
    height: max-content;
    width: 100%;
    display: flex;
  }

  .left {
    width: 50%;
    margin-right: 5rem;
  }
  .dev-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 5.5rem 5.5rem 5.5rem;
    grid-template-rows: 5.5rem 5.5rem 5.5rem;
    height: 100%;
    min-height: max-content;
    grid-template-areas:
      "cell cell cell"
      "cell cell cell"
      "cell cell cell";
    width: 100%;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    /* border: 1px solid white; */
  }

  .dev {
    border-radius: 50% 50%;
    border: 1px solid grey;
    opacity: 0.9;
    height: 100%;
    width: 100%;
    position: relative;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #f3f3f3;
      transform: translate(-50%, -50%);
      font-family: "Roboto";
      font-weight: lighter;
      font-size: 0.7rem;
    }
  }
  .right {
    height: 100%;
    width: 30%;
  }
  .flex-item1 {
    width: 100%;
    height: 50%;
  }
  .design-content {
    margin: 1rem 0;
  }
  .rIcons {
    margin-left: 1rem;
  }

  .flex-item2 {
    margin: 0;
  }
  ul {
    margin-top: 1rem;
  }
  li {
    margin: 0 0 0.5rem 0;
    list-style: none;
    text-decoration: none;
  }
  .check {
    margin-right: 10px;
  }

  .image-container {
    margin-top: 1rem;
    height: 90%;
    width: 90%;
  }
  .last {
    align-self: center;
    width: max-content;
    height: 100%;
    img {
      width: 460px;
    }
  }
  .edged {
    display: flex;
    width: 60%;
  }
  @media (max-width: 1200px) {
    .showcase {
      margin: 0;
    }
    .showcase-row {
      flex-direction: column;
    }
    .edged {
      justify-content: space-between;
      width: 100%;
    }

    .flex-item1 {
      width: 100%;
      height: 100%;
    }
    .flex-item2 {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 600px) {
    .right {
      margin-top: 2rem;
      width: 100%;
    }
    .flex-item1 {
      margin-top: 2rem;
      width: 100%;
      height: 100%;
    }
    .flex-item2 {
      margin-top: 2rem;
      width: 100%;
      height: 100%;
    }
    .edged {
      justify-content: space-between;
      width: 100%;
      flex-direction: column;
    }
    img {
      width: 360px;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 200px;
    }
    .right {
      justify-content: center;
    }
  }
`;
