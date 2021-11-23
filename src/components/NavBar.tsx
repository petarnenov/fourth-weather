import React, { ChangeEventHandler, useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useGetCitiesByAutoComplete, useGetLocationByCityName } from "../hooks";
import ForecastList from "./forecast/ForecastList";
import CityList from "./autocomplete/CityList";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [location, setLocation] = useState("");
  const { pending, fulfilled, rejected, apiGetLocationByName } =
    useGetLocationByCityName();
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

  const handleSetLocation = (city: string) => {
    setLocation(city);
  };

  console.log("pending: ", pending);
  console.log("rejected: ", rejected);
  console.log("data: ", fulfilled);
  console.log("cities: ", cities);

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
                flexDirection: "column",
              }}
            >
              <Grid item>
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
              </Grid>
              <Grid item>
                <CityList
                  cities={cities}
                  setLocation={handleSetLocation}
                  getLocationByName={apiGetLocationByName}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <ForecastList props={{ pending, fulfilled, rejected }} />
    </>
  );
};

export default NavBar;
