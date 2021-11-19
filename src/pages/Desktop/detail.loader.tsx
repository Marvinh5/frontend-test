import React, { Suspense } from "react";
import Loading from "../../components/shared/Loading";

const LazyComponent = React.lazy(() => import("./detail"));
export default function DesktopDetailLoader() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}