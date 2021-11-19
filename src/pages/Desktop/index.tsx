import React from "react";
import styled from "styled-components";
import { Filters } from "../../components/desktop/Filters";
import LoadMore from "../../components/desktop/LoadMore";
import PageDescription from "../../components/desktop/PageDescription";
import PageHeader from "../../components/desktop/PageHeader";
import RestaurantCard from "../../components/desktop/RestaurantCard";
import {useAppContext, } from "../../business_logic/AppProvider";

const StyledAppContainer = styled.div`
  padding: 64px;
  max-width: 1440px;
  margin:auto;
`;

const StyledHeaderContainer = styled.div`
  margin-bottom: 24px;
`;

const StyledFiltersContainer = styled.div`
  margin-top: 36px;
  margin-bottom: 64px;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 43px;

  .restaurant-card {
    margin-right: 32px;
    margin-bottom: 80px;
  }
`;

const LoadMoreContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CardListTitle = styled.div`
  font-size:34px;
  color: #333333;
  margin-top: 64px;
`

export default function Desktop() {
  const {data, onLoadMore} = useAppContext();
  return (
        <StyledAppContainer>
          <StyledHeaderContainer>
            <PageHeader />
          </StyledHeaderContainer>
          <StyledFiltersContainer>
            <PageDescription />
          </StyledFiltersContainer>
          <Filters />
          <CardListTitle>All Restaurants</CardListTitle>
          <StyledCardsContainer>
            {
              data && data.businesses && data.businesses.map((restaurant, index) => {
                return (
                  <RestaurantCard image={restaurant.image_url} id={restaurant.id} category={restaurant.categories?.map(cat=>cat.title).slice(0,1).join(',')} price={restaurant.price} stars={restaurant.rating} key={index} open={!restaurant.is_closed} title={restaurant.name} />
                )
              })
            }
          </StyledCardsContainer>
          <LoadMoreContainer onClick={onLoadMore()}>
            { (data?.total ?? 0) > (data?.businesses?.length ?? 0) && <LoadMore/>}
          </LoadMoreContainer>
        </StyledAppContainer>
  );
}
