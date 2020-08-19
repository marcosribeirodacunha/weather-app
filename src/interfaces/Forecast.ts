/* ********************************************************** */
/*         INTERFACE FOR WEATHER ICON AND DESCRIPTION         */
/* ********************************************************** */

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

/* *********************************************************** */
/*       INTERFACE FOR DESCRIBING GERNERIC FORECAST DATA       */
/* *********************************************************** */

export interface IForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Array<IWeather>;

  // I don't know a better solution to this problem
  rain?: any;
}

type TTemperature = {
  day: number;
  min: number;
  max: number;
  morn: number;
  eve: number;
  night: number;
};

type TFeelsLike = Omit<TTemperature, 'min' | 'max'>;

type TRain = {
  '1h'?: number;
  '3h'?: number;
};

/* ********************************************************* */
/*          INTERFACE FOR CURRENT FORECAST API CALL          */
/* ********************************************************* */

export interface ICurrentForecastResponse {
  coord: {
    lat: number;
    lon: number;
  };
  weather: Array<IWeather>;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  rain?: number;
  dt: number;
  id: number;
}

/* ********************************************************* */
/*            INTERFACE FOR ONE CALL API FORECAST            */
/* ********************************************************* */

export interface ICurrent extends IForecast {
  temp: number;
  feels_like: number;
  // rain?: TRain;
}

export interface IHour extends Omit<IForecast, 'sunrise' | 'sunset' | 'uvi'> {
  temp: number;
  feels_like: number;
  // rain?: TRain;
  // pop: number;
  dt_txt?: string;
}

export interface IDay extends IForecast {
  temp: TTemperature;
  feels_like: TFeelsLike;
}

export interface IOneCallForecastResponse {
  lat: number;
  lon: number;
  current: ICurrent;
  hourly: Array<IHour>;
  daily: Array<IDay>;
}

/* ********************************************************* */
/*        INTERFACE FOR 5 DAYS / 3 HOURS API FORECAST        */
/* ********************************************************* */

export interface IThreeHoursForecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: IWeather[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  // pop: number;
  rain?: {
    '3h': number;
  };
  dt_txt: string;
}

export interface IFiveDaysForecastResponse {
  city: {
    id: number;
    coord: {
      lat: number;
      lon: number;
    };
  };
  list: Array<IThreeHoursForecast>;
}
