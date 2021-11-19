import config from "../data/config";
import { ApiUrl } from "./Url"

export default function MapQuest(){
  return {
    generateMapUrl(lat:number, long:number) {
      const apiUrl = new ApiUrl(`https://www.mapquestapi.com/staticmap/v5/map`);
      apiUrl.addQueryParams({
        defaultMarker: 'marker-lg-3B5998-22407F',
        size: '600,300@2x',
        zoom: 15,
        center: `${lat},${long}`,
        locations: `${lat},${long}|marker-blue`,
        key: config.mapQuestApiKey
      })
      return apiUrl.parsedUrl
    }
  }
}