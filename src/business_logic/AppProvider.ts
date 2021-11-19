import React, { createContext } from "react";
import { IFilters } from "../types/Filter";
import YelpApi from "./YelpApi";
import { BusinessSearchResponse } from "../types/BusinessSearchResponse";
import { categories } from "../data/categories";
import {
  DetailedYelpBusiness,
  YelpBusinessReviews,
} from "../types/YelpBusiness";
import usePromiseEffect from "../helpers/usePromiseEffect";

interface IAppContext {
  filters: IFilters;
  categories: { label: string; value: string }[];
  prices: string[];
  data: BusinessSearchResponse;
  selectedBusinessId: string;
  selectedBusiness: DetailedYelpBusiness;
  selectedBusinessReviews: YelpBusinessReviews;
  onSetFilters: (filters: IFilters) => VoidFunction;
  onSetCategory: (category: string) => VoidFunction;
  onSetPrice: (prices: string) => VoidFunction;
  onSetOpenNow: (openNow: boolean) => VoidFunction;
  onSetDefault: () => VoidFunction;
  onLoadMore: () => VoidFunction;
  loadPageById: (id: string) => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const yelpApi = YelpApi();

export const useAppContext = () => React.useContext(AppContext);

export const AppProvider = AppContext.Provider;

export const useProviderDefaultValues = () => {
  const [filters, setFilters] = React.useState<IFilters>({
    openNow: false,
    price: "$",
    category: "All",
    limit: 8,
    offset: 0,
  });

  const prices = ["$", "$$", "$$$", "$$$$", "$$$$$"];

  const [data, setData] = React.useState<BusinessSearchResponse>({
    businesses: [],
    total: 0,
  });

  const [selectedBusinessId, setSelectedBusinessId] = React.useState<string>();

  const [selectedBusiness, setSelectedBusiness] =
    React.useState<DetailedYelpBusiness>();
  const [reviews, setReviews] = React.useState<YelpBusinessReviews>({
    reviews: [],
    total: 0,
  });

  const onSetFilters = (value: IFilters) => {
    return () => setFilters(value);
  };

  const onSetCategory = (category: string) => {
    return () =>
      setFilters((filters) => ({ ...filters, category, limit: 8, offset: 0 }));
  };

  const onSetPrice = (price: string) => {
    return () =>
      setFilters((filters) => ({ ...filters, price, limit: 8, offset: 0 }));
  };

  const onSetOpenNow = (openNow: boolean) => {
    return () =>
      setFilters((filters) => ({ ...filters, openNow, limit: 8, offset: 0 }));
  };

  const onLoadMore = () => {
    return () =>
      setFilters((filters) => ({
        ...filters,
        limit: filters.limit,
        offset: filters.offset + filters.limit,
      }));
  };

  const onSetDefault = () => {
    return () =>
      setFilters({
        openNow: false,
        price: "$",
        category: "All",
        limit: 8,
        offset: 0,
      });
  };

  usePromiseEffect<BusinessSearchResponse>(
    () => yelpApi.searchBusiness(filters),
    (newData) => {
      if (filters.offset > 0) {
        setData((prevData) => ({
          total: newData.total,
          businesses: prevData.businesses.concat(newData.businesses),
        }));
      } else {
        setData(newData);
      }
    },
    [filters]
  );

  usePromiseEffect<DetailedYelpBusiness | null>(
    () => {
      if (selectedBusinessId) {
        return yelpApi.searchBusinessById(selectedBusinessId);
      }
    },
    (data) => {
      if (data != null) {
        setSelectedBusiness(data);
      }
    },
    [selectedBusinessId]
  );

  usePromiseEffect<YelpBusinessReviews | null>(
    () => {
      if (selectedBusinessId) {
        return yelpApi.searchBusinessReviewsById(selectedBusinessId);
      }
    },
    (data) => {
      if (data != null) {
        setReviews(data);
      }
    },
    [selectedBusinessId]
  );

  const loadPageById = (selectedBusiness: string) =>
    setSelectedBusinessId(selectedBusiness);

  return {
    onSetFilters,
    onSetCategory,
    onSetPrice,
    onSetOpenNow,
    onLoadMore,
    categories,
    prices,
    filters,
    data,
    onSetDefault,
    loadPageById,
    selectedBusinessId,
    selectedBusiness,
    selectedBusinessReviews: reviews
  } as IAppContext;
};
