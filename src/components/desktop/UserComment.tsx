import styled from "styled-components";
import React from "react";
import StarRating from "./StarRating";
import SizedDivider from "../SizedDivider";

const StyledUserComment = styled.div`
  font-size: 20px;
  color: #000000;
`;


export function UserComment({
  comment,
  stars,
}: {
  comment: string;
  stars: number;
}) {
  return (
    <StyledUserComment>
      <StarRating stars={stars} />
      <SizedDivider size={19.56} />
      {comment.split("\n").map((paragraphs, index) => {
        return <p key={index}>{paragraphs}</p>;
      })}
    </StyledUserComment>
  );
}
