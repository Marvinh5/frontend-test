import styled from "styled-components";
import React from "react";
import Spacer from "../Spacer";
import { useNavigate } from "react-router";
import StarRating from "./StarRating";
import CategoryAndPrice from "./CategoryAndPrice";
import IsOpenContainer from "./IsOpenContainer";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 428px;
`;

const StyledImage = styled.img<{background?:string}>`
  height: 228px;
  background: #cccaca;
  width: 100%;
  background-image: url("${props => props.background}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  margin-top: 16px;
`;

const StyledExtraDetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16.5px;
  justify-content: space-between;
  align-items: center;
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
  id,
  image,
}: {
  stars?: number;
  title?: string;
  open: boolean;
  category: string;
  price: string;
  id: string;
  image: string;
}) {
  const navigate = useNavigate();
  return (
    <StyledCard className="restaurant-card">
      <StyledImage background={image} />
      <StyledTitle>
        {title ?? "Very Long name restaurants number 1 in list"}
      </StyledTitle>
      <StarRating stars={stars} />
      <StyledExtraDetailsRow>
        <CategoryAndPrice category={category} price={price} />
        <IsOpenContainer isOpen={open} />
      </StyledExtraDetailsRow>
      <Spacer />
      <StyledLearnMore onClick={() => navigate(`/detail/${id}`)}>
        Learn More
      </StyledLearnMore>
    </StyledCard>
  );
}
