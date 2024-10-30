export default function WeatherCard(){
    return(
<div className=" w-[350px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl border-black border shadow-lg m-3">
<div className=" text-white p-4 ">
  <h2>trivandrum</h2>
  <p className="text-lg">23C</p>
</div>
<div className="bg-white text-black  rounded-b-xl  p-3 pb-[-12px] border">
  <div className="flex justify-between">
  <p className="text-sm">09: 30</p>
  <p className="text-sm">Mon Mar 26</p>
  </div>
  </div>
</div>
    )
}