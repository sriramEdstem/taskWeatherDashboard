'use client'

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

export default function WeatherCard({ city }: { city: City }) {
    const [currentTemp, setCurrentTemp] = useState(city.current.temp);
    const [unit, setUnit] = useState("Celsius");

    const updateTemperature = (temp: number, type: string) => {
        setCurrentTemp(temp);
        setUnit(type)
    }
    const timeStamp = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    
  return (
    <div>
    <div className="w-[350px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl shadow-lg m-3">
      <div className="text-white p-4">
        <h2>{city.name}</h2>
        <p className="text-lg">{currentTemp}°{unit}</p>
        <p className="text-sm">{city.current.condition}</p>
      </div>
      <div className="bg-white text-black rounded-b-xl p-3 pb-[-12px] border">
        <div className="flex justify-between">
          <p className="text-sm">Min Temp: {city.forecast.minTemp}°C</p>
          <p className="text-sm">Max Temp: {city.forecast.maxTemp}°C</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Last Updated: {timeStamp}</p>
        </div>
      </div>
    </div>
    <UnitConverter city={city} updateTemperature={updateTemperature} />
    </div>
  );
}
