import React, { ChangeEventHandler, useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useGetCitiesByAutoComplete, useGetLocationByCityName } from "../hooks";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [location, setLocation] = useState("");
  const { data, apiGetLocationByName } = useGetLocationByCityName();
  const { cities, apiGetCitiesByAutoComplete } = useGetCitiesByAutoComplete();

  useEffect(() => {
    apiGetCitiesByAutoComplete(location);
  }, [location, apiGetCitiesByAutoComplete]);

  const handleChangeLocation: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const value = e.target.value;
    setLocation(value);
  };

  const handleClickSearch = () => {
    apiGetLocationByName(location);
  };

  console.log("data: ", data);
  console.log("cities: ", cities);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
          <TextField
            id="outlined-basic"
            label="Search location"
            variant="outlined"
            size="small"
            color="secondary"
            sx={{ mr: 2 }}
            value={location}
            onChange={handleChangeLocation}
          />
          <Button color="inherit" onClick={handleClickSearch}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
