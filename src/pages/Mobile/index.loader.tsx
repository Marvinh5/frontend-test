import React, { Suspense } from "react";
import Loading from "../../components/shared/Loading";

const LazyComponent = React.lazy(() => import("./index"));

export default function MobileLoader() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent/>
    </Suspense>
  );
}