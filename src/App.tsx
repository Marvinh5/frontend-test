import React from "react";
import { Filters } from "./components/Filters";
import LoadMore from "./components/LoadMore";
import PageDescription from "./components/PageDescription";
import PageHeader from "./components/PageHeader";
import RestaurantCard from "./components/RestaurantCard";

export default function App() {
  return (
    <div>
      <PageHeader />
      <PageDescription />
      <Filters />
      <RestaurantCard open={true} stars={3} />
      <div style={{height:50}}></div>
      <RestaurantCard open={false} stars={5} />
      <LoadMore></LoadMore>
    </div>
  );
}
