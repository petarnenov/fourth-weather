import React, { ChangeEventHandler, useEffect, useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Grid,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {
  useGetCitiesByAutoComplete,
  useGetForecastByCityName,
  useGetForecastByGeoCoords,
} from '../hooks';
import ForecastList from './forecast/ForecastList';
import CityList from './autocomplete/CityList';

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [location, setLocation] = useState('');

  const [loading, setLoading] = useState<boolean>(false);
  const [fiveDayForecast, setFiveDayForecast] =
    useState<FiveDayForecastFulfilledResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    loadingForecastByGeoCoords,
    forecastByGeoCoords,
    errorLoadingForecastByGeoCoords,
    apiGetForecastByGeoCoords,
  } = useGetForecastByGeoCoords();

  const {
    loadingForecastByCity,
    forecastByCity,
    errorLoadingForecastByCity,
    apiGetForecastByCity,
  } = useGetForecastByCityName();

  const { cities, apiGetCitiesByAutoComplete } = useGetCitiesByAutoComplete();

  useEffect(() => {
    setLocation(forecastByCity?.city ? forecastByCity.city.name : "");
    setFiveDayForecast(forecastByCity);
  }, [forecastByCity]);

  useEffect(() => {
    setLoading(loadingForecastByCity);
  }, [loadingForecastByCity]);

  useEffect(() => {
    setError(errorLoadingForecastByCity);
  }, [errorLoadingForecastByCity]);

  useEffect(() => {
    apiGetCitiesByAutoComplete(location);
  }, [location, apiGetCitiesByAutoComplete]);

  useEffect(() => {
    setLocation(forecastByGeoCoords?.city ? forecastByGeoCoords.city.name : '');
    setFiveDayForecast(forecastByGeoCoords);
  }, [forecastByGeoCoords]);

  // useEffect(() => {
  //   setLoading(loadingForecastByGeoCoords);
  // }, [loadingForecastByGeoCoords]);

  // useEffect(() => {
  //   setError(errorLoadingForecastByGeoCoords);
  // }, [errorLoadingForecastByGeoCoords]);

  useEffect(() => {
    setLocation(forecastByCity?.city ? forecastByCity.city.name : '');
    setFiveDayForecast(forecastByCity);
  }, [forecastByCity]);

  // useEffect(() => {
  //   setLoading(loadingForecastByCity);
  // }, [loadingForecastByCity]);

  // useEffect(() => {
  //   setError(errorLoadingForecastByCity);
  // }, [errorLoadingForecastByCity]);

  const handleChangeLocation: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const value = e.target.value;
    setLocation(value);
  };

  const handleSetLocation = (city: string) => {
    setLocation(city);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ height: 256 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <WbSunnyIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Fourth Weather
            </Typography>
            <Grid
              container
              sx={{
                flexDirection: 'column',
              }}
            >
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Search location"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 2 }}
                  value={location}
                  onChange={handleChangeLocation}
                  color="secondary"
                />
              </Grid>
              <Grid item>
                <CityList
                  cities={cities}
                  setLocation={handleSetLocation}
                  apiGetForecastByCity={apiGetForecastByCity}
                  apiGetForecastByGeoCoords={apiGetForecastByGeoCoords}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <ForecastList
        props={{
          loading,
          fiveDayForecast,
          error,
        }}
      />
    </>
  );
};

export default NavBar;
