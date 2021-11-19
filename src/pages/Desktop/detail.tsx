import React from "react";
import styled from "styled-components";
import MapQuest from "../../business_logic/MapQuest";
import CategoryAndPrice from "../../components/desktop/CategoryAndPrice";
import IsOpenContainer from "../../components/desktop/IsOpenContainer";
import PageHeader from "../../components/shared/PageHeader";
import ReviewsCount from "../../components/desktop/ReviewsCount";
import StarRating from "../../components/desktop/StarRating";
import UserCard from "../../components/desktop/UserCard";
import { UserComment } from "../../components/desktop/UserComment";
import DivisionLine from "../../components/shared/DivisionLine";
import Loading from "../../components/shared/Loading";
import SizedDivider from "../../components/shared/SizedDivider";
import Spacer from "../../components/shared/Spacer";
import useDetailsLoader from "../../helpers/useDetailsLoader";
import {
  Image,
  ImageContainer,
  ImagesAndMapContainer,
  MapContainer,
} from "../../components/shared/ImagesAndMapContainer";

const StyledDetailContainer = styled.div`
  padding-top: 36px;
  margin: auto;
`;

const StyledPaddedContainer = styled.div`
  padding: 0 64px;
  display: flex;
  flex-direction: column;
`;

const ExtraDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LocationText = styled.div`
  font-size: 20px;
`;

const CommentAndUserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function Detail() {
  const { loading, selectedBusiness, selectedBusinessReviews } =
    useDetailsLoader();

  if (loading) return <Loading />;

  const {
    name,
    categories,
    price,
    rating,
    is_closed,
    location,
    review_count,
    photos,
    coordinates,
  } = selectedBusiness;

  return (
    <StyledDetailContainer>
      <StyledPaddedContainer>
        <PageHeader title={name} />
        <StarRating stars={rating} />
        <div style={{ height: 23 }}></div>
        <ExtraDetailsContainer>
          <CategoryAndPrice
            category={categories.length > 0 && categories[0].title}
            price={price}
          />
          <Spacer />
          <IsOpenContainer isOpen={!is_closed} />
        </ExtraDetailsContainer>
        <SizedDivider size={49} />
      </StyledPaddedContainer>
      <DivisionLine />
      <SizedDivider size={49} />
      <StyledPaddedContainer>
        <ImagesAndMapContainer>
          <MapContainer
            background={MapQuest().generateMapUrl(
              coordinates.latitude,
              coordinates.longitude
            )}
          />
          {photos.map((photo) => {
            return (
              <ImageContainer key={photo}>
                <Image background={photo} />
              </ImageContainer>
            );
          })}
        </ImagesAndMapContainer>
        <SizedDivider size={15} />
        <LocationText>
          {location.address1}, {location.state} {location.zip_code}
        </LocationText>
      </StyledPaddedContainer>
      <SizedDivider size={48} />
      <DivisionLine />
      <SizedDivider size={48} />

      <StyledPaddedContainer>
        <ReviewsCount>{review_count} Reviews</ReviewsCount>
        <SizedDivider size={48} />
        {selectedBusinessReviews?.reviews?.map((review) => {
          return (
            <div key={review.id}>
              <CommentAndUserCardContainer key={review.id}>
                <UserCard
                  name={review.user.name}
                  date={review.time_created}
                  image={review.user.image_url}
                />
                <SizedDivider size={32} x />
                <UserComment comment={review.text} stars={review.rating} />
              </CommentAndUserCardContainer>
              <SizedDivider size={80} />
              <DivisionLine />
              <SizedDivider size={80} />
            </div>
          );
        })}
      </StyledPaddedContainer>
    </StyledDetailContainer>
  );
}

export default Detail;
