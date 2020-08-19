import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

/* ICONS */
import { Link, useParams, useLocation } from 'react-router-dom';
import { FiSearch, FiCloudRain } from 'react-icons/fi';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

/* CUSTOM HOOKS */
import usePersistedState from '../../hooks/usePersistedState';
import useSettings from '../../hooks/useSettings';
import useTheme from '../../hooks/useTheme';

// INTERFACES
import {
  IOneCallForecastResponse,
  IFiveDaysForecastResponse,
  ICurrent,
  IHour,
  IDay,
} from '../../interfaces/Forecast';
import IRecentLocation from '../../interfaces/RecentLocation';

/* SERVICES */
import { weatherApi } from '../../services/api';
import { loadLocationByName } from '../../services/loadLocation';

/* STYLES AND COMPONENTS */
import SettingsBar from '../../components/SettingsBar';
import Loader from '../../components/Loader';
import Highlights from './Highlights';
import WeekTab from './WeekTab';
import DayTab from './DayTab';
import HourTab from './HourTab';
import { FlexContainer } from '../../styles/generics';
import {
  Aside,
  CurrentForecast,
  DailyForecastNavigation,
  DayLink,
  Weather,
  Temperature,
  MainContent,
  Search,
  ErrorMessage,
  Tab,
  TabLink,
} from './styles';

/* HELPERS AND OTHERS */
import { formatDate } from '../../helpers/format';
import wi from '../../assets/weatherIcons';

/* ****************************** END IMPORTS ****************************** */

interface IRouteParams {
  city: string;
  country: string;
}

