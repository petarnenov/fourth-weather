import { useCallback, useState } from "react";
import { getCitiesByAutocomplete, getLocationByCityName } from "../api";

export const useGetLocationByCityName = () => {
  const [pending, setPending] = useState(false);
  const [fulfilled, setFulfilled] =
    useState<FiveDayForecastFulfilledResponse | null>(null);
  const [rejected, setRejected] = useState<string | null>(null);

  const apiGetLocationByName = useCallback(async (city: string) => {
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
  return { pending, fulfilled, rejected, apiGetLocationByName };
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
