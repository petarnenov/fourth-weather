import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { MouseEventHandler } from 'react';
import { GeoCoords } from '../../api';
import CityListItem from './CityListItem';

interface Props {
  cities: AutocompleteCityResponse[];
  setLocation: (city: string) => void;
  apiGetForecastByCity: (city: string) => void;
  apiGetForecastByGeoCoords: (coords: GeoCoords) => void;
}

const CityList: React.FC<Props> = ({
  cities,
  setLocation,
  apiGetForecastByCity,
  apiGetForecastByGeoCoords,
}) => {
  const firstFiveCities = cities
    .slice(0, 5)
    .map((city, index) => (
      <CityListItem
        city={city.localizedName}
        country={city.country.localizedName}
        setLocation={setLocation}
        apiGetForecastByCity={apiGetForecastByCity}
        key={city.key}
        data-testid={`city-item-${index}`}
      />
    ));

  const handleClickCurrentLocation: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      apiGetForecastByGeoCoords({ latitude, longitude });
    });
  };

  return (
    <Box data-testid="box-city-list">
      <Button
        variant="text"
        color="inherit"
        onClick={handleClickCurrentLocation}
      >
        Current Location
      </Button>
      {firstFiveCities}
    </Box>
  );
};

export default CityList;
