import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { Context } from "./Context";
import axios from "axios";
import Search from "@material-ui/icons/Search";
function Header() {
  const [city, setCity] = useState("pune");
  const { setWeatherData } = useContext(Context);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6353520afbb18c05331493f756db9a3b`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(alert("OOPS! City not found, Check Spelling"));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div className="header">
      <div className="web_name">
        <h1>Weather Forecast</h1>
      </div>
      <div className="search">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="   Enter City"
        />
        <button onClick={handleClick}>
          <Search />
        </button>
      </div>
    </div>
  );
}
export default Header;
