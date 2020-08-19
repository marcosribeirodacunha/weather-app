import React from 'react';
import useSettings from '../../../hooks/useSettings';

import { IDay } from '../../../interfaces/Forecast';

import { Container, DayTemperature, DetailedTemperature } from './styles';

import { getWeatherIcon } from '../../../assets/weatherIcons';

interface Props {
  data: IDay;
}

const DayTab: React.FC<Props> = ({ data }) => {
  const { units } = useSettings();

  function renderTemperatureUnit() {
    return units === 'metric' ? '°C' : '°F';
  }

  return (
    <Container>
      <DayTemperature>
        <div>
          <img
            src={getWeatherIcon(data.weather[0].id, data.weather[0].icon)}
            alt={data.weather[0].description}
          />
          <p>{data.weather[0].description}</p>
        </div>
        <div>
          <strong>
            {Math.round(data.temp.day)} <span>{renderTemperatureUnit()}</span>
          </strong>
          <p>Feels like {Math.round(data.feels_like.day)}°</p>
          <p>
            {Math.round(data.temp.max)}° /{' '}
            <span>{Math.round(data.temp.min)}°</span>
          </p>
        </div>
      </DayTemperature>

      <DetailedTemperature>
        <div>
          <h1>Morning</h1>
          <strong>
            {Math.round(data.temp.morn)} <span>{renderTemperatureUnit()}</span>
          </strong>
          <p>Feels like {Math.round(data.feels_like.morn)}°</p>
        </div>

        <div>
          <h1>Evening</h1>
          <strong>
            {Math.round(data.temp.eve)} <span>{renderTemperatureUnit()}</span>
          </strong>
          <p>Feels like {Math.round(data.feels_like.eve)}°</p>
        </div>

        <div>
          <h1>Night</h1>
          <strong>
            {Math.round(data.temp.night)} <span>{renderTemperatureUnit()}</span>
          </strong>
          <p>Feels like {Math.round(data.feels_like.night)}°</p>
        </div>
      </DetailedTemperature>
    </Container>
  );
};

export default DayTab;
