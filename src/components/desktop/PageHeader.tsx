import React from "react";
import styled from "styled-components"
const StyledPageHeader = styled.div`
  font-size: 54px;
  letter-spacing: 0.964286px;
  color: #333333;
`;

export default function PageHeader({title}:{title?:string}) {
  return <StyledPageHeader>
    {title ?? 'Restaurants'}
  </StyledPageHeader>
}