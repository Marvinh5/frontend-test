import styled, { css } from "styled-components";
import { insideMobileBreakPoint } from "../../helpers/useIsMobile";

export const ImagesAndMapContainer = styled.div`
  display: block;
  width: auto;
  height: 228px;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  > div {
    display: inline-block;
    margin-right: 32px;
  }
`;

export const MapContainer = styled.div<{ background: string }>`
  width: 640px;
  height: 100%;
  background: gray;
  background-image: url("${(props) => props.background}");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ImageContainer = styled.div`
  width: 304px;
  height: 228px;
`;

export const Image = styled.div<{ background?: string }>`
  background: gray;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 304px;

  ${insideMobileBreakPoint(
    css`
      width: 229px;
    `
  )}
  height: 100%;
`;
