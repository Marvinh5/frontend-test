import React from "react";
import styled from "styled-components";
import { GreenCircle, RedCircle } from "../icons/Circles";

const StyledIsAvailableContainer = styled.div`
  color: #757575;
  font-size: 12px;
`;

export default function IsOpenContainer({ isOpen }: { isOpen: boolean }) {
  return (
    <StyledIsAvailableContainer>
      {isOpen ? <GreenCircle /> : <RedCircle />}
      <label style={{ marginLeft: 4 }}>{isOpen ? "OPEN NOW" : "CLOSED"}</label>
    </StyledIsAvailableContainer>
  );
}
