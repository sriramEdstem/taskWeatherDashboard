export default function CityDetail(){
    return(
        <div className="container mx-auto p-2">
            <h1 className="mb-4">London</h1>

            <div className="bg-white p-2 mb-2 shadow-md rounded-lg border">
                <h2>Current Weather</h2>
            </div>
            <div className="flex justify-between">
                <div>
                    <p>Temparature:</p>
                    <p>Condition of weather:</p>
                </div>
                <div>
                    <p>Humidity:</p>
                    <p>Wind Speed:</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p>Pressure:</p>
                <p>Visibility:</p>
            </div>
        </div>
    )
}