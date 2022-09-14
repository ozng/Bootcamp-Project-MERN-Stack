import { useState } from "react";
import { useSelector } from "react-redux";

import Visitor from "../../Visitor/Visitor";
import "./HostSelection.css";

function HostSelection() {
  const [visible, setVisible] = useState(false);

  const host = useSelector((state) => state.reservation.host);

  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="host-selection-container">
      <p className="host-selection-label">Konuk Sayısı</p>
      <div className="host-selection-options-container" onClick={handleVisible}>
        <span className="host-selection-options">
          {"Kedi/"}
          {host.cat.value + " - "}
          {"Köpek/"}
          {host.dog.value}
        </span>
      </div>
      <div
        className={
          visible
            ? "host-selection-visitor-container host-selection-visible"
            : "host-selection-visitor-container"
        }
      >
        <Visitor item={host.cat} name="cat" label="Kedi" />
        <Visitor item={host.dog} name="dog" label="Köpek" />
      </div>
    </div>
  );
}

export default HostSelection;
