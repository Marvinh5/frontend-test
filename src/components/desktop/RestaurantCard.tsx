import styled from "styled-components";
import React from "react";
import Spacer from "../shared/Spacer";
import StarRating from "./StarRating";
import CategoryAndPrice from "./CategoryAndPrice";
import IsOpenContainer from "./IsOpenContainer";
import StyledCardImageImage from "../shared/StyledCardImage";
import { StyledExtraDetailsRow } from "../shared/CardCategory";
import SizedDivider from "../shared/SizedDivider";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 428px;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  margin-top: 16px;
`;

const StyledLearnMore = styled.div`
  background-color: #002b56;
  width: 304px;
  height: 48px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-top: 20px;
  transition: all 300ms ease 0s;
  cursor: pointer;
  :hover {
    opacity: 0.75;
    box-shadow: inset 0 0 0 3px #002b53;
  }
`;

export default function RestaurantCard({
  stars = 3,
  title,
  open,
  category,
  price,
  image,
  onLearnMoreClick,
}: {
  stars?: number;
  title?: string;
  open: boolean;
  category: string;
  price: string;
  id: string;
  image: string;
  onLearnMoreClick: VoidFunction;
}) {
  return (
    <StyledCard className="restaurant-card">
      <StyledCardImageImage background={image} />
      <StyledTitle>
        {title ?? "Very Long name restaurants number 1 in list"}
      </StyledTitle>
      <StarRating stars={stars} />
      <SizedDivider size={16} />
      <StyledExtraDetailsRow>
        <CategoryAndPrice category={category} price={price} />
        <IsOpenContainer isOpen={open} />
      </StyledExtraDetailsRow>
      <Spacer />
      <StyledLearnMore onClick={onLearnMoreClick}>
        Learn More
      </StyledLearnMore>
    </StyledCard>
  );
}
