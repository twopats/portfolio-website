import React from "react";
//Styling
import styled from "styled-components";

const TestComponent = () => {
  return (
    <div id="section1">
      <h1>hello</h1>
    </div>
  );
};

export default TestComponent;

const TestStyled = styled.div`
  background: white;
  height: 100vh;
  width: 100%;
  display: none;
`;
