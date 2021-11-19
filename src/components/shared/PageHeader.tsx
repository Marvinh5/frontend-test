import React from "react";
import styled, { css } from "styled-components";
import { insideMobileBreakPoint } from "../../helpers/useIsMobile";

const StyledPageHeader = styled.div`
  font-size: 54px;
  letter-spacing: 0.964286px;
  color: #333333;

  ${insideMobileBreakPoint(css`
    font-size: 32px;
  `)}
`;

export default function PageHeader({ title }: { title?: string }) {
  return <StyledPageHeader>{title ?? "Restaurants"}</StyledPageHeader>;
}
