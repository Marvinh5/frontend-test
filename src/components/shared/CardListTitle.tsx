import React from "react";
import styled, { css } from "styled-components";
import { insideMobileBreakPoint } from "../../helpers/useIsMobile";
const StyledCardListTitle = styled.div`
  font-size: 34px;
  color: #333333;
  ${insideMobileBreakPoint(css`
      font-size: 32px;
  `)}
`;
export default function CardListTitle() {
  return <StyledCardListTitle>All Restaurants</StyledCardListTitle>;
}
