import React from "react";
import styled from "styled-components";

const StyledIsOpen = styled.div<{ isOpen: boolean }>`
  background-color: ${(props) => (props.isOpen ? "#00e8a4" : "#FF3548")};
  border-radius: 8px;
  /* padding: 6px; */
  color: #002b56;
  width: 35px;
  height: 16px;
  font-size: 8px;
  letter-spacing: 0.571428px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IsOpenText = styled.div`
  text-align: center;
  height: 8px;
  width: auto;
  position: absolute;
  margin: auto;
  inset: 0;
`;

export default function IsOpen({ open }: { open: boolean }) {
  return (
    <StyledIsOpen isOpen={open}>
      <IsOpenText>{open ? "Open" : "Closed"}</IsOpenText>
    </StyledIsOpen>
  );
}
