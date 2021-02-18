import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;

const NavStyled = styled.div`
  width: 100%;
  height: 5%;
  position: sticky;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 1);
  z-index: 999;
  display: flex;
  align-items: center;

  ul {
    width: 100%;
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-family: "Gotham", sans-serif;
    font-weight: medium;
    text-transform: uppercase;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
