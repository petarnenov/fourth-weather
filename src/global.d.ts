interface ListMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface ListWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface ListClouds {
  all: number;
}

interface ListWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ListSys {
  pod: string;
}

interface ForecastList {
  dt: number;
  main: ListMain;
  weather: ListWeather[];
  clouds: ListClouds;
  wind: ListWind;
  visibility: number;
  pop: number;
  sys: ListSys;
  dt_txt: string;
}

interface CityCoord {
  lat: number;
  lon: number;
}

interface ForecastCity {
  id: number;
  name: string;
  coord: CityCoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface FiveDayForecastFulfilledResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastList[];
  city: ForecastCity;
}

interface FiveDayForecastRejectedResponse {
  cod: string;
  message: string;
}

interface AutocompleteAdministrativeArea {
  englishName: string | null;
  id: string;
  localizedName: string;
}

interface AutocompleteCountry {
  englishName: string | null;
  id: string;
  localizedName: string;
}

interface AutocompleteCityResponse {
  administrativeArea: AutocompleteAdministrativeArea;
  country: AutocompleteCountry;
  key: string;
  localizedName: string;
  primaryPostalCode: string | null;
}
