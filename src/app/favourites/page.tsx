"use client";

import React from "react";
import WeatherCard from "@/components/WeatherCard";
import { useFavouriteStore } from "./_store";

export default function Favourites() {
  const { favourites } = useFavouriteStore((state) => state);

  if (!favourites.length) {
    return (
      <div>
        <h1>Favourites is empty</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {favourites.map((city) => (
        <WeatherCard key={city.cityId} city={city} />
      ))}
    </div>
  );
}
