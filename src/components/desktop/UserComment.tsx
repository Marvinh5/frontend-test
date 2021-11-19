import styled from "styled-components";
import React from "react";
import StarRating from "./StarRating";
import SizedDivider from "../shared/SizedDivider";

const StyledUserComment = styled.div`
  font-size: 20px;
  color: #000000;
  font-weight: lighter;
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
      <SizedDivider size={16} />
      <StarRating stars={stars} noMargin={true} />
      <SizedDivider size={19.56} />
      {comment.split("\n").map((paragraphs, index) => {
        return <div key={index}>{paragraphs}
              {index != paragraphs.length - 1 && <SizedDivider size={10} />}
        </div>;
      })}
    </StyledUserComment>
  );
}
