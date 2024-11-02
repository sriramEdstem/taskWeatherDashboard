import React from "react";
import { weatherData } from "@/data/sample";
import { notFound } from "next/navigation";
import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer, WiCloud } from "react-icons/wi";

export default async function CityDetails(props: any) {
  const { cityId } = await props.params;
  const city = weatherData.find((city) => city.cityId === cityId);

  if (!city) notFound();

  return (
    <div className=" mt-8 bg-gradient-to-br from-blue-300 via-purple-500 to-pink-500     text-white">

      <div className=" w-[1280px]  bg-white bg-opacity-70 rounded-lg shadow-2xl p-8 space-y-10">
        <h1 className="text-5xl font-medium text-gray-600 flex items-center gap-3 mb-4">
          <WiCloud className="text-6xl text-gray-600 animate-pulse" />
          {city.name}
        </h1>


        <div className="bg-white bg-opacity-90 shadow-lg p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold text-purple-600">Current Weather</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium">
            <div className="flex items-center space-x-2">
              <WiThermometer className="text-blue-500 text-3xl animate-bounce" />
              <p>Temperature: <span className="text-blue-500">{city.current.temp}°C</span></p>
            </div>
            <div className="flex items-center space-x-2">
              <WiCloud className="text-blue-500 text-3xl animate-bounce" />
              <p>Condition:<span className="text-blue-500">&nbsp;{city.current.condition}</span></p>
            </div>
            <div className="flex items-center space-x-2">
              <WiHumidity className="text-blue-500 text-3xl animate-pulse" />
              <p>Humidity:<span className="text-blue-500"> &nbsp;{city.current.humidity}%</span></p>
            </div>
            <div className="flex items-center space-x-2">
              <WiStrongWind className="text-blue-500 text-3xl animate-pulse" />
              <p>Wind Speed:<span className="text-blue-500"> {city.current.windSpeed} km/h</span></p>
            </div>
            <div className="flex items-center space-x-2">
              <WiBarometer className="text-blue-500 text-3xl animate-bounce" />
              <p>Pressure: <span className="text-blue-500">{city.current.pressure} hPa</span></p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-90 shadow-lg p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold text-purple-600">Hourly Forecast</h2>
          <table className="w-full text-left">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="p-2 font-semibold">Time</th>
                <th className="p-2 font-semibold">Temperature</th>
                <th className="p-2 font-semibold">Condition</th>
              </tr>
            </thead>
            <tbody>
              {city.hourly.map((hour, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-300">
                  <td className="p-2 text-gray-700">{hour.time}</td>
                  <td className="p-2 text-gray-700">{hour.temp}°C</td>
                  <td className="p-2 text-gray-700">{hour.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-white bg-opacity-90 shadow-lg p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold text-purple-600">Forecast</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium">
            <p>Max Temp: <span className="text-blue-500">{city.forecast.maxTemp}°C</span></p>
            <p>Min Temp: <span className="text-blue-500">{city.forecast.minTemp}°C</span></p>
            <p>Sunrise: <span className="text-blue-500">{city.forecast.sunrise}</span></p>
            <p>Sunset: <span className="text-blue-500">{city.forecast.sunset}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
