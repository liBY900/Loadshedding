import { useState } from "react";

function Home() {
  const [area, setArea] = useState("");
  const [result, setResult] = useState("");

  const fetchSchedule = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/loadshedding/${area}`
      );
      const data = await response.text();
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>⚡ Load Shedding App</h1>

      <input
        value={area}
        onChange={(e) => setArea(e.target.value)}
        placeholder="Enter area (e.g. capetown)"
      />

      <button onClick={fetchSchedule}>Check Schedule</button>

      <p>{result}</p>
    </div>
  );
}

export default Home;