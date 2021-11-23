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
    .map((city) => (
      <CityListItem
        city={city.localizedName}
        setLocation={setLocation}
        getLocationByName={getLocationByName}
        key={city.key}
      />
    ));

  return (
    <Box>
      <Button variant="text" color="secondary">
        Current Location
      </Button>
      {firstFiveCities}
    </Box>
  );
};

export default CityList;
