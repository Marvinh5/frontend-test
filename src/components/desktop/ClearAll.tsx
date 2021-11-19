import React from "react";
import styled from "styled-components";

const StyledClearAll = styled.div`
  border: 1px solid #002b56;
  text-transform: uppercase;
  padding: 11px 16px;
  cursor: pointer;
`;

const ClearAllLabel = styled.div`
  width: 119px;
  text-align: center;
  color: #002b56;
  font-size: 12px;
  letter-spacing: 0.857143px;
  font-weight: bold;
`;

export default function ClearAll({onClick}:{onClick: () => void}) {
  return (
    <StyledClearAll onClick={onClick}>
      <ClearAllLabel>Clear all</ClearAllLabel>
    </StyledClearAll>
  );
}
