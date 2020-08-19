import { geocoderApi } from './api';
import ILocation from '../interfaces/Location';
import IRecentLocation from '../interfaces/RecentLocation';

interface Params {
  city: string;
  state?: string;
  country?: string;
  language: string;
}

export async function loadLocationByName({
  city,
  state = '',
  country = '',
  language,
}: Params): Promise<IRecentLocation | null> {
  try {
    /* fORMAT PARAMS AND TRY TO LOAD LOCATION INFO */
    const params = {
      city: city.trim(),
      state: state.trim(),
      country: country.trim(),
      format: 'json',
      addressdetails: 1,
      'accept-language': language,
      limit: 1,
    };

    const { data } = await geocoderApi.get<ILocation[]>('/search', {
      params,
    });

    /* VALIDATIONS */
    if (data.length === 0) {
      return null;
    }

    if (
      data[0].type !== 'administrative' &&
      data[0].type !== 'city' &&
      data[0].type !== 'town'
    ) {
      return null;
    }

    if (!data[0].address.city && !data[0].address.town) {
      return null;
    }

    /* RETURN A FORMATED LOCATION OBJECT */
    return {
      osm_id: data[0].osm_type.charAt(0).toUpperCase() + data[0].osm_id,
      city: (data[0].address.city || data[0].address.town) as string,
      country: data[0].address.country,
      lat: data[0].lat,
      lon: data[0].lon,
    };
  } catch (error) {
    return error;
  }
}
