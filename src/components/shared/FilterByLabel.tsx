import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
  font-size: 16px;
  letter-spacing: 1px;
  color: #606060;
`;

export default function FiltersLabel() {
  return (
      <StyledLabel>Filter By:</StyledLabel>
  );
}
