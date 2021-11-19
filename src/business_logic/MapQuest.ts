import { ApiUrl } from "./Url"

export default function MapQuest(){
  return {
    generateMapUrl(lat:number, long:number) {
      const apiUrl = new ApiUrl(`https://www.mapquestapi.com/staticmap/v5/map`);
      apiUrl.addQueryParams({
        defaultMarker: 'marker-lg-3B5998-22407F',
        size: '600,300@2x',
        zoom: 19,
        center: `${lat},${long}`,
        locations: `${lat},${long}|marker-green`,
        key: 'WGmq2ZgGUgaGo7gIzhokXSdgOuZmju5a'
      })
      return apiUrl.parsedUrl
    }
  }
}