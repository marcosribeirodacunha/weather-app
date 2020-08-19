import React from 'react';
import { getWeatherIcon } from '../../../assets/weatherIcons';

import { formatDate } from '../../../helpers/format';
import { IDay } from '../../../interfaces/Forecast';
import { Container, Card } from './styles';

import useSettings from '../../../hooks/useSettings';

interface Props {
  data: Array<IDay>;
}

const WeekTab: React.FC<Props> = ({ data }) => {
  const { language } = useSettings();

  return (
    <Container>
      {data.slice(1).map((day, i) => (
        <Card key={i}>
          <h2>{formatDate(day.dt, language, 'w')}</h2>
          <img
            src={getWeatherIcon(day.weather[0].id, day.weather[0].icon)}
            alt={day.weather[0].description}
          />
          <p>
            {Math.round(day.temp.max)}° /{' '}
            <span>{Math.round(day.temp.min)}°</span>
          </p>
        </Card>
      ))}
    </Container>
  );
};

export default WeekTab;
