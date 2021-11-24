import React from "react";
import { Typography, Button } from "@mui/material";

interface Props {
  city: string;
  country: string;
  setLocation: (city: string) => void;
  apiGetForecastByCity: (city: string) => void;
}

const CityListItem: React.FC<Props> = ({
  city,
  country,
  setLocation,
  apiGetForecastByCity,
}) => {
  return (
    <Button variant="text" color="inherit" size="small">
      <Typography
        variant="body1"
        onClick={() => {
          setLocation(city);
          apiGetForecastByCity(city);
        }}
      >
        {city}/{country}
      </Typography>
    </Button>
  );
};

export default CityListItem;
