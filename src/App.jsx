import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";

function App() {

  const [currentWeatherData, setCurrentWeatherData ] = useState(null)

  const onSearchChangeHandle = (searchData) => {
    const [ lat, lon ] = searchData.value.split(" ")

    fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    .then( response => response.json())
    .then(response => console.log(response))
  }
  
  return (
    <div className=" max-w-5xl flex flex-col items-center mx-auto py-5 font-openSans">
      <Search onSearchChangeHandle={onSearchChangeHandle} />
      <CurrentWeather/>
    </div>
  );
}

export default App;
