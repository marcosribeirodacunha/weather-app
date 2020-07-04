import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsTrash } from 'react-icons/bs';

import { Container, DeleteButton } from './styles';

interface Props {
  place_id: number;
  location: {
    country_code: string;
    country: string;
    state?: string;
    city?: string;
    town?: string;
    suburb?: string;
    road?: string;
  };
  latlon: {
    lat: string;
    lon: string;
  };
  weatherIcon: string;
  temperature: number;
  unregisterClimate: (place_id: number) => void;
}

const Card: React.FC<Props> = ({
  place_id,
  location,
  latlon,
  weatherIcon,
  temperature,
  unregisterClimate,
}) => {
  const weatherName = weatherIcon.split('_')[0];

  function createRenderLocationString() {
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

  return (
    <Container>
      {/* I don't think to have a Link inside a container is the best way to do that, but for a while that's just what I thought */}
      <Link
        to={{
          pathname: 'details',
          state: { latlon, location },
        }}
      >
        <div>
          <h6>{createRenderLocationString()}</h6>
          <span>
            <img
              src={require(`../../assets/weatherIcons/${weatherIcon}.svg`)}
              alt={weatherIcon}
            />
            <p>{weatherName}</p>
          </span>
        </div>
        <div>
          <strong>{temperature}°</strong>
          <small>
            Detalhes
            <BsArrowRight />
          </small>
        </div>
      </Link>
      <DeleteButton onClick={() => unregisterClimate(place_id)}>
        <BsTrash />
      </DeleteButton>
    </Container>
  );
};

export default Card;
