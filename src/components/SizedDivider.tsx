import React from "react";
export default function SizedDivider({
  size,
  x = false,
}: {
  size: number;
  x?: boolean;
}) {
  if (x) return <div style={{ width: size }} />;
  return <div style={{ height: size }} />;
}
