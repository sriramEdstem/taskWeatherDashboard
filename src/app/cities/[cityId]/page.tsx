export default function CityDetails() {
  return(
     <div className="container w-[1400px] mx-auto p-3 bg-amber-500 bg-cover text-center ">
     
<h1 className="text-2xl font-bold mb-4 text-white">tvm</h1>
<div className="bg-white bg-opacity-70 shadow-md p-4 rounded-lg mb-4">
  <h2 className="text-lg font-bold">Current Weather</h2>
  <div className=" flex justify-between">
    <div>
      <p>Temparature:</p>
      <p>Condition</p>
    </div>
    <div>
      <p>Humidity</p>
      <p>Wind Speed</p>
    </div>
  </div>
  <div className="flex justify-between">
    <p>Pressure:</p>
    <p>Visibility:</p>
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
      <tr>
        <td>Time</td>
        <td>Temp</td>
        <td>Condition</td>
      </tr>
    </tbody>
  </table>

</div>
<div className="bg-white bg-opacity-70 shadow-md p-3 rounded-lg mb-4 ">
  <h2 className="text-lg font-bold">
    Forecast
  </h2>
  <div className="flex justify-between">
          <p>Max Temp: C</p>
          <p>Min Temp: C</p>
        </div>
        <div className="flex justify-between">
          <p>Sunrise: </p>
          <p>Sunset: </p>
        </div>


</div>
  </div>
  )
}
