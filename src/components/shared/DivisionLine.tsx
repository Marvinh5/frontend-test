import React from "react";
import styled from "styled-components";

const DivisionLineContainer = styled.div`
  position: relative;
  height: 1px;
  overflow: visible;
`;
const StyledDivisionLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  position: absolute;
  inset: 0;
`;

const DivisionLine = () => {
  return (
    <DivisionLineContainer>
      <StyledDivisionLine />
    </DivisionLineContainer>
  );
};

export default DivisionLine;
