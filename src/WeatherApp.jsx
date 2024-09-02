import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 43.05,
        humidity: 56,
        temp: 36.05,
        temp_max: 36.05,
        temp_min: 36.05,
        weather: "Cloudy"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div className="weatherApp" style={{color:"white"}}>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};