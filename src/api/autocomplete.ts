import { apiConfig } from ".";

export const getCitiesByAutocomplete = async (term: string) => {
  const data = await fetch(
    `${apiConfig.urlAutoComplete}${term}&language=en-us`
  ).then((res) => res.json());
  return data;
};
