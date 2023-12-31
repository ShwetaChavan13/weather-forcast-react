import React,{useContext} from "react";
import "./Main.css";
import moment from "moment";
import {Context} from "./Context";
function Main() {
  const {weatherData}=useContext(Context);
  
  function currdate(){
    const dt=moment().format("dddd Do MMMM YYYY");
    return dt;
  }
   function timez(timezone){
    const timesec=timezone/60;
    const currtime=moment().utcOffset(timesec).format("hh.mm a");
    return currtime;
   }
  return (
    <div className="main">
      <div className="mainleft">
        <div className="containerleft">
          {weatherData ?(
            <>
          <h1>{weatherData.name},{weatherData.sys.country}</h1>
          <h2>{currdate()}</h2>
          <h2>{timez(weatherData.timezone)}</h2>
          <h1>Today</h1>
          <h2>{weatherData.weather[0].main}</h2>
          <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                />
          </>
          ) : (<p>Loading...</p>)
          }
        </div>
      </div>
      <div className="mainright">
        <div className="containerright">
          {weatherData?(
            <>
          <br/><h1>{weatherData.weather[0].description}</h1>
          <br />
          <br />
          <h3>Temperature :{Math.round((weatherData.main.temp)-273.15)}°c ({weatherData.weather[0].main})</h3>
          <h3>Wind Speed :{weatherData.wind.speed}m/s</h3>
          <h3>Humidity :{Math.round(weatherData.main.humidity)}%</h3>
          <h3>Visibility:{Math.round(weatherData.visibility)} m</h3>
            </>
          ) : (<p>Loading...</p>)
          } 
        </div>
      </div>
    </div>
  );
}

export default Main;