const Details: React.FC = () => {
  /* STATES */
  const [isLoading, setIsLoading] = useState(true);
  const [showHour, setShowHour] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [selectedDayForecast, setSelectedDayForecast] = useState<IHour[]>([]);
  const [loadedAllHourData, setloadedAllHourData] = useState(false);
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [recentLocations, setRecentLocations] = usePersistedState<
    IRecentLocation[]
  >('@SkyForecast:recentLocations', []);

  const [location, setLocation] = useState<IRecentLocation>(
    {} as IRecentLocation
  );

  /* API STATES */
  const [currentForecast, setCurrentForecast] = useState<ICurrent>(
    {} as ICurrent
  );
  const [dailyForecast, setDailyForecast] = useState<IDay[]>([]);
  const [hourForecast, setHourForecast] = useState<IHour[]>([]);

  /* HOOKS VALUES */
  const routeParams = useParams<IRouteParams>();
  const { state: locationState } = useLocation<IRecentLocation | null>();
  const history = useHistory();
  const { theme } = useTheme();
  const { units, language } = useSettings();

  /* ---------- COMPONENT DID MOUNT ---------- */
  useEffect(() => {
    setIsLoading(true);
    setShowHour(false);
    setShowDetails(false);
    /* FUNCTION TO LOAD FORECAST DATA FROM ONE-CALL-API AND SET INSIDE THE STATE */
    async function loadForecast(lat: string, lon: string) {
      const params = {
        lat,
        lon,
        units,
        lang: language,
        exclude: 'minutely',
        appid: process.env.REACT_APP_API_APPID,
      };

      try {
        const { data } = await weatherApi.get<IOneCallForecastResponse>(
          '/onecall',
          {
            params,
          }
        );
        setCurrentForecast(data.current);
        setDailyForecast(data.daily);
        setHourForecast(data.hourly);
        setIsLoading(false);
      } catch (error) {
        alert('Sorry, something went wrong. Please try again');
        console.log(error);
      }
    }
    /*
    IF THE USER ACCESSES THIS ROUTE DIRECTLY THROUGH THE URL (NOT SEARCHING
    ON THE HOMEPAG) THEN SEARCH THE CITY AND COUNTRY PASSED IN THE URL AND GET
    ALL THE INFORMATION FROM THIS PLACE TO BE ABLE TO GET FORECAST TO THIS CITY
    --> NOTE: I'M DOING THIS TO BE ABLE TO USE A MORE READABLE URL (USING CITY
        AND COUNTRY NAMES IS BETTER THAN USING LATITUDE AND LONGITUDE) <--
    */
    if (!locationState) {
      loadLocationByName({ ...routeParams, language }).then(response => {
        if (response === null) {
          alert('Sorry, we could not find this city');
          history.push('/');
          return;
        }

        let filteredRecentLocations = recentLocations.filter(
          recentLocation => recentLocation.osm_id !== response?.osm_id
        );

        filteredRecentLocations.unshift(response);
        filteredRecentLocations.slice(0, 10);

        setLocation(response);
        setRecentLocations(filteredRecentLocations);
        loadForecast(response.lat, response.lon);
      });
      return;
    }
    /*
      IF THE USER HAS BEEN REDIRECTED TO USING THE SEARCH FORM ON THE HOMEPAGE
      THEN LOAD THE FORECAST DATA FROM THE SEARCHED CITY.
    */
    setLocation(locationState);
    loadForecast(locationState.lat, locationState.lon);
  }, [routeParams, language, units]);
  /* ---------- END COMPONENT DID MOUNT ---------- */

  /* ----------------------------------------------------------------------
    WHEN USER SELECT ANOTHER DAY IN DETAILS TAB, FILTER HOUR ARRAY TO GET
    ALL DATA FROM THAT DAY TO SHOW IN "HOUR" TAB
  ------------------------------------------------------------------------- */
  useEffect(() => {
    if (hourForecast.length === 0) return;

    const day = new Date(dailyForecast[selectedDay].dt * 1000).getDate();

    /*
      FROM ARG IS NECESSARY BECAUSE USING THE HOURFORECAST STATE DON'T WORK
      WHEN LOADING FIRST TIME THE DATA FROM "FIVE DAYS THREE HOURS" API
    */
    function getHourForecastData(from: IHour[]) {
      const filteredHourForecast = from.filter(
        forecast => new Date(forecast.dt * 1000).getDate() === day
      );
      setSelectedDayForecast(filteredHourForecast);
    }
    /*
      IF ALL DATA IS NOT LOADED AND SELECTED DAY IS THE THIRD OR HIGHER,
      THEN LOAD DATA FROM "FIVE DAYS THREE HOURS" API
    */
    if (!loadedAllHourData && selectedDay >= 2) {
      /*
          LOAD DATA, SERIALIZE TO TYPE IHour, JOIN WITH HOUR FORECAST DATA
          ALREADY LOADED
        */
      const params = {
        lat: location.lat,
        lon: location.lon,
        units,
        lang: language,
        appid: process.env.REACT_APP_API_APPID,
      };

      weatherApi
        .get<IFiveDaysForecastResponse>('/forecast', { params })
        .then(res => {
          const lastHourForecastDate = hourForecast.slice(-1)[0].dt * 1000;

          const data = res.data.list
            .filter(item => item.dt * 1000 > lastHourForecastDate)
            .map(item => ({
              dt: item.dt,
              ...item.main,
              weather: item.weather,
              clouds: item.clouds.all,
              wind_speed: item.wind.speed,
              wind_deg: item.wind.deg,
              visibility: item.visibility,
              dt_txt: item.dt_txt,
            }));

          const newState = [...hourForecast, ...data];

          setloadedAllHourData(true);
          setHourForecast(newState);
          getHourForecastData(newState);
        })
        .catch(error => {
          alert('Sorry, something went wrong. Please try again');
          console.log(error);
        });
      /* ------- END LOAD DATA ------- */
      return;
    }

    /* IF SELECTED DAY < 2 AND ALL DATA IS ALREADY LOADED THEN JUST
      GET HOUR FORECAST DATA FROM "HOUR FORECAST" STATE
    */
    getHourForecastData(hourForecast);
  }, [selectedDay]);
  /* ---------------------- END FILTER TO "HOUR" TAB ---------------------- */

  /* ---------- HANDLE SUBMIT FORM TO SEARCH FOR ANOTHER LOCATION ---------- */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!search) {
      setErrorMessage('Please type a city');
      return;
    }

    try {
      const [city, state, country] = search.split(',');

      const locationData = await loadLocationByName({
        city,
        state,
        country,
        language,
      });

      if (locationData === null) {
        setErrorMessage('Sorry, we could not find this city');
        return;
      }

      let filteredRecentLocations = recentLocations.filter(
        recentLocation => recentLocation.osm_id !== locationData.osm_id
      );
      filteredRecentLocations.unshift(locationData);
      filteredRecentLocations.slice(0, 10);

      setRecentLocations(filteredRecentLocations);
      setErrorMessage('');
      setSearch('');

      history.push(`/${locationData.city}/${locationData.country}`, {
        ...locationData,
      });
    } catch (error) {
      alert('Sorry, something went wrong. Please try again');
      console.log(error);
    }
  }
  /* -------- END HANDLE SUBMIT FORM TO SEARCH FOR ANOTHER LOCATION -------- */

  /* RETURN A LOADER WHILE ALL NECESSARY DATA IS NOT AVALIABLE */
  if (isLoading) return <Loader />;

  return (
    <FlexContainer>
      {/* SIDEBAR */}
      <Aside>
        {/* SIDEBAR HEADER */}
        <FlexContainer justify="space-between" alignItems="center">
          <Link to="/">
            <img
              src={require(`../../assets/logo_${theme}.svg`)}
              alt="Sky Forecast"
            />
          </Link>
        </FlexContainer>

        {/* SIDEBAR MAIN CONTENT */}
        {showDetails ? (
          <DailyForecastNavigation>
            <h1>
              {location.city}, {location.country}
            </h1>

            {dailyForecast.map((day, i) => (
              <DayLink
                key={i}
                active={selectedDay === i && true}
                onClick={() => setSelectedDay(i)}
              >
                <p>{formatDate(day.dt, language, 'md')}</p>
                <span>{formatDate(day.dt, language, 'w')}</span>
              </DayLink>
            ))}
          </DailyForecastNavigation>
        ) : (
          <CurrentForecast>
            <h1>
              {location.city}, {location.country}
            </h1>
            <p>{formatDate(currentForecast.dt, language, 'wmdhm')}</p>

            <Weather>
              <img
                src={
                  wi[
                    `${currentForecast.weather[0].id}-${currentForecast.weather[0].icon}`
                  ]
                }
                alt={currentForecast.weather[0].description}
              />
              <p>{currentForecast.weather[0].description}</p>
            </Weather>

            <Temperature>
              <strong>
                {Math.round(currentForecast.temp)}{' '}
                <span>°{units === 'metric' ? 'C' : 'F'}</span>
              </strong>
              <p>Feels like {Math.round(currentForecast.feels_like)}°</p>
            </Temperature>

            <p>
              <FiCloudRain /> Rain - {currentForecast.rain?.['1h'] || 0} mm
            </p>
          </CurrentForecast>
        )}
      </Aside>

      {/* MAIN PAGE CONTENT */}
      <MainContent>
        {/* HEADER */}
        <FlexContainer justify="space-between" alignItems="center">
          <FlexContainer direction="column">
            <Search alignItems="center">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search new place"
                />
                <button>
                  <FiSearch />
                </button>
              </form>
            </Search>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </FlexContainer>

          <SettingsBar />
        </FlexContainer>

        {/* TABS */}
        <Tab>
          {showDetails ? (
            /* DAY / HOUR TABS */
            <FlexContainer as="nav" style={{ marginBottom: '1rem' }}>
              <TabLink
                active={!showHour && true}
                onClick={() => setShowHour(false)}
              >
                Day
              </TabLink>
              <TabLink
                active={showHour && true}
                onClick={() => setShowHour(true)}
              >
                Hour
              </TabLink>

              <TabLink onClick={() => setShowDetails(false)}>
                <BsArrowLeft size={20} style={{ marginRight: '.25rem' }} /> Back
              </TabLink>
            </FlexContainer>
          ) : (
            /* WEEK TAB */
            <FlexContainer as="nav" style={{ marginBottom: '1rem' }}>
              <TabLink active>Week</TabLink>

              <TabLink
                onClick={() => {
                  setShowDetails(true);
                  setSelectedDay(0);
                }}
              >
                Details{' '}
                <BsArrowRight size={20} style={{ marginLeft: '.25rem' }} />
              </TabLink>
            </FlexContainer>
          )}

          {showDetails ? (
            showHour ? (
              selectedDayForecast.length > 0 ? (
                <HourTab data={selectedDayForecast} />
              ) : (
                <h1>
                  Sorry, there is no hourly forecast data avaliable to this day.
                </h1>
              )
            ) : (
              <>
                <DayTab data={dailyForecast[selectedDay]} />
                <Highlights data={dailyForecast[selectedDay]} />
              </>
            )
          ) : (
            <WeekTab data={dailyForecast} />
          )}
        </Tab>

        {/* TODAY'S HIGHLIGHTS */}
        {!showDetails && (
          <>
            <h1 style={{ fontSize: '1.25rem' }}>Today's Hightlights</h1>
            <Highlights UVindex data={currentForecast} />
          </>
        )}
      </MainContent>
    </FlexContainer>
  );
};

export default Details;
