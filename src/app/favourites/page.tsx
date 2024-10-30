"use client";
import React from "react";
import WeatherCard from "@/components/WeatherCard";
import { useFavouriteStore } from "./_store";

export default function Favourites() {
  const { favourites } = useFavouriteStore((state) => state);
  console.log(favourites);
  const weatherGrid = favourites.map((city) => (
    <WeatherCard key={city.cityId} city={city} />
  ));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {weatherGrid}
    </div>
  );
}
