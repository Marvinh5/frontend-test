import React from "react";
import styled, { keyframes } from "styled-components";

const LdsRipple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }

`;
const StyledRipple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid #002b56;
    opacity: 1;
    border-radius: 50%;
    animation: ${LdsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

const StyledFixedContainer = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <StyledFixedContainer>
      <StyledRipple>
        <div></div>
        <div></div>
      </StyledRipple>
    </StyledFixedContainer>
  );
}
