"use client";

import { useState } from "react";
import { useFavouriteStore } from "@/app/favourites/_store";
import Link from "next/link";

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
  };
}

export default function WeatherCard({ city }: { city: City }) {
  const { addCity } = useFavouriteStore((state) => state);
  const [currentTemp, setCurrentTemp] = useState(city.current.temp);
  const [unit, setUnit] = useState("Celsius");

  const updateTemperature = (temp: number, type: string) => {
    setCurrentTemp(temp);
    setUnit(type);
  };

  return (
    <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between w-[480px] h-[280px]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{city.name}</h2>
          <p className="text-3xl font-semibold">{currentTemp}°{unit}</p>
          <p className="text-sm text-gray-200">{city.current.condition}</p>
        </div>
      </div>

      <div className="flex gap-4 mt-4 text-gray-300">
        <div className="flex items-center space-x-1">
          <span>{city.current.windSpeed} km/h</span>
        </div>
        <div className="flex items-center space-x-1">
          
          <span>{city.current.humidity}%</span>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() =>
            updateTemperature(
              unit === "Celsius" ? (currentTemp * 9) / 5 + 32 : ((currentTemp - 32) * 5) / 9,
              unit === "Celsius" ? "Fahrenheit" : "Celsius"
            )
          }
          className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition"
        >
          Switch to {unit === "Celsius" ? "°F" : "°C"}
        </button>
        <Link href={`/cities/${city.cityId}`}>
          <button className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition">
            Details
          </button>
        </Link>
        <button
          onClick={() => addCity(city)}
          className="text-2xl hover:text-yellow-400 transition"
        >
          ★
        </button>
      </div>
    </div>
  );
}
