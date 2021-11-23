import React from "react";
import { Typography, Grid } from "@mui/material";
import ForecastListItem from "./ForecastListItem";

interface Props {
  props: {
    fulfilled: FiveDayForecastFulfilledResponse | null;
    pending: boolean;
    rejected: string | null;
  };
}

const ForecastList: React.FC<Props> = ({ props }) => {
  const { pending, fulfilled, rejected } = props;

  const forecastByNextFiveDays = Array.from(
    fulfilled?.list?.reduce((acc, fl) => {
      const flDate = fl.dt_txt.split(" ")[0];
      if (acc.has(flDate)) {
        acc.get(flDate)?.dayForecast.push(fl);
      } else {
        acc.set(flDate, { city: fulfilled.city, dayForecast: [] });
      }
      return acc;
    }, new Map<string, { city: ForecastCity; dayForecast: ForecastList[] }>()) ||
      new Map()
  );

  console.log("dd lists: ", forecastByNextFiveDays);

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
        <Typography variant="h5" align="center">
          5 Days Forecast
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {pending && <h5>Loading data...</h5>}
      </Grid>
      <Grid item xs={12}>
        {rejected && <h5>Rejected reason: {rejected}</h5>}
      </Grid>
      {gridItems}
    </Grid>
  );
};

export default ForecastList;
