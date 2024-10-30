'use client'

import { useState } from "react";

type UnitConversion = {
    city: City;
    updateTemperature:(temp: number, type:string) => void
}

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
    
    export default function UnitConverter({ city, updateTemperature }: UnitConversion) {
    const [isCelsius, setIsCelsius] = useState(true);
    
    const convertToFahrenheit = () => {
    updateTemperature(city.current.temp * 9 / 5 + 32, "Fahrenheit");
    setIsCelsius(false);
    };
    const convertToCelsius = () => {
        updateTemperature(city.current.temp, "Celsius");
        setIsCelsius(true);
        };
        
        return (
        <div>
        {isCelsius ? (
        <button
        className="bg-black  text-white font-bold py-2 px-2 rounded"
        onClick={convertToFahrenheit}
        >
        Convert to Fahrenheit
        </button>
        ) : (
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={convertToCelsius}
        >
        Convert to Celsius
        </button>
        )}
        </div>
        );
        }
        
    