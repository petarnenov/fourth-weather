import React from "react";
import { Typography, Grid, LinearProgress, Box } from "@mui/material";
import ForecastListItem from "./ForecastListItem";

interface Props {
  props: {
    fiveDayForecast: FiveDayForecastFulfilledResponse | null;
    loading: boolean;
    error: string | null;
  };
}

const ForecastList: React.FC<Props> = ({ props }) => {
  const { loading, fiveDayForecast, error } = props;

  const forecastByNextFiveDays = Array.from(
    fiveDayForecast?.list?.reduce((acc, fl) => {
      const flDate = fl.dt_txt.split(" ")[0];
      if (acc.has(flDate)) {
        acc.get(flDate)?.dayForecast.push(fl);
      } else {
        acc.set(flDate, { city: fiveDayForecast.city, dayForecast: [] });
      }
      return acc;
    }, new Map<string, { city: ForecastCity; dayForecast: ForecastList[] }>()) ||
      new Map()
  );

  const gridItems = forecastByNextFiveDays.map((dayForecast) => (
    <Grid item xs={12} md={4} lg={2} key={dayForecast[0]}>
      <ForecastListItem
        forecast={{ date: dayForecast[0], list: dayForecast[1] }}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        {fiveDayForecast && (
          <Typography variant="h5" align="center">
            5 Days Forecast
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {loading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </Grid>
      <Grid item xs={12}>
        {error && <h5>Rejected reason: {error}</h5>}
      </Grid>
      {gridItems}
    </Grid>
  );
};

export default ForecastList;
