import axios from 'axios';

export const geocoderApi = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/',
  params: {
    format: 'json',
    addressdetails: 1,
    limit: 1,
  },
});

export const weatherApi = axios.create({
  baseURL: 'https://api.met.no/weatherapi/locationforecast/2.0/',
});
