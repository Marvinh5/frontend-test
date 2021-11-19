import React from "react";
import styled, { css } from "styled-components";
import { insideMobileBreakPoint } from "../../helpers/useIsMobile";
const StyledPageDescription = styled.div`
  font-size: 22px;
  color: #666666;
  ${insideMobileBreakPoint(
    css`
      font-size: 16px;
    `
  )}
`;

export default function PageDescription() {
  return (
    <StyledPageDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </StyledPageDescription>
  );
}
