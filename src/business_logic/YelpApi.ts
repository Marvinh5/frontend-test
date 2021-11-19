import config from "../data/config";
import { ApiUrl } from "./Url";
import { IFilters } from "../types/Filter";
import { BusinessSearchResponse } from "../types/BusinessSearchResponse";
import { categories } from "../data/categories";
import {
  DetailedYelpBusiness,
  YelpBusinessReviews,
} from "../types/YelpBusiness";

export default function YelpApi() {
  const apiKey = config.yelpApiKey;
  let baseUrl = `https://api.yelp.com/v3`;
  const proxy = `http://localhost:8010/proxy/v3`;

  if (process.env.NODE_ENV != "production") {
    console.log(`Using proxy: ${proxy}`);
    baseUrl = proxy;
  }

  async function searchBusinessById(
    id: string
  ): Promise<DetailedYelpBusiness | null> {
    const url = new ApiUrl(`${baseUrl}/businesses/${id}`);

    const response = await fetch(`${url.parsedUrl}`, {
      headers: {
        Authorization: apiKey,
      },
    });
    if (response.ok) {
      return response.json();
    }

    return null;
  }

  async function searchBusinessReviewsById(
    id: string
  ): Promise<YelpBusinessReviews | null> {
    const url = new ApiUrl(`${baseUrl}/businesses/${id}/reviews`);

    const response = await fetch(`${url.parsedUrl}`, {
      headers: {
        Authorization: apiKey,
      },
    });
    if (response.ok) {
      return response.json();
    }

    return null;
  }

  async function searchBusiness(
    filters: IFilters
  ): Promise<BusinessSearchResponse> {
    const url = new ApiUrl(`${baseUrl}/businesses/search`);

    const filterCategories: string[] = [];

    if (filters.category && filters.category != "All") {
      filterCategories.push(filters.category);
    } else {
      filterCategories.concat(categories.map((c) => c.value));
    }

    url.addQueryParams({
      location: config.location,
      open_now: filters.openNow != null && filters.openNow,
      price: filters?.price?.split("").length,
      categories: filterCategories.join(","),
      limit: filters.limit ?? 8,
      offset: filters.offset,
    });
    const response = await fetch(`${url.parsedUrl}`, {
      headers: {
        Authorization: apiKey,
      },
    });
    if (response.ok) {
      return response.json();
    }

    return {
      businesses: [],
      total: 0,
    };
  }

  return {
    searchBusiness,
    searchBusinessById,
    searchBusinessReviewsById,
  };
}
