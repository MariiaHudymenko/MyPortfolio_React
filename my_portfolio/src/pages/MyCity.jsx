import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/MyCity.css"; 

export default function MyCity() {
  const [weather, setWeather] = useState(null);
  const city = "Kyiv";
  const API_KEY = "9b231fd804de01d58213e0aa885a2f00"; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
        );
        setWeather(res.data);
      } catch (err) {
        console.error("Error fetching weather data:", err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="city-container">
      <h1 className="city-title">My City — Kyiv</h1>

      <div className="city-image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRRgGAN55Hx_fgGXaZbvCGwRwx_3loZGsOQ&s" 
          alt="Kyiv city view"
          className="city-image"
        />
      </div>

      <p className="city-description">
        Kyiv is the capital of Ukraine, located on the banks of the Dnipro River. It is one of the oldest cities in Eastern Europe and beautifully blends its rich history with modern technology. Kyiv is a thriving hub for science, business, and culture. The city is famous for its majestic cathedrals, lush parks, and vibrant atmosphere.
      </p>

      <hr className="divider" />

      <h2 className="weather-title">Current Weather</h2>
      {weather ? (
        <div className="weather-box">
          <p><strong>City:</strong> {weather.name}, {weather.sys.country}</p>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Description:</strong> {weather.weather[0].description}</p>
          <p><strong>Coordinates:</strong> [{weather.coord.lat}, {weather.coord.lon}]</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="weather-icon"
          />
        </div>
      ) : (
        <p className="loading-text">Loading weather data...</p>
      )}
    </div>
  );
}
