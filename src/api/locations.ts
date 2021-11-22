import { apiConfig } from ".";

export const getLocationByCityName = async (city: string) => {
  const data = await fetch(
    `${apiConfig.urlByLocation}${city}&appid=${apiConfig.apiKey}`
  ).then((res) => res.json());
  return data;
};
