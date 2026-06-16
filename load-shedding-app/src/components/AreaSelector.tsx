import React from "react";

type Props = {
  onSelect: (area: string) => void;
};

const areas = [
  { name: "Cape Town CBD", id: "za_wc_cpt_capetowncbd_utix" },
  { name: "Fourways", id: "za_gt_jhb_fourways_4pef" },
];

const AreaSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div>
      <h3>Select Your Area</h3>

      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Choose Area --</option>

        {areas.map((area) => (
          <option key={area.id} value={area.id}>
            {area.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AreaSelector;