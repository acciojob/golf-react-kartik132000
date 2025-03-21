import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay"; // Corrected import

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      {data && <WeatherDisplay data={data} />} {/* Corrected component name */}
    </div>
  );
};

export default App;
