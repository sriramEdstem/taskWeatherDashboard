import WeatherDashboard from "@/components/WeatherDashboard";
import Link from "next/link";
import React from "react";
import { Suspense } from "react";
import Loading from "./loading";
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Link href={"/favourites"}>
        <button className="absolute top-12 right-8 rounded-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg shadow-lg  transform transition-all hover:scale-105 ">
          View Favourites
        </button>
      </Link>
      <div className="container mt-7 ">
        <WeatherDashboard />
      </div>
    </Suspense>
  );
}
