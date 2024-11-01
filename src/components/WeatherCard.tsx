"use client";

import { useState } from "react";
import UnitConverter from "./UnitConverter";

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
  const [currentTemp, setCurrentTemp] = useState(city.current.temp);
  const [unit, setUnit] = useState("Celsius");

  const updateTemperature = (temp: number, type: string) => {
    setCurrentTemp(temp);
    setUnit(type);
  };
  const timeStamp = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
      <><div
      onClick={() => {
        addCity(city);
      } }
      className="w-full max-w-xs bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl m-4 p-6 shadow-xl transform transition-all hover:scale-100 hover:shadow-2xl"
    >
      <div className="text-white mb-6">
        <h2 className="text-4xl font-bold tracking-wider">{city.name}</h2>
        <p className="text-4xl font-semibold my-2">
          {currentTemp}°{unit}
        </p>
        <p className="text-lg text-gray-200">{city.current.condition}</p>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() =>
            updateTemperature(
              unit === "Celsius"
                ?parseFloat(( (currentTemp * 9) / 5 + 32).toFixed(1))
                : parseFloat((((currentTemp - 32) * 5) / 9).toFixed(1)),
              unit === "Celsius" ? "Fahrenheit" : "Celsius"
            )
          }
          className="bg-yellow-500 text-white rounded-full px-4 py-2 font-semibold transition-transform transform hover:scale-105"
        >
          Convert to {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>

      <div className="bg-white text-black bg-opacity-90 rounded-b-xl p-4 space-y-4 ">
        <div className="flex justify-between items-center text-sm">
          <span>Min Temp: {city.forecast.minTemp}°C</span>
          <span>Max Temp: {city.forecast.maxTemp}°C</span>
        </div>
        <div className="flex justify-between text-sm items-center">
          <p className="text-sm">Last Updated: {timeStamp}</p>
        </div>
        <div className="flex justify-between items-center mt-3 space-x-4">
         
            <Link key={city.cityId} href={`/cities/${city.cityId}`}>
            <button className=" rounded-full px-4 py-2 bg-yellow-500 h-10 transition transform hover:scale-110 shadow-md hover:bg-yellow-600	">
              Detailed view
              </button>
            </Link>
          
          <button className="  text-3xl text-yellow-500 hover:text-yellow-600 p-1 transform hover:scale-110 transition	">
            ★
          </button>
        </div>
      </div>
    </div></>
  );
}
