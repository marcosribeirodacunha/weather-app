import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import usePersistedState from '../../hooks/usePersistedState';
import useTheme from '../../hooks/useTheme';
import useSettings from '../../hooks/useSettings';

import { weatherApi } from '../../services/api';
import { ICurrentForecastResponse } from '../../interfaces/Forecast';
import IRecentLocation from '../../interfaces/RecentLocation';

import { loadLocationByName } from '../../services/loadLocation';

import { FlexContainer } from '../../styles/generics';
import SettingsBar from '../../components/SettingsBar';
import Card from './Card';
import {
  Container,
  Right,
  Search,
  Spotlight,
  CardsContainer,
  DiscoverTitle,
} from './styles';
import Loader from '../../components/Loader';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [recentsForecast, setRecentsForecast] = useState<
    ICurrentForecastResponse[]
  >([]);
  const [recentLocations, setRecentLocations] = usePersistedState<
    IRecentLocation[]
  >('@SkyForecast:recentLocations', []);

  const history = useHistory();
  const { theme } = useTheme();
  const { units, language } = useSettings();

  useEffect(() => {
    if (!recentLocations) return;

    setIsLoading(true);
    Promise.all(
      recentLocations.slice(0, 3).map(
        async (location): Promise<ICurrentForecastResponse> => {
          const params = {
            lat: location.lat,
            lon: location.lon,
            units,
            lang: language,
            appid: process.env.REACT_APP_API_APPID,
          };

          try {
            const { data } = await weatherApi.get<ICurrentForecastResponse>(
              'weather',
              { params }
            );

            if (Object.keys(data).length === 0)
              return {} as ICurrentForecastResponse;
            return data;
          } catch (error) {
            alert('Sorry, something went wrong. Please try again');
            console.log(error);
            return {} as ICurrentForecastResponse;
          }
        }
      )
    ).then(res => {
      setRecentsForecast(res);
      setIsLoading(false);
    });
  }, [units, language]);

  /* FUNCTION TO LOAD LOCATION INFO FROM A GIVEN CITY AND GET THE FORECAST */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!search) {
      setErrorMessage('Please type a city');
      return;
    }

    try {
      const [city, state, country] = search.split(',');

      /* LOAD CITY INFORMATION */
      const location = await loadLocationByName({
        city,
        state,
        country,
        language,
      });

      if (location === null) {
        setErrorMessage('Sorry, we could not find this city');
        return;
      }

      /* VERIFY IF THE LOCATION ALREADY EXISTS IN RECENTS AND SAVE IT THERE */
      let filteredRecentLocations = recentLocations.filter(
        recentLocation => recentLocation.osm_id !== location.osm_id
      );
      filteredRecentLocations.unshift(location);
      filteredRecentLocations.slice(0, 10);

      setRecentLocations(filteredRecentLocations);
      setErrorMessage('');

      history.push(`/${location.city}/${location.country}`, {
        ...location,
      });
    } catch (error) {
      alert('Sorry, something went wrong. Please try again');
      console.log(error);
    }
  }

  if (isLoading) return <Loader />;

  return (
    <Container>
      {/* HEADER */}
      <FlexContainer justify="space-between">
        {/* LOGO */}
        <Link to="/">
          <img
            src={require(`../../assets/logo_${theme}.svg`)}
            alt="Sky Forecast"
          />
        </Link>
        <Right>
          <p>My places</p>
          <SettingsBar />
        </Right>
      </FlexContainer>

      <Search>
        <h1>
          How is the <Spotlight>weather</Spotlight> in...
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="City, state, country"
          />
          <button>Search</button>
        </form>
        <span>{errorMessage}</span>
      </Search>

      <DiscoverTitle>Recent locations</DiscoverTitle>

      <CardsContainer>
        {recentsForecast.map(
          (data, i) =>
            Object.keys(data).length >= 0 && (
              <Card
                key={recentLocations[i].osm_id}
                location={recentLocations[i]}
                forecast={data}
              />
            )
        )}
      </CardsContainer>
    </Container>
  );
};

export default Home;
