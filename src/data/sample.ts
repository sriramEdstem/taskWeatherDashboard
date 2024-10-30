export const weatherData = [
  {
    cityId: "NYC",
    name: "New York",
    current: {
      temp: 22,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      pressure: 1015,
      visibility: 10,
    },
    hourly: [
      {
        time: "12:00",
        temp: 22,
        condition: "Partly Cloudy",
      },
      {
        time: "13:00",
        temp: 23,
        condition: "Sunny",
      },
      // ... more hourly data
    ],
    forecast: {
      maxTemp: 25,
      minTemp: 18,
      sunrise: "06:30",
      sunset: "20:15",
    },
  },
  {
    cityId: "COK",
    name: "Cochin",
    current: {
      temp: 22,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      pressure: 1015,
      visibility: 10,
    },
    hourly: [
      {
        time: "12:00",
        temp: 22,
        condition: "Partly Cloudy",
      },
      {
        time: "13:00",
        temp: 23,
        condition: "Sunny",
      },
      // ... more hourly data
    ],
    forecast: {
      maxTemp: 25,
      minTemp: 18,
      sunrise: "06:30",
      sunset: "20:15",
    },
  },
  {
    cityId: "TKY",
    name: "Tokyo",
    current: {
      temp: 22,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      pressure: 1015,
      visibility: 10,
    },
    hourly: [
      {
        time: "12:00",
        temp: 22,
        condition: "Partly Cloudy",
      },
      {
        time: "13:00",
        temp: 23,
        condition: "Sunny",
      },
      // ... more hourly data
    ],
    forecast: {
      maxTemp: 25,
      minTemp: 18,
      sunrise: "06:30",
      sunset: "20:15",
    },
  },
  {
    cityId: "LON",
    name: "London",
    current: {
      temp: 18,
      condition: "Rainy",
      humidity: 75,
      windSpeed: 15,
      pressure: 1012,
      visibility: 8,
    },
    hourly: [
      {
        time: "12:00",
        temp: 18,
        condition: "Rainy",
      },
      {
        time: "13:00",
        temp: 19,
        condition: "Cloudy",
      },
      // ... more hourly data
    ],
    forecast: {
      maxTemp: 20,
      minTemp: 15,
      sunrise: "05:45",
      sunset: "21:00",
    },
  },
];
