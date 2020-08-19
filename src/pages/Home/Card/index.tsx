import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import useSettings from '../../../hooks/useSettings';

import IRecentLocation from '../../../interfaces/RecentLocation';
import { ICurrentForecastResponse } from '../../../interfaces/Forecast';

import wi from '../../../assets/weatherIcons';
import { FlexContainer } from '../../../styles/generics';
import {
  Container,
  LocationAndTemperature,
  Weather,
  Divider,
  Details,
} from './styles';

interface Props {
  location: IRecentLocation;
  forecast: ICurrentForecastResponse;
}

const Card: React.FC<Props> = ({ location, forecast }) => {
  const { units } = useSettings();

  return (
    <Container to={`/${location.city}/${location.country}`}>
      <FlexContainer justify="space-between">
        <LocationAndTemperature>
          <h2>{location.city}</h2>
          <p>{location.country}</p>
          <div>
            <p>
              {Math.round(forecast.main.temp)}{' '}
              <span>°{units === 'metric' ? 'C' : 'F'}</span>
            </p>
            <span>Feels like {Math.round(forecast.main.feels_like)}°</span>
          </div>
        </LocationAndTemperature>

        <Weather>
          <img
            src={wi[`${forecast.weather[0].id}-${forecast.weather[0].icon}`]}
            alt={forecast.weather[0].description}
          />
          <span>Sunny</span>
        </Weather>
      </FlexContainer>
      <Details>
        <p>
          Humidity <span>{forecast.main.humidity}%</span>
        </p>
        <Divider />
        <p>
          Rain <span>{forecast.rain || 0} mm</span>
        </p>
        <Divider />
        <FlexContainer as="p" alignItems="center">
          Details <BsArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
        </FlexContainer>
      </Details>
    </Container>
  );
};

export default Card;
