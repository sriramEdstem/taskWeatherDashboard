"use client";
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
import { useFavouriteStore } from "@/app/favourites/_store";
import Link from "next/link";

export default function WeatherCard({ city }: { city: City }) {
  const { favourites, addCity } = useFavouriteStore((state) => state);
  return (
    <div
      onClick={() => {
        addCity(city);
        console.log(favourites);
      }}
      className="w-[350px] bg-gradient-to-r  from-blue-500 to-violet-500 rounded-xl border-black border shadow-lg m-3"
    >
      <div className="text-white p-4">
        <h2>{city.name}</h2>
        <p className="text-lg">{city.current.temp}°C</p>
        <p className="text-sm">{city.current.condition}</p>
      </div>

      <div className="bg-white text-black rounded-b-xl p-3 pb-[-12px] border">
        <div className="flex justify-between">
          <p className="text-sm">Min Temp: {city.forecast.minTemp}°C</p>
          <p className="text-sm">Max Temp: {city.forecast.maxTemp}°C</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Last Updated: </p>
        </div>
        <div className="flex justify-between">
          <button className="hover:scale-105	">
            <Link key={city.cityId} href={`/cities/${city.cityId}`}>
              Detailed view
            </Link>
          </button>
          <button className="hover:scale-105	">STAR</button>
        </div>
      </div>
    </div>
  );
}
