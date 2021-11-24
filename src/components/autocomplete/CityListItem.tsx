import React from "react";
import { Typography, Button } from "@mui/material";

interface Props {
  city: string;
  country: string;
  setLocation: (city: string) => void;
  getLocationByName: (city: string) => void;
}

const CityListItem: React.FC<Props> = ({
  city,
  country,
  setLocation,
  getLocationByName,
}) => {
  return (
    <Button variant="text" color="inherit" size="small">
      <Typography
        variant="body1"
        onClick={() => {
          if (!city.trim()) return;
          setLocation(city);
          getLocationByName(city);
        }}
      >
        {city}/{country}
      </Typography>
    </Button>
  );
};

export default CityListItem;
