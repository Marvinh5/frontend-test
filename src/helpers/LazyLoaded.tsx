import React from "react";

export default function LazyLoaded(
  componentPromise: Promise<{
    default: React.ComponentType;
  }>
) {
  return React.lazy(() => componentPromise);
}
