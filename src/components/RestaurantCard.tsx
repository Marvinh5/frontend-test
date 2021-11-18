import styled from "styled-components";
import React from "react";
import { StarOutline, StarSolid } from "./icons/Stars";
import { GreenCircle, RedCircle } from "./icons/Circles";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: fit-content;
`;

const StyledImage = styled.img`
  height: 228px;
  background: #cccaca;
  width: 100%;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  margin-top: 16px;
`;

const StyledStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8.14px;

  svg {
    height: 30px;
    margin-right: 1.5px;
  }
`;

const StyledExtraDetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16.5px;
  justify-content: space-between;
  align-items: center;
`;

const StyledCategoryAndPrice = styled.div`
  color: #757575;
  text-transform: uppercase;
  font-size: 12px;
`;

const StyledIsAvailableContainer = styled.div`
  color: #757575;
  font-size: 12px;
`;


const StyledLearnMore = styled.div`
  background-color: #002B56;
  width: 304px;
  height: 48px;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-top: 20px;
`

export default function RestaurantCard({
  stars = 3,
  title,
  open,
}: {
  stars?: number;
  title?: string;
  open: boolean;
}) {
  return (
    <StyledCard>
      <StyledImage />
      <StyledTitle>
        {title ?? "Very Long name restaurants number 1 in list"}
      </StyledTitle>
      <StyledStarContainer>
        {Array.from(Array(5)).map((_, index) => {
          if (index + 1 <= stars) {
            return <StarSolid key={index} />;
          }
          return <StarOutline key={index} />;
        })}
      </StyledStarContainer>
      <StyledExtraDetailsRow>
        <StyledCategoryAndPrice>Thai • $$$$</StyledCategoryAndPrice>
        <StyledIsAvailableContainer>
          {open ? <GreenCircle /> : <RedCircle />}
          <label style={{ marginLeft: 4 }}>
            {open ? "OPEN NOW" : "CLOSED"}
          </label>
        </StyledIsAvailableContainer>
      </StyledExtraDetailsRow>

      <StyledLearnMore>Learn More</StyledLearnMore>
    </StyledCard>
  );
}
