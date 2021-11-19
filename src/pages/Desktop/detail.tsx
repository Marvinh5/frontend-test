import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useAppContext } from "../../business_logic/AppProvider";
import MapQuest from "../../business_logic/MapQuest";
import CategoryAndPrice from "../../components/desktop/CategoryAndPrice";
import IsOpenContainer from "../../components/desktop/IsOpenContainer";
import PageHeader from "../../components/desktop/PageHeader";
import ReviewsCount from "../../components/desktop/ReviewsCount";
import StarRating from "../../components/desktop/StarRating";
import UserCard from "../../components/desktop/UserCard";
import { UserComment } from "../../components/desktop/UserComment";
import Loading from "../../components/shared/Loading";
import SizedDivider from "../../components/SizedDivider";
import Spacer from "../../components/Spacer";

const StyledDetailContainer = styled.div`
  max-width: 1440px;
  padding-top: 36px;
  margin:auto;
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

const StyledDivisionLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  position: absolute;
  inset: 0;
`;

const ImagesAndMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 228px;
  flex-direction: row;
  overflow-x: auto;
`;

const MapContainer = styled.div<{ background: string }>`
  width: 640px;
  height: 100%;
  background: gray;
  background-image: url("${props => props.background}");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Image = styled.div<{ background?: string }>`
  background: gray;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 304px;
`;

const LocationText = styled.div`
  font-size: 20px;
`;

const DivisionLineContainer = styled.div`
  position: relative;
  height: 1px;
  overflow: visible;
`;

const CommentAndUserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DivisionLine = () => {
  return (
    <DivisionLineContainer>
      <StyledDivisionLine />
    </DivisionLineContainer>
  );
};

function Detail() {
  const { id } = useParams();

  const { loadPageById, selectedBusiness, selectedBusinessReviews } =
    useAppContext();

  React.useEffect(() => {
    if (id) {
      setTimeout(() => {
        loadPageById(id);
      }, 0);
    }
  }, []);

  if (!selectedBusiness || !selectedBusinessReviews) return <Loading />;

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
          <SizedDivider x size={32} />

          {photos.map((photo) => {
            return (
              <>
                <Image background={photo} />
                <SizedDivider x size={32} />
              </>
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
            <>
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
            </>
          );
        })}
      </StyledPaddedContainer>
    </StyledDetailContainer>
  );
}

export default Detail;
