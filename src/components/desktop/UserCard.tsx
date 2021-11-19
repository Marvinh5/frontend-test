import styled from "styled-components";
import React from "react";
import SizedDivider from "../SizedDivider";

const StyledUserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 305px;
`;

const TittleAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const ImageContainer = styled.div<{ background?: string }>`
  height: 80px;
  width: 80px;
  background-color: gray;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${(props) => props.background}");
`;

const Title = styled.div`
  font-size: 22px;
  color: #000000;
`;

const Date = styled.div`
  font-size: 16px;
  color: #666666;
`;

export default function UserCard({name, date, image}) {
  return (
    <StyledUserCardContainer>
      <ImageContainer background={image}/>
      <SizedDivider size={32} x/>
      <TittleAndDateContainer>
        <Title>{name}</Title>
        <Date>{date}</Date>
      </TittleAndDateContainer>
    </StyledUserCardContainer>
  );
}
