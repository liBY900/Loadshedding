import { useState } from "react";
import AreaSelector from "../components/AreaSelector";

const Home = () => {
  const [area, setArea] = useState("");

  return (
    <div>
      <h1>⚡ Load Shedding Dashboard</h1>

      <AreaSelector onSelect={setArea} />

      {area && (
        <div>
          <h2>Selected Area:</h2>
          <p>{area}</p>
        </div>
      )}
    </div>
  );
};

export default Home;