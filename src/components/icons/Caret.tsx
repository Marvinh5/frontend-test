import React from "react";
import styled, { css } from "styled-components";

interface CaretProps {
  up: boolean;
}

const StyledSvg = styled.svg<CaretProps>`
  ${(props) =>
    !props.up &&
    css`
      transform: rotate(180deg);
    `}
`;

export default function Caret({ up }: CaretProps) {
  return (
    <StyledSvg
      up={up}
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 4.56824L7.5455 3.77274L3.77275 -5.24521e-06L0 3.77274L0.795495 4.56824L3.77275 1.59098L6.75 4.56824Z"
        fill="#969696"
      />
    </StyledSvg>
  );
}
