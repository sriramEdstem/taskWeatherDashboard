interface City {
  cityId: string;
  name: string;
  current: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  };
  forecast: {
    maxTemp: number;
    minTemp: number;
    sunrise: string;
    sunset: string;
  };
}

export default function WeatherCard({ city }: { city: City }) {
  return (
    <div className="w-[350px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl border-black border shadow-lg m-3">
      <div className="text-white p-4">
        <h2>{city.name}</h2>
        <p className="text-lg">{city.current.temp}°C</p>
        <p className="text-sm">{city.current.condition}</p>
      </div>
      <div className="bg-white text-black rounded-b-xl p-3 pb-[-12px] border">
        <div className="flex justify-between">
          <p className="text-sm">Min Temp: {city.forecast.minTemp}°C</p>
          <p className="text-sm">Max Temp: {city.forecast.maxTemp}°C</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Last Updated: </p>
        </div>
      </div>
    </div>
  );
}
