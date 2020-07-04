import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { weatherApi } from '../../services/api';
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaWind,
  FaCloudRain,
  FaTint,
  FaLongArrowAltDown,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

import {
  Logo,
  Location,
  CardContainer,
  WeatherNow,
  Temperature,
  DetailsNow,
} from './styles';

import WeatherItem from '../../components/WeatherItem';

interface Climate {
  meta: {
    units: {
      air_temperature: string;
      precipitation_amount: string;
      relative_humidity: string;
    };
  };
  timeseries: {
    time: string;
    data: {
      instant: {
        details: {
          air_temperature: number;
          wind_from_direction: number;
          wind_speed: number;
          relative_humidity: number;
        };
      };
      next_1_hours?: {
        details: { precipitation_amount: number };
        summary: { symbol_code: string };
      };
    };
  }[];
}

const Details: React.FC = () => {
  const [climate, setClimate] = useState<Climate | null>(null);

  const {
    state: {
      latlon: { lat: latitude, lon: longitude },
      location,
    },
  } = useLocation();

  useEffect(() => {
    async function loadData() {
      try {
        const uri = `compact.json?lat=${latitude}&lon=${longitude}`;
        const {
          data: { properties },
        } = await weatherApi.get(uri);

        setClimate(properties);
      } catch (err) {
        console.log(err);
      }
    }

    loadData();
  }, []);

  function renderLocationString() {
    const {
      country_code,
      country,
      state = '',
      city = '',
      town = '',
      suburb = '',
      road = '',
    } = location;

    const countryStr = city || town ? country_code.toUpperCase() : country;

    const locationStr = `${road || suburb}, ${
      city || town
    }, ${state} - ${countryStr}`;

    return locationStr
      .replace(/ ,/g, '')
      .replace(/[, ,][ , ][ ,]+|^, /g, '')
      .replace(/^- /g, '');
  }

  function renderMinTemperature() {
    const today = new Date().getDate();
    if (climate) {
      const weathersToday = climate?.timeseries.filter(
        weather => new Date(weather.time).getDate() === today
      );

      const temperaturesToday = weathersToday?.map(
        weather => weather.data.instant.details.air_temperature
      );

      return Math.min(...temperaturesToday);
    }
  }

  function renderMaxTemperature() {
    const today = new Date().getDate();
    if (climate) {
      const weathersToday = climate?.timeseries.filter(
        weather => new Date(weather.time).getDate() === today
      );

      const temperaturesToday = weathersToday?.map(
        weather => weather.data.instant.details.air_temperature
      );

      return Math.max(...temperaturesToday);
    }
  }

  return (
    <>
      <Logo>Sky Forecasts</Logo>

      <Location>{renderLocationString()}</Location>

      {climate && (
        <CardContainer>
          <WeatherNow>
            <h2>
              {Intl.DateTimeFormat('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(climate.timeseries[0].time))}
            </h2>
            <div>
              <p>
                <img
                  src={require(`../../assets/weatherIcons/${climate.timeseries[0].data.next_1_hours?.summary.symbol_code}.svg`)}
                  alt={
                    climate.timeseries[0].data.next_1_hours?.summary.symbol_code
                  }
                />
                <span>
                  {
                    climate.timeseries[0].data.next_1_hours?.summary.symbol_code.split(
                      '_'
                    )[0]
                  }
                </span>
              </p>
              <Temperature>
                <strong>
                  {climate.timeseries[0].data.instant.details.air_temperature}
                  <span>
                    °
                    {climate.meta.units.air_temperature.charAt(0).toUpperCase()}
                  </span>
                </strong>
                <div>
                  <span>
                    <FaTemperatureHigh />
                    {renderMaxTemperature()}°
                  </span>
                  <span>
                    <FaTemperatureLow />
                    {renderMinTemperature()}°
                  </span>
                </div>
              </Temperature>
            </div>
          </WeatherNow>
          <DetailsNow>
            <div>
              <span>
                <FaWind />
                Vento
              </span>
              <p>
                <IconContext.Provider
                  value={{
                    style: {
                      marginRight: '.5em',
                      transform: `rotate(${climate.timeseries[0].data.instant.details.wind_from_direction}deg)`,
                    },
                  }}
                >
                  <FaLongArrowAltDown />
                </IconContext.Provider>
                {(
                  climate.timeseries[0].data.instant.details.wind_speed * 3.6
                ).toFixed(1)}{' '}
                Km/h
              </p>
            </div>
            <div>
              <span>
                <FaCloudRain />
                Chuva
              </span>
              <p>
                {
                  climate.timeseries[0].data.next_1_hours?.details
                    .precipitation_amount
                }{' '}
                {climate.meta.units.precipitation_amount}
              </p>
            </div>
            <div>
              <span>
                <FaTint />
                Umidade
              </span>
              <p>
                {climate.timeseries[0].data.instant.details.relative_humidity}{' '}
                {climate.meta.units.relative_humidity}
              </p>
            </div>
          </DetailsNow>
        </CardContainer>
      )}

      {climate &&
        climate.timeseries.map(
          weather =>
            weather.data.next_1_hours && (
              <WeatherItem
                key={weather.time}
                units={climate.meta.units}
                data={weather.data}
                time={weather.time}
              />
            )
        )}
    </>
  );
};

export default Details;
