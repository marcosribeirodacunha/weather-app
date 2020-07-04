import React, { useState, useEffect, FormEvent } from 'react';
import { geocoderApi, weatherApi } from '../../services/api';

import { hoursToNow } from '../../helpers/date';
import Card from '../../components/Card';
import { Logo, Title, Form, CardContainer } from './styles';

interface Climates {
  properties: {
    meta: {
      updated_at: string;
    };
    timeseries: {
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
    }[];
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

const Home: React.FC = () => {
  const [search, setSearch] = useState('Rio de Janeiro');
  const [climates, setClimates] = useState<Climates[]>(() => {
    const storageClimates = localStorage.getItem('@WeatherApp:climates');
    return storageClimates ? JSON.parse(storageClimates) : [];
  });

  /* Update climates registered */
  useEffect(() => {
    async function updateClimates() {
      const updatedClimates = await Promise.all(
        climates.map(async climate => {
          const uri = `compact.json?lat=${climate.location.lat}&lon=${climate.location.lon}`;
          const { data: climateData } = await weatherApi.get<Climates>(uri);

          return { ...climate, ...climateData };
        })
      );
      setClimates(updatedClimates);
    }

    updateClimates();
  }, []);

  /* Set in the in Local Storage all climates registered */
  useEffect(() => {
    localStorage.setItem('@WeatherApp:climates', JSON.stringify(climates));
  }, [climates]);

  /* Find latlon from search string and get climate to this location */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (search.length <= 1)
      return alert('Please, type 2 or more word to search a location!');

    try {
      // Merging params does not seem to be working on axios 0.19
      let query = { params: geocoderApi.defaults.params };
      const {
        data: [location],
      } = await geocoderApi.get(`search/${search}`, query);

      const isRegistered = climates.some(
        climate => climate.location.place_id === location.place_id
      );

      // If location is already registered weather api will only be called if
      // it's necessary to update the climate for that location
      // (last update was more than 4 hours)
      if (isRegistered) {
        const climate = climates.filter(
          climate => climate.location.place_id === location.place_id
        )[0];
        const updatedAt = new Date(climate.properties.meta.updated_at);
        const diff = hoursToNow(updatedAt);

        if (diff < 4)
          return alert('This location is already registered and up to date!');
      }

      const uri = `compact.json?lat=${location.lat}&lon=${location.lon}`;
      const { data: climateData } = await weatherApi.get<Climates>(uri);

      const newClimate = {
        ...climateData,
        location: {
          place_id: location.place_id,
          lat: location.lat,
          lon: location.lon,
          address: {
            country_code: location.address.country_code,
            country: location.address.country,
            state: location.address.state,
            city: location.address.city,
            town: location.address.town,
            suburb: location.address.suburb,
            road: location.address.road,
          },
        },
      };

      const filteredClimates = climates.filter(
        climate => climate.location.place_id !== newClimate.location.place_id
      );

      setClimates([newClimate, ...filteredClimates]);
      setSearch('');
    } catch (err) {
      alert(
        'Sorry, an error occurred while processing your request. Please try again!'
      );
      console.log(err);
    }
  }

  function unregisterClimate(place_id: number) {
    const filteredClimates = climates.filter(
      climate => climate.location.place_id !== place_id
    );
    setClimates(filteredClimates);
  }

  return (
    <>
      <Logo>Sky Forecasts</Logo>

      <Title>Saiba como está o clima em qualquer localidade que desejar</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="search">Digite o local</label>
        <div>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </div>
      </Form>

      <CardContainer>
        {climates.map(climate => (
          <Card
            key={climate.location.place_id}
            place_id={climate.location.place_id}
            location={climate.location.address}
            latlon={{
              lat: climate.location.lat,
              lon: climate.location.lon,
            }}
            weatherIcon={
              climate.properties.timeseries[0].data.next_1_hours.summary
                .symbol_code
            }
            temperature={
              climate.properties.timeseries[0].data.instant.details
                .air_temperature
            }
            unregisterClimate={unregisterClimate}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default Home;
