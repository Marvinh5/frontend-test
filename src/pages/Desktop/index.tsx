import React from "react";
import styled from "styled-components";
import { Filters } from "../../components/desktop/Filters";
import LoadMore from "../../components/shared/LoadMore";
import PageDescription from "../../components/shared/PageDescription";
import PageHeader from "../../components/shared/PageHeader";
import RestaurantCard from "../../components/desktop/RestaurantCard";
import { useAppContext } from "../../business_logic/AppProvider";
import DivisionLine from "../../components/shared/DivisionLine";
import CardListTitle from "../../components/shared/CardListTitle";
import SizedDivider from "../../components/shared/SizedDivider";
import { useNavigate } from "react-router";

const StyledAppContainer = styled.div`
  margin: auto;
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

const PaddedContainer = styled.div`
  padding: 0 64px;
`;

export default function Desktop() {
  const { data, onLoadMore } = useAppContext();
  const navigate = useNavigate();
  return (
    <StyledAppContainer>
      <PaddedContainer>
        <StyledHeaderContainer>
          <PageHeader />
        </StyledHeaderContainer>
        <StyledFiltersContainer>
          <PageDescription />
        </StyledFiltersContainer>
      </PaddedContainer>
      <DivisionLine />
      <PaddedContainer>
        <Filters />
      </PaddedContainer>
      <DivisionLine />
      <PaddedContainer>
        <SizedDivider size={64} />
        <CardListTitle />
        <StyledCardsContainer>
          {data &&
            data.businesses &&
            data.businesses.map((restaurant, index) => {
              return (
                <RestaurantCard
                  onLearnMoreClick={() => navigate(`/detail/${restaurant.id}`)}
                  image={restaurant.image_url}
                  id={restaurant.id}
                  category={restaurant.categories
                    ?.map((cat) => cat.title)
                    .slice(0, 1)
                    .join(",")}
                  price={restaurant.price}
                  stars={restaurant.rating}
                  key={index}
                  open={!restaurant.is_closed}
                  title={restaurant.name}
                />
              );
            })}
        </StyledCardsContainer>
        <LoadMoreContainer>
          {(data?.total ?? 0) > (data?.businesses?.length ?? 0) && (
            <LoadMore onClick={onLoadMore()} />
          )}
        </LoadMoreContainer>
      </PaddedContainer>
    </StyledAppContainer>
  );
}
