import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CityListItem from "./CityListItem";

interface Props {
  cities: AutocompleteCityResponse[];
  setLocation: (city: string) => void;
  getLocationByName: (city: string) => void;
}

const CityList: React.FC<Props> = ({
  cities,
  setLocation,
  getLocationByName,
}) => {
  const firstFiveCities = cities
    .slice(0, 5)
    .map((city, index) => (
      <CityListItem
        city={city.localizedName}
        country={city.country.localizedName}
        setLocation={setLocation}
        getLocationByName={getLocationByName}
        key={city.key}
        data-testid={`city-item-${index}`}
      />
    ));

  return (
    <Box data-testid="box-city-list">
      <Button variant="text" color="inherit">
        Current Location
      </Button>
      {firstFiveCities}
    </Box>
  );
};

export default CityList;
