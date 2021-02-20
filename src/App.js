import styled from "styled-components";
//Components
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Skills from "./components/Skills";
// import ResumeRibbon from "./components/ResumeRibbon";
import Portfolio from "./components/Portfolio";
import ProjectsRibbon from "./components/ProjectsRibbon";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
// import TestComponent from "./components/TestComponent";
//Global Styles
import GlobalStyle from "./components/GlobalStyle";
//Animation
import { motion } from "framer-motion";
// what if there is another one that i need to work on and i just dont know it why didnt i just ask for

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      {/* <ResumeRibbon /> */}
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
  overflow-y: scroll;
  scroll-behavior: smooth;
  perspective: 2px;
`;
