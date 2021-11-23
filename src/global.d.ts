const fiveDayForecastResponse = {
  cod: "200",
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 1637658000,
      main: {
        temp: 275.31,
        feels_like: 275.31,
        temp_min: 275.31,
        temp_max: 278.77,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 1030,
        humidity: 95,
        temp_kf: -3.46,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 1.28,
        deg: 11,
        gust: 2.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-11-23 09:00:00",
    },
    {
      dt: 1637668800,
      main: {
        temp: 277.3,
        feels_like: 277.3,
        temp_min: 277.3,
        temp_max: 281.27,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 1029,
        humidity: 82,
        temp_kf: -3.97,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 1.17,
        deg: 331,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-11-23 12:00:00",
    },
    {
      dt: 1637679600,
      main: {
        temp: 279.6,
        feels_like: 278.92,
        temp_min: 279.6,
        temp_max: 281.74,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 1028,
        humidity: 71,
        temp_kf: -2.14,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 1.37,
        deg: 325,
        gust: 2.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-11-23 15:00:00",
    },
    {
      dt: 1637690400,
      main: {
        temp: 280.31,
        feels_like: 279.72,
        temp_min: 280.31,
        temp_max: 280.31,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1027,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 1.37,
        deg: 344,
        gust: 2.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-11-23 18:00:00",
    },
    {
      dt: 1637701200,
      main: {
        temp: 279.26,
        feels_like: 279.26,
        temp_min: 279.26,
        temp_max: 279.26,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1027,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.11,
        deg: 2,
        gust: 1.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-11-23 21:00:00",
    },
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lat: 51.5085,
      lon: -0.1257,
    },
    country: "GB",
    population: 1000000,
    timezone: 0,
    sunrise: 1637652729,
    sunset: 1637683326,
  },
};

const cityNotFoundResponse = {
  cod: "404",
  message: "city not found",
};

const autocompleteResponse = [
  {
    administrativeArea: {
      englishName: null,
      id: "RM",
      localizedName: "Región Metropolitana de Santiago",
    },
    country: {
      englishName: null,
      id: "CL",
      localizedName: "Chile",
    },
    key: "60449",
    localizedName: "Santiago",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "11",
      localizedName: "Seoul",
    },
    country: {
      englishName: null,
      id: "KR",
      localizedName: "South Korea",
    },
    key: "226081",
    localizedName: "Seoul",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "01",
      localizedName: "Central Singapore",
    },
    country: {
      englishName: null,
      id: "SG",
      localizedName: "Singapore",
    },
    key: "300597",
    localizedName: "Singapore",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "SPE",
      localizedName: "Saint Petersburg",
    },
    country: {
      englishName: null,
      id: "RU",
      localizedName: "Russia",
    },
    key: "295212",
    localizedName: "Saint Petersburg",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "SH",
      localizedName: "Shanghai",
    },
    country: {
      englishName: null,
      id: "CN",
      localizedName: "China",
    },
    key: "106577",
    localizedName: "Shanghai",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "LN",
      localizedName: "Liaoning",
    },
    country: {
      englishName: null,
      id: "CN",
      localizedName: "China",
    },
    key: "102136",
    localizedName: "Shenyang",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "HE",
      localizedName: "Hebei",
    },
    country: {
      englishName: null,
      id: "CN",
      localizedName: "China",
    },
    key: "102323",
    localizedName: "Shijiazhuang",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "NSW",
      localizedName: "New South Wales",
    },
    country: {
      englishName: null,
      id: "AU",
      localizedName: "Australia",
    },
    key: "22889",
    localizedName: "Sydney",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "GD",
      localizedName: "Guangdong",
    },
    country: {
      englishName: null,
      id: "CN",
      localizedName: "China",
    },
    key: "102257",
    localizedName: "Shantou",
    primaryPostalCode: null,
  },
  {
    administrativeArea: {
      englishName: null,
      id: "ZJ",
      localizedName: "Zhejiang",
    },
    country: {
      englishName: null,
      id: "CN",
      localizedName: "China",
    },
    key: "61622",
    localizedName: "Shaoxing",
    primaryPostalCode: null,
  },
];

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
