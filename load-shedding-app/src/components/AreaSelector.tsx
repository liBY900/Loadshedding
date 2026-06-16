import React from "react";

type Props = {
  onSelect: (area: string) => void;
};

const areas = [
  "Cape Town Zone 1",
  "Cape Town Zone 2",
  "Cape Town Zone 3",
  "Cape Town Zone 4",
];

const AreaSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div>
      <h3>Select Your Area</h3>

      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Choose Area --</option>

        {areas.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AreaSelector;