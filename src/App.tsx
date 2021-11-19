import {
  AppProvider,
  useProviderDefaultValues,
} from "./business_logic/AppProvider";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DesktopLoader from "./pages/Desktop/index.loader";
import DesktopDetailLoader from "./pages/Desktop/detail.loader";
import MobileLoader from "./pages/Mobile/index.loader";
import MobileDetailLoader from "./pages/Mobile/detail.loader";
import useIsMobile from "./helpers/useIsMobile";
import Loading from "./components/shared/Loading";

export default function App({}: { children: React.ReactNode }) {
  const value = useProviderDefaultValues();
  const { isMobile, isLoading } = useIsMobile();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <AppProvider value={value}>
        {!isMobile && (
          <Routes>
            <Route index element={<DesktopLoader />} />
            <Route path="/detail/:id" element={<DesktopDetailLoader />} />
          </Routes>
        )}
        {isMobile && (
          <Routes>
            <Route index element={<MobileLoader />} />
            <Route path="/detail/:id" element={<MobileDetailLoader />} />
          </Routes>
        )}
      </AppProvider>
    </BrowserRouter>
  );
}
