import React from 'react';
import { FiNavigation2 } from 'react-icons/fi';
import useSettings from '../../../hooks/useSettings';

import { IHour } from '../../../interfaces/Forecast';

import { Container, Icon, Wind } from './styles';

import { getWeatherIcon } from '../../../assets/weatherIcons';
import { formatDate } from '../../../helpers/format';

interface Props {
  data: Array<IHour>;
}

const HourTab: React.FC<Props> = ({ data }) => {
  const compassSectors = [
    'North',
    'North-northeast',
    'Northeast',
    'East-northeast',
    'East',
    'East-southeast',
    'Southeast',
    'South-southeast',
    'South',
    'South-southwest',
    'Southwest',
    'West-southwest',
    'West',
    'West-northwest',
    'Northwest',
    'North-northwest',
    'North',
  ];

  const { units, language } = useSettings();

  function renderWindSpeed(speed: number) {
    return units === 'metric' ? Math.round(speed * 3.6) : Math.round(speed);
  }

  function renderWindDirectionName(angle: number) {
    let key = Math.round((angle % 360) / 22.5);
    return compassSectors[key];
  }

  return (
    <>
      {data.map(hour => (
        <Container key={hour.dt}>
          <p>{formatDate(hour.dt, language, 'hm')}</p>
          <strong>
            {Math.round(hour.temp)}{' '}
            <span>°{units === 'metric' ? 'C' : 'F'}</span>
          </strong>
          <Icon>
            <img
              src={getWeatherIcon(hour.weather[0].id, hour.weather[0].icon)}
              alt={hour.weather[0].description}
            />
            <p>{hour.weather[0].description}</p>
          </Icon>
          <p>
            <span>Rain</span> {hour.rain?.['1h'] || 0} mm
          </p>
          <Wind>
            <p>
              <span>Wind</span> {renderWindSpeed(hour.wind_speed)}{' '}
              {units === 'metric' ? 'km/h' : 'mph'}
            </p>
            <FiNavigation2 size={20} style={{ transform: 'rotate(135deg)' }} />
            <p>{renderWindDirectionName(hour.wind_deg)}</p>
          </Wind>
        </Container>
      ))}
    </>
  );
};

export default HourTab;
