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
    <div className="">
      <div className="absolute -z-10 inset-0">
        <Image
          src={Window}
          alt="car factory"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Link href={"/favourites"}>
      <button className=" rounded-lg p-3 bg-yellow-500">
          View favourties
        </button>
              </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {weatherGrid}
      </div>
    </div>
  );
}
