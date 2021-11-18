import React from "react";
function Circle({ isGreen }: { isGreen: boolean }) {
  const color = isGreen ? "#00E8A4" : "#FF3548";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 8 8"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 8a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function GreenCircle() {
  return <Circle isGreen={true} />;
}

export function RedCircle() {
  return <Circle isGreen={false} />;
}
