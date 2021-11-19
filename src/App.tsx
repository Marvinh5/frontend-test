import {
  AppProvider,
  useProviderDefaultValues,
} from "./business_logic/AppProvider";
import React, { Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LazyLoaded from "./helpers/LazyLoaded";

const Desktop = LazyLoaded(import("./pages/Desktop"));
const DetailPage = LazyLoaded(import("./pages/Desktop/detail"));

export default function App({}: { children: React.ReactNode }) {
  const value = useProviderDefaultValues();
  return (
    <BrowserRouter>
      <AppProvider value={value}>
        <Suspense fallback={<div>....loading</div>}>
          <Routes>
            <Route index element={<Desktop />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  );
}
