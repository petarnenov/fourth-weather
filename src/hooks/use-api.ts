import { useCallback, useState } from "react";
import { getCitiesByAutocomplete, getLocationByCityName } from "../api";

// TODO: error handling
export const useGetLocationByCityName = () => {
  const [data, setData] = useState({});

  const apiGetLocationByName = async (city: string) => {
    const data = await getLocationByCityName(city);
    setData(data);
  };
  return { data, apiGetLocationByName };
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
