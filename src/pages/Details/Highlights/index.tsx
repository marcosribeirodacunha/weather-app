import React from 'react';
import { FiSunrise, FiSunset, FiNavigation2 } from 'react-icons/fi';

import useSettings from '../../../hooks/useSettings';

import { ICurrent, IDay } from '../../../interfaces/Forecast';

import { formatDate } from '../../../helpers/format';
import { FlexContainer } from '../../../styles/generics';
import { Container, Card, UVIndexLabel, UVIndexBar } from './styles';

interface Props {
  UVindex?: boolean;
  data: ICurrent | IDay;
}

const Highlights: React.FC<Props> = ({ UVindex, data }) => {
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

  function renderUVIndexLevel(uvi: number) {
    uvi = Math.round(uvi);

    if (uvi < 3) return 'Low';
    else if (uvi >= 3 && uvi < 6) return 'Moderate';
    else if (uvi >= 6 && uvi < 8) return 'High';
    else if (uvi >= 8 && uvi < 10) return 'Very high';
    else return 'Extremely high';
  }

  function renderWindSpeed(speed: number) {
    return units === 'metric' ? Math.round(speed * 3.6) : Math.round(speed);
  }

  function renderWindDirectionName(angle: number) {
    let key = Math.round((angle % 360) / 22.5);
    return compassSectors[key];
  }

  return (
    <Container>
      {UVindex ? (
        <Card>
          <h2>UV Index</h2>
          <UVIndexLabel>
            <span>3</span>
            <span>6</span>
            <span>8</span>
            <span>10</span>
          </UVIndexLabel>
          <UVIndexBar value={Math.round(data.uvi)}>
            <div />
          </UVIndexBar>
          <p>
            {renderUVIndexLevel(data.uvi)} ({Math.round(data.uvi)})
          </p>
        </Card>
      ) : (
        <Card>
          <h2>Rain</h2>
          <strong>
            {data.rain || data.rain?.['1h'] || 0}{' '}
            <span style={{ verticalAlign: 0 }}>mm</span>
          </strong>
        </Card>
      )}

      <Card>
        <h2>Humidity</h2>
        <strong>
          {data.humidity} <span>%</span>
        </strong>
        <p>Normal???</p>
      </Card>

      <Card>
        <h2>Sunrise & Sunset</h2>
        <FlexContainer alignItems="center" as="p" style={{ margin: '1rem 0' }}>
          <FiSunrise /> {formatDate(data.sunrise, language, 'hm')}
        </FlexContainer>
        <FlexContainer alignItems="center" as="p">
          <FiSunset /> {formatDate(data.sunset, language, 'hm')}
        </FlexContainer>
      </Card>

      <Card>
        <h2>Wind status</h2>
        <strong>
          {renderWindSpeed(data.wind_speed)}{' '}
          <span style={{ verticalAlign: 0 }}>
            {units === 'metric' ? 'Km/h' : 'mph'}
          </span>
        </strong>
        <FlexContainer alignItems="center" as="p">
          <FiNavigation2
            size={16}
            style={{ transform: `rotate(${data.wind_deg + 180}deg)` }}
          />{' '}
          {renderWindDirectionName(data.wind_deg)}
        </FlexContainer>
      </Card>

      {/* TEMPORARY SOLUTION */}
      {/* OPENWEATHERMAP DOCS SAYS THIS FIELD COME ALSO IN DALLY FORCAST BUT
          THIS IS NOT HAPPENING.
         */}
      {data.visibility && (
        <Card>
          <h2>Visibility</h2>
          <strong>
            {data.visibility / 1000}{' '}
            <span style={{ verticalAlign: 0 }}>Km</span>
          </strong>
          <p>Average???</p>
        </Card>
      )}

      <Card>
        <h2>Cloudiness</h2>
        <strong>
          {data.clouds} <span>%</span>
        </strong>
      </Card>
    </Container>
  );
};

export default Highlights;
