import { useEffect, useMemo, useState } from "react";
import { css, FlattenSimpleInterpolation } from "styled-components";

export const mobileBrakePoint = 768;

export const insideMobileBreakPoint = (
  inside: FlattenSimpleInterpolation
) => css`
  @media (max-width: ${mobileBrakePoint}px) {
    ${inside}
  }
`;

export default function useIsMobile() {
  const [width, setWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
      setIsLoading(false);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isMobile = useMemo(() => width <= mobileBrakePoint, [width]);

  return {
    isMobile,
    isLoading,
  };
}
