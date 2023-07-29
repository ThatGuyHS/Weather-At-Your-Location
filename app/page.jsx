"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import "tailwindcss/tailwind.css";
import WeatherIcon from "./components/WeatherIcon";

const Weather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.WEATHER_API_TOKEN}&units=metric`
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const animProps = useSpring({
    opacity: loading ? 0 : 1,
    marginTop: loading ? "-500px" : "0px",
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        What's the weather at your location?
      </h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <animated.div style={animProps} className="text-center">
          <div className="flex flex-col items-center">
            <WeatherIcon condition={data.weather[0].main} />
            <div className="mt-4">
              <h1 className="text-3xl">{data.name}</h1>
              <h2 className="text-xl">{data.weather[0].main}</h2>
              <h3 className="text-lg">{Math.round(data.main.temp)}°C</h3>
            </div>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default Weather;
