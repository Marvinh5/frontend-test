import styled, { css } from "styled-components";
import React from "react";
import SizedDivider from "../shared/SizedDivider";
import { insideMobileBreakPoint } from "../../helpers/useIsMobile";

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

  ${insideMobileBreakPoint(css`
    width: 64px;
    height: 64px;
  `)}
  background-color: gray;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${(props) => props.background}");
`;

const Title = styled.div`
  font-size: 22px;
  ${insideMobileBreakPoint(css`
    font-size: 18px;
  `)}
  color: #000000;
`;

const Date = styled.div`
  font-size: 16px;
  color: #666666;
  font-weight: lighter;
`;

function UserCard({ name, date, image }) {
  return (
    <StyledUserCardContainer>
      <ImageContainer background={image} />
      <SizedDivider size={32} x />
      <TittleAndDateContainer>
        <Title>{name}</Title>
        <SizedDivider size={4} />
        <Date>
          {new Intl.DateTimeFormat("en-GB", {
            dateStyle: "short",
          }).format(new window.Date(date))}
        </Date>
      </TittleAndDateContainer>
    </StyledUserCardContainer>
  );
}

export default React.memo(UserCard);
