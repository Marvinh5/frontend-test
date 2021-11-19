import React from "react";
import styled from "styled-components";
import PageDescription from "../../components/shared/PageDescription";
import PageHeader from "../../components/shared/PageHeader";
import FiltersLabel from "../../components/shared/FilterByLabel";
import DivisionLine from "../../components/shared/DivisionLine";
import SizedDivider from "../../components/shared/SizedDivider";
import CardListTitle from "../../components/shared/CardListTitle";
import {
  OptionLabelContainer,
  OptionsStyledLabel,
} from "../../components/shared/OptionsPlaceHolder";
import { useAppContext } from "../../business_logic/AppProvider";
import Caret from "../../components/icons/Caret";
import MobileRestaurantCard from "../../components/mobile/MobileRestaurantCard";
import LoadMore from "../../components/shared/LoadMore";
import FlexCenter from "../../components/shared/FlexCenter";
import { useNavigate } from "react-router";

const StyledContainer = styled.div``;
const PaddedContainer = styled.div`
  padding: 0 24px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Index() {
  const { filters, data, onLoadMore } = useAppContext();
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <PaddedContainer>
        <SizedDivider size={42} />
        <PageHeader title={"Restaurants"} />
        <SizedDivider size={9} />
        <PageDescription />
      </PaddedContainer>
      <SizedDivider size={42} />
      <DivisionLine />
      <PaddedContainer>
        <SizedDivider size={16} />
        <FiltersContainer>
          <FiltersLabel />
          <OptionLabelContainer width={200}>
            <OptionsStyledLabel>{filters.category}</OptionsStyledLabel>
            <Caret up={true} />
          </OptionLabelContainer>
        </FiltersContainer>
        <SizedDivider size={32} />
        <CardListTitle />
        <SizedDivider size={32} />
        <CardsContainer>
          {data?.businesses?.map((restaurant) => {
            return (
              <div key={restaurant.id}>
                <MobileRestaurantCard
                  image={restaurant.image_url}
                  id={restaurant.id}
                  category={restaurant.categories
                    ?.map((cat) => cat.title)
                    .slice(0, 1)
                    .join(",")}
                  price={restaurant.price}
                  stars={restaurant.rating}
                  key={restaurant.id}
                  open={!restaurant.is_closed}
                  title={restaurant.name}
                  onLearnMoreClick={() => navigate(`/detail/${restaurant.id}`)}
                />
                <SizedDivider size={32} />
              </div>
            );
          })}
        </CardsContainer>
        <FlexCenter>
          {data != null &&
            data.businesses.length > 0 &&
            data.businesses?.length < data.total && (
              <LoadMore onClick={onLoadMore()} />
            )}
        </FlexCenter>
      </PaddedContainer>
    </StyledContainer>
  );
}
