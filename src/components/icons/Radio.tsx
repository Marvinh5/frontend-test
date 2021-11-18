import React from "react";
import styled from "styled-components";
import { OutsideOval } from "./Oval";

function InsidePoint() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 8 8"
      className="inside"
    >
      <path
        fill="#002B56"
        fillRule="evenodd"
        d="M4 8a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}




const StyledRadio = styled.div`
  position: relative;

  svg {
    position: absolute;
    inset: 0;
    margin: auto;
  }
`;

export default function Radio({ selected }: { selected: boolean }) {
  return (
    <StyledRadio style={{ height: 16, width: 16 }}>
      <OutsideOval />
      {selected && <InsidePoint />}
    </StyledRadio>
  );
}
