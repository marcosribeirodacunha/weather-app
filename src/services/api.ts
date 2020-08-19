import axios from 'axios';

export const geocoderApi = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/',
});

// https://nominatim.openstreetmap.org/reverse?format=json&lat=-22.52&lon=-44.10&zoom=10&accept-language=pt_br

// export const weatherApi = axios.create({
//   baseURL: 'https://api.met.no/weatherapi/locationforecast/2.0/',
// });

export const weatherApi = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
});
