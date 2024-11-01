import WeatherDashboard from "@/components/WeatherDashboard";
import Link from "next/link";
import React from "react";

export default function Home() {

  return (
    
      <>
      <Link href={"/favourites"}>
      <button className="rounded-full p-4 bg-yellow-500 hover:bg-yellow-600 text-white transition-all transform hover:scale-105 shadow-lg fixed top-8 right-8">
        View Favourites
      </button>
    </Link><div className="container ">
        <WeatherDashboard />
      </div>
      </>
  );
}
