export interface ITimeserie {
  time: string;
  data: {
    instant: {
      details: {
        air_temperature: number;
      };
    };
    next_1_hours: {
      summary: {
        symbol_code: string;
      };
    };
  };
}

export default interface IClimate {
  properties: {
    meta: {
      updated_at: string;
    };
    timeseries: Array<ITimeserie>;
  };
  location: {
    place_id: number;
    lat: string;
    lon: string;
    address: {
      country_code: string;
      country: string;
      state?: string;
      city?: string;
      town?: string;
      suburb?: string;
      road?: string;
    };
  };
}
