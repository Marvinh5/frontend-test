import React from "react";
import styled from "styled-components";
const StyledPageDescription = styled.div`
  font-size: 22px;
  color: #666666;
`;

export default function PageDescription() {
  return (
    <StyledPageDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </StyledPageDescription>
  );
}
