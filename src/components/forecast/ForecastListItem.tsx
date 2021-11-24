import React, { MouseEventHandler, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
} from "@mui/material";
import ForecastByHours from "./ForecastByHours";

interface Props {
  forecast: {
    date: string;
    list: {
      city: ForecastCity;
      dayForecast: ForecastList[];
    };
  };
}

const ForecastListItem: React.FC<Props> = ({ forecast }) => {
  const [open, setOpen] = useState(false);

  const handleClickShowByHours: MouseEventHandler<HTMLButtonElement> = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const card = (
    <React.Fragment>
      <CardHeader title={forecast.list.city.name} subheader={forecast.date} />
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Sunrise: {new Date(forecast?.list?.city?.sunrise).toTimeString()}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Sunset: {new Date(forecast?.list?.city?.sunset).toTimeString()}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {forecast?.list?.dayForecast[0]?.weather[0]?.main}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {forecast?.list?.dayForecast[0]?.weather[0]?.description}
        </Typography>
        <Typography color="text.secondary">
          Wind speed: {forecast?.list?.dayForecast[0]?.wind?.speed}
        </Typography>
        <Typography color="text.secondary">
          Clouds: {forecast?.list?.dayForecast[0]?.clouds?.all}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickShowByHours}>
          Show by hours
        </Button>
      </CardActions>
      <ForecastByHours
        open={open}
        handleClickShowByHours={handleClickShowByHours}
        forecastByHours={forecast.list.dayForecast}
      />
    </React.Fragment>
  );

  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      {card}
    </Card>
  );
};

export default ForecastListItem;
