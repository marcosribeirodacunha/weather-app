export default interface ILocation {
  place_id: number;
  osm_type: string;
  osm_id: number;
  type: string;
  lat: string;
  lon: string;
  address: {
    city?: string;
    town?: string;
    state: string;
    country: string;
    country_code: string;
  };
}
