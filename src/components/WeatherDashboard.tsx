"use client";

import React, { useState } from "react";
import { weatherData } from "../data/sample"; // Update this import path as needed
import WeatherCard from "./WeatherCard"; // Update this import path as needed

export default function WeatherDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState(weatherData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = weatherData.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCities(filtered);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-lg px-4 py-3 rounded-full bg-white/20 text-white text-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {filteredCities.length === 0 ? (
        <div className="text-center text-white text-xl">
          No cities found matching "{searchTerm}"
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
          {filteredCities.map((city) => (
            <WeatherCard key={city.cityId} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}
