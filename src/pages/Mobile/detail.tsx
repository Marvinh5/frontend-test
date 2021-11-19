/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styled from "styled-components";
import MapQuest from "../../business_logic/MapQuest";
import CategoryAndPrice from "../../components/desktop/CategoryAndPrice";
import IsOpenContainer from "../../components/desktop/IsOpenContainer";
import ReviewsCount from "../../components/desktop/ReviewsCount";
import StarRating from "../../components/desktop/StarRating";
import UserCard from "../../components/desktop/UserCard";
import { UserComment } from "../../components/desktop/UserComment";
import DivisionLine from "../../components/shared/DivisionLine";
import FlexCenter from "../../components/shared/FlexCenter";
import {
  ImagesAndMapContainer,
  MapContainer,
  Image,
} from "../../components/shared/ImagesAndMapContainer";
import Loading from "../../components/shared/Loading";
import PageHeader from "../../components/shared/PageHeader";
import SizedDivider from "../../components/shared/SizedDivider";
import Spacer from "../../components/shared/Spacer";
import useDetailsLoader from "../../helpers/useDetailsLoader";

const DetailContainer = styled.div`
  padding: 42px 24px;
`;

const MobileMapContainer = styled(MapContainer)`
  height: 228px;
  width: 100%;
`;

const LocationText = styled.div`
  font-size: 18px;
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
`;

export default function Detail() {
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
    <DetailContainer>
      <PageHeader title={name} />
      <SizedDivider size={8} />
      <StarRating stars={rating} />
      <SizedDivider size={17} />
      <FlexCenter>
        <CategoryAndPrice category={categories[0].title} price={price} />
        <Spacer />
        <IsOpenContainer isOpen={!is_closed} />
      </FlexCenter>
      <SizedDivider size={40} />
      <MobileMapContainer
        background={MapQuest().generateMapUrl(
          coordinates.latitude,
          coordinates.longitude
        )}
      />
      <SizedDivider size={20} />
      <LocationText>
        {location.address1}, {location.state} {location.zip_code}
      </LocationText>
      <SizedDivider size={40} />
      <ImagesAndMapContainer>
        {photos.map((photo) => {
          return (
            <div key={photo} style={{ height: "100%" }}>
              <ImageContainer>
                <Image background={photo} />
                <SizedDivider size={19} x />
              </ImageContainer>
            </div>
          );
        })}
      </ImagesAndMapContainer>
      <SizedDivider size={39} />
      <DivisionLine />
      <SizedDivider size={40} />
      <ReviewsCount>{review_count} Reviews</ReviewsCount>
      <SizedDivider size={32} />
      {selectedBusinessReviews?.reviews.map((review) => {
        return (
          <div key={review.id}>
            <UserCard
              name={review.user.name}
              date={review.time_created}
              image={review.user.image_url}
            />
            <UserComment comment={review.text} stars={review.rating} />
            <SizedDivider size={40} />
            <DivisionLine />
            <SizedDivider size={33} />
          </div>
        );
      })}
    </DetailContainer>
  );
}
