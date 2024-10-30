import { create } from "zustand";

interface City {
  cityId: string;
  name: string;
  current: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  };
  forecast: {
    maxTemp: number;
    minTemp: number;
    sunrise: string;
    sunset: string;
  };
}

interface States {
  favourites: Array<City>;
}

interface Actions {
  addCity: (city: City) => void;
}

export const useFavouriteStore = create<States & Actions>((set) => ({
  favourites: [],
  addCity: (city: City) =>
    set((state) => ({
      favourites: state.favourites.some((fav) => fav.cityId === city.cityId)
        ? state.favourites.filter((fav) => fav.cityId !== city.cityId)
        : [...state.favourites, city],
    })),
}));
