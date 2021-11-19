import styled, { css } from "styled-components";
import { insideMobileBreakPoint } from "../../helpers/useIsMobile";

const ReviewsCount = styled.div`
  font-size: 22px;
  ${insideMobileBreakPoint(
    css`
      font-size: 18px;
    `
  )}
  color: #666666;
  font-weight: lighter;
`;

export default ReviewsCount;
