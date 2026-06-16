import { useState } from "react";
import AreaSelector from "../components/AreaSelector";

// ✅ Define the API response type
type LoadSheddingData = {
  name: string;
  province: string;
  schedules: any[];
};

function Home() {
  const [area, setArea] = useState<string>("");
  const [data, setData] = useState<LoadSheddingData | null>(null);

  const fetchSchedule = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/loadshedding/${area}`
      );

      const json: LoadSheddingData = await response.json(); // ✅ typed
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>⚡ Load Shedding App</h1>

      <AreaSelector onSelect={setArea} />

      <button onClick={fetchSchedule} disabled={!area}>
        Check Schedule
      </button>

      {/* ✅ Safe rendering */}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.province}</p>

          <h3>Schedules:</h3>
          <pre>{JSON.stringify(data.schedules, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Home;