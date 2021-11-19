import styled, { css } from "styled-components";
import React from "react";
const StyledCategoryAndPrice = styled.div<{ big: boolean }>`
  color: #757575;
  text-transform: uppercase;
  font-size: 12px;
  ${(props) =>
    props.big &&
    css`
      font-size: 22px;
    `}
`;

export default function CategoryAndPrice({
  category,
  price,
  big = false,
}: {
  category: string;
  price: string;
  big?: boolean;
}) {
  return (
    <StyledCategoryAndPrice big={big}>
      {category} • {price}
    </StyledCategoryAndPrice>
  );
}
