import React from "react";
import { Typography, Button } from "@mui/material";

interface Props {
  city: string;
  setLocation: (city: string) => void;
  getLocationByName: (city: string) => void;
}

const CityListItem: React.FC<Props> = ({
  city,
  setLocation,
  getLocationByName,
}) => {
  return (
    <Button variant="text" color="secondary" size="small">
      <Typography
        variant="body1"
        onClick={() => {
          if (!city.trim()) return;
          setLocation(city);
          getLocationByName(city);
        }}
      >
        {city}
      </Typography>
    </Button>
  );
};

export default CityListItem;
