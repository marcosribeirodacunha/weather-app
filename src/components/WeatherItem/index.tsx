import React from 'react';

import { FaLongArrowAltDown } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Container } from './styles';

interface Props {
  units: {
    air_temperature: string;
    precipitation_amount: string;
  };
  time: string;
  data: {
    instant: {
      details: {
        air_temperature: number;
        wind_from_direction: number;
        wind_speed: number;
      };
    };
    next_1_hours?: {
      details: { precipitation_amount: number };
      summary: { symbol_code: string };
    };
  };
}

const WeatherItem: React.FC<Props> = ({
  units,
  time,
  data: { instant, next_1_hours },
}) => {
  function renderDateString() {
    return Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(time));
  }

  function renderTemperatureString() {
    const {
      details: { air_temperature },
    } = instant;
    const temperatureUnit = units?.air_temperature.charAt(0).toUpperCase();

    return `${air_temperature} °${temperatureUnit}`;
  }

  function renderPrecipitationString() {
    const precipitationUnit = units?.precipitation_amount;

    if (next_1_hours) {
      var {
        details: { precipitation_amount },
      } = next_1_hours;
    }

    return `${precipitation_amount} ${precipitationUnit}`;
  }

  const windDirectionIconStyle = {
    style: {
      marginRight: '.5em',
      transform: `rotate(${instant.details.wind_from_direction}deg)`,
    },
  };

  return (
    <Container>
      <p>{renderDateString()}</p>
      {next_1_hours && (
        <img
          src={require(`../../assets/weatherIcons/${next_1_hours.summary.symbol_code}.svg`)}
          alt={next_1_hours.summary.symbol_code.split('_')[0]}
        />
      )}
      <strong>{renderTemperatureString()}</strong>
      <p>{renderPrecipitationString()}</p>
      <p>
        <IconContext.Provider value={windDirectionIconStyle}>
          <FaLongArrowAltDown />
        </IconContext.Provider>
        {(instant.details.wind_speed * 3.6).toFixed(1)} Km/h
      </p>
    </Container>
  );
};

export default WeatherItem;
