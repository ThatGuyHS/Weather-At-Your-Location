import { FiCloud } from "react-icons/fi";
import Cloudy from "./Cloudy";
import Sunny from "./Sunny";
import Rainy from "./Rainy";

const WeatherIcon = ({ condition }) => {
  switch (condition) {
    case "Clear":
      return <Sunny />;
    case "Rain":
      return <Rainy />;
    case "Clouds":
      return <Cloudy />;
    default:
      return <FiCloud className="text-6xl m-4" />; // Default icon
  }
};

export default WeatherIcon;
