import React from "react";
import styled from "styled-components";
import CategoryAndPrice from "../desktop/CategoryAndPrice";
import StarRating from "../desktop/StarRating";
import ArrowRight from "../icons/ArrowRight";
import { StyledExtraDetailsRow } from "../shared/CardCategory";
import SizedDivider from "../shared/SizedDivider";
import Spacer from "../shared/Spacer";
import StyledCardImageImage from "../shared/StyledCardImage";
import IsOpen from "./IsOpen";

const StyledMobileRestaurantCard = styled.div`
  flex-direction: row;
  display: flex;
`;

const StyledTitle = styled.div`
  font-size: 20px;
`;

const DetailsContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 180px;
  max-width: 60%;
`;

const LearnMore = styled.div`
  font-size: 16px;
  color: #002b56;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function MobileRestaurantCard({
  image,
  title,
  stars,
  category,
  price,
  open,
  onLearnMoreClick,
}: {
  stars?: number;
  title?: string;
  open: boolean;
  category: string;
  price: string;
  id: string;
  onLearnMoreClick: VoidFunction;
  image: string;
}) {
  return (
    <StyledMobileRestaurantCard>
      <StyledCardImageImage background={image} />
      <SizedDivider x size={12} />
      <DetailsContainer>
        <StyledTitle>{title}</StyledTitle>
        <SizedDivider size={8} />
        <StarRating stars={stars} noMargin={true} size={12.69} />
        <SizedDivider size={8} />
        <StyledExtraDetailsRow>
          <CategoryAndPrice category={category} price={price} />
          <IsOpen open={open} />
        </StyledExtraDetailsRow>
        <Spacer />
        <LearnMore onClick={onLearnMoreClick}>
          Learn More
          <SizedDivider x size={8} />
          <ArrowRight />
        </LearnMore>
      </DetailsContainer>
    </StyledMobileRestaurantCard>
  );
}
