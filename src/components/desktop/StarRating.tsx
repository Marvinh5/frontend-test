import styled, { css } from "styled-components";
import React from "react";
import { StarOutline, StarSolid } from "../icons/Stars";
const StyledStarContainer = styled.div<{ noMargin: boolean; size: number }>`
  display: flex;
  flex-direction: row;
  ${(props) =>
    !props.noMargin &&
    css`
      margin-top: 8.14px;
    `}

  svg {
    height: ${(props) => props.size}px;
    width: ${(props)=>props.size}px;
    margin-right: 1.5px;
  }
`;

export default function StarRating({
  stars,
  noMargin = false,
  size = 30,
}: {
  stars: number;
  noMargin?: boolean;
  size?: number;
}) {
  return (
    <StyledStarContainer noMargin={noMargin} size={size}>
      {Array.from(Array(5)).map((_, index) => {
        if (index + 1 <= stars) {
          return <StarSolid key={index} />;
        }
        return <StarOutline key={index} />;
      })}
    </StyledStarContainer>
  );
}
