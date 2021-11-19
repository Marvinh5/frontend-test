export interface YelpBusiness {
  id: string;
  name: string;
  image_url: string;
  rating: number;
  price: string;
  location: {
    address1: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
  };
  is_closed: boolean;
  categories: [
    {
      alias: string;
      title: string;
    }
  ];
}

export interface DetailedYelpBusiness extends YelpBusiness {
  location: {
    address1: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    display_address: string[];
  };
  review_count: number;
  photos: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  hours: {
    is_open_now: boolean;
  }[];
}

interface RatingUser {
  id: string;
  profile_url: string;
  image_url: string;
  name: string;
}

interface Rating {
  user: RatingUser;
  text: string;
  time_created: string;
  url: string;
  rating: number;
  id: string;
}

export interface YelpBusinessReviews {
  reviews: Rating[];
  total: number;
}
