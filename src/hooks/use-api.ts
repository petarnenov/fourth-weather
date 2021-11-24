import { useCallback, useState } from "react";
import {
  GeoCoords,
  getCitiesByAutocomplete,
  getForecastByGeoCoords,
  getLocationByCityName,
} from "../api";

export const useGetForecastByCityName = () => {
  const [pending, setPending] = useState(false);
  const [fulfilled, setFulfilled] =
    useState<FiveDayForecastFulfilledResponse | null>(null);
  const [rejected, setRejected] = useState<string | null>(null);

  const apiGetForecastByCity = useCallback(async (city: string) => {
    setPending(true);
    setFulfilled(null);
    setRejected(null);
    const data = await getLocationByCityName(city);
    setPending(false);
    if (data.rejected) {
      setRejected(data.rejected);
      return;
    }
    setFulfilled(data.fulfilled);
  }, []);
  return {
    loadingForecastByCity: pending,
    forecastByCity: fulfilled,
    errorLoadingForecastByCity: rejected,
    apiGetForecastByCity,
  };
};

export const useGetForecastByGeoCoords = () => {
  const [pending, setPending] = useState(false);
  const [fulfilled, setFulfilled] =
    useState<FiveDayForecastFulfilledResponse | null>(null);
  const [rejected, setRejected] = useState<string | null>(null);

  const apiGetForecastByGeoCoords = useCallback(async (coords: GeoCoords) => {
    setPending(true);
    setFulfilled(null);
    setRejected(null);
    const data = await getForecastByGeoCoords(coords);
    if (data.rejected) {
      setRejected(data.rejected);
      return;
    }
    setFulfilled(data.fulfilled);
  }, []);

  return {
    loadingForecastByGeoCoords: pending,
    forecastByGeoCoords: fulfilled,
    errorLoadingForecastByGeoCoords: rejected,
    apiGetForecastByGeoCoords,
  };
};

// TODO: error handling
export const useGetCitiesByAutoComplete = () => {
  const [cities, setCities] = useState([]);

  const apiGetCitiesByAutoComplete = useCallback(async (term: string) => {
    const cities = await getCitiesByAutocomplete(term);
    setCities(cities);
  }, []);
  return { cities, apiGetCitiesByAutoComplete };
};
