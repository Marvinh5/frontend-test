import styled, { css } from "styled-components";
import { insideMobileBreakPoint } from "../../helpers/useIsMobile";

const StyledCardImageImage = styled.img<{ background?: string }>`
  height: 228px;
  background: #cccaca;
  width: 100%;
  background-image: url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-size: cover;

  ${insideMobileBreakPoint(css`
      width: 116px;
      height: 132px;
  `)}
`;

export default StyledCardImageImage;
