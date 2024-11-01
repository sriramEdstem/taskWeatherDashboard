import React from "react";
import { weatherData } from "@/data/sample";
import { notFound } from "next/navigation";

export default async function CityDetails(props: any) {
  const { cityId } = await props.params;
  const city = weatherData.find((city) => city.cityId === cityId);

  if (!city) notFound();

  return (
    <div className="container mx-auto p-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-cover rounded-lg shadow-xl text-center space-y-6 ">
      <h1 className="text-4xl font-bold text-white">{city.name}</h1>
      <div className="bg-white bg-opacity-75 shadow-lg p-6 rounded-lg space-y-2">
        <h2 className="text-lg font-semibold">Current Weather</h2>
        <div className="flex justify-between">
          
            <p>Temperature: {city.current.temp}°C</p>
            <p>Condition: {city.current.condition}</p>
          
          
            <p>Humidity: {city.current.humidity}%</p>
            <p>Wind Speed: {city.current.windSpeed} km/h</p>
          
        </div>
        <div className="flex justify-between">
          <p>Pressure: {city.current.pressure} hPa</p>
          <p>Visibility: {city.current.visibility} km</p>
        </div>
      </div>
      <div className="bg-white bg-opacity-75 shadow-lg p-5 rounded-lg space-y-2 ">
        <h2 className="text-xl font-semibold">Hourly Forecast</h2>
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Time</th>
              <th className="p-2">Temperature</th>
              <th className="p-2">Condition</th>
            </tr>
          </thead>
          <tbody>
            {city.hourly.map((hour, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2">{hour.time}</td>
                <td className="p-2">{hour.temp}°C</td>
                <td className="p-2">{hour.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white bg-opacity-70 shadow-lg p-6 rounded-lg space-y-2 ">
        <h2 className="text-lg font-semibold">Forecast</h2>
        <div className="flex justify-between">
          <p>Max Temp: {city.forecast.maxTemp}°C</p>
          <p>Min Temp: {city.forecast.minTemp}°C</p>
        </div>
        <div className="flex justify-between">
          <p>Sunrise: {city.forecast.sunrise}</p>
          <p>Sunset: {city.forecast.sunset}</p>
        </div>
      </div>
    </div>
  );
}
