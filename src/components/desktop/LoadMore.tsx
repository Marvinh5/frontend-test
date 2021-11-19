import React from "react";
import styled from "styled-components";

const StyledLoadMore = styled.div`
  width: 416px;
  height: 48px;
  border: 1px solid #002b56;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #002b53;
  cursor: pointer;
  transition: all 300ms ease 0s;
  :hover {
    opacity: 0.75;
    box-shadow: inset 0 0 0 3px #002b53;
  }
`;

export default function LoadMore() {
  return <StyledLoadMore>Load more</StyledLoadMore>;
}
