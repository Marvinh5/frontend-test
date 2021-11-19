import {YelpBusiness} from "./YelpBusiness";

export interface BusinessSearchResponse {
    businesses: YelpBusiness[]
    total: number
}