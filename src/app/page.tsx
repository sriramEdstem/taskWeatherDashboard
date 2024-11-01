import React from "react";
import WeatherCard from "@/components/WeatherCard";
import { weatherData } from "@/data/sample";
import Link from "next/link";
import Image from "next/image";
import Window from "public/sky.jpg"

export default function Home() {
  const weatherGrid = weatherData.map((city) => (
    <WeatherCard key={city.cityId} city={city} />
  ));

  return (
    <div className="relative overflow-hidden">
      <div className="absolute -z-10 inset-0">
        <Image
          src={Window}
          alt="scenic cloud"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-70"
        />
      </div>
      <Link href={"/favourites"}>
      <button className=" rounded-full p-4 bg-yellow-500 hover:bg-yellow-600 text-white transition-all transform hover:scale-105 shadow-lg fixed top-8 right-8">
          View favourties
        </button>
              </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {weatherGrid}
      </div>
    </div>
  );
}
