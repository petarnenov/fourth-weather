import { apiConfig } from ".";

export interface GetLocationByCity {
  rejected: string | null;
  fulfilled: FiveDayForecastFulfilledResponse | null;
}

export const getForecastByCityName = async (
  city: string
): Promise<GetLocationByCity> => {
  try {
    const response = await fetch(
      `${apiConfig.urlByLocation}${city}&appid=${apiConfig.apiKey}&cnt=${apiConfig.forecastByDay}`
    );
    if (!response.ok) throw Error(response.statusText);

    const data = (await response.json()) as
      | FiveDayForecastFulfilledResponse
      | FiveDayForecastRejectedResponse;

    if (typeof data.message === "string") {
      throw Error(data.message);
    }
    return {
      rejected: null,
      fulfilled: data as FiveDayForecastFulfilledResponse,
    };
  } catch (err) {
    return { rejected: (err as Error).message, fulfilled: null };
  }
};

export type GeoCoords = Pick<GeolocationCoordinates, "latitude" | "longitude">;

export const getForecastByGeoCoords = async (
  coords: GeoCoords
): Promise<GetLocationByCity> => {
  try {
    const response = await fetch(
      `${apiConfig.urlByGeoCoords}${coords.latitude}&lon=${coords.longitude}&appid=${apiConfig.apiKey}`
    );
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();

    if (typeof data.message === "string") {
      throw Error(data.message);
    }
    return {
      rejected: null,
      fulfilled: data as FiveDayForecastFulfilledResponse,
    };
  } catch (err) {
    return { rejected: (err as Error).message, fulfilled: null };
  }
};
