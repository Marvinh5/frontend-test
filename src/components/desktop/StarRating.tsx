import styled from "styled-components";
import React from "react";
import { StarOutline, StarSolid } from "../icons/Stars";
const StyledStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8.14px;

  svg {
    height: 30px;
    margin-right: 1.5px;
  }
`;

export default function StarRating({ stars }: { stars: number }) {
  return (
    <StyledStarContainer>
      {Array.from(Array(5)).map((_, index) => {
        if (index + 1 <= stars) {
          return <StarSolid key={index} />;
        }
        return <StarOutline key={index} />;
      })}
    </StyledStarContainer>
  );
}
