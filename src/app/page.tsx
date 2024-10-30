import React from "react";
import WeatherCard from "@/components/WeatherCard";
import { weatherData } from "@/data/sample";
import Link from "next/link";

export default function Home() {
  const weatherGrid = weatherData.map((city) => (
    <Link key={city.cityId} href={`/cities/${city.cityId}`}>
      <WeatherCard city={city} />
    </Link>
  ));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {weatherGrid}
    </div>
  );
}
