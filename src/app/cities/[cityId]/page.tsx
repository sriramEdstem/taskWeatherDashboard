import React from "react";
import { weatherData } from "@/data/sample";
import { notFound } from "next/navigation";

export default async function CityDetails(props: any) {
  const { cityId } = await props.params;
  const city = weatherData.find((city) => city.cityId === cityId);

  if (!city) notFound();

  return (
    <div className="container mx-auto p-3 bg-amber-500 bg-cover text-center ">
      <h1 className="text-2xl font-bold mb-4 text-white">{city.name}</h1>
      <div className="bg-white bg-opacity-70 shadow-md p-4 rounded-lg mb-4">
        <h2 className="text-lg font-bold">Current Weather</h2>
        <div className="flex justify-between">
          <div>
            <p>Temperature: {city.current.temp}°C</p>
            <p>Condition: {city.current.condition}</p>
          </div>
          <div>
            <p>Humidity: {city.current.humidity}%</p>
            <p>Wind Speed: {city.current.windSpeed} km/h</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Pressure: {city.current.pressure} hPa</p>
          <p>Visibility: {city.current.visibility} km</p>
        </div>
      </div>
      <div className="bg-white bg-opacity-75 shadow-md p-3 rounded-lg mb-4 ">
        <h2 className="text-lg font-bold">Hourly Forecast</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {city.hourly.map((hour, index) => (
              <tr key={index}>
                <td>{hour.time}</td>
                <td>{hour.temp}°C</td>
                <td>{hour.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white bg-opacity-70 shadow-md p-3 rounded-lg mb-4 ">
        <h2 className="text-lg font-bold">Forecast</h2>
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
