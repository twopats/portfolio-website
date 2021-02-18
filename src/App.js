import styled from "styled-components";
//Components
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ResumeRibbon from "./components/ResumeRibbon";
import Portfolio from "./components/Portfolio";
import ProjectsRibbon from "./components/ProjectsRibbon";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
//Global Styles
import GlobalStyle from "./components/GlobalStyle";
//Animation
import { motion } from "framer-motion";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <ResumeRibbon />
      <Portfolio />
      <ProjectsRibbon />
      <Contacts />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  height: 100vh;
  overflow-x: hidden;
  perspective: 2px;
  position: relative;
`;
