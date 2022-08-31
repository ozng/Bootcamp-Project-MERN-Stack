import "./jumbotron.css";
import { useState } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";

function Jumbotron() {
  const [options, setOptions] = useState({
    cat: { label: "Kedi", value: 0 },
    dog: { label: "Köpek", value: 0 },
  });
  const [visible, setVisible] = useState(false);

  const handleChangeOption = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]:
          operation === "i"
            ? { ...options[name], value: options[name].value + 1 }
            : { ...options[name], value: options[name].value - 1 },
      };
    });
  };

  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="jumbotron-container">
      <div className="jumbotron-wrapper">
        <h2 className="jumbotron-title">
          En iyi ve güvenilir evcil hayvan otellerini uygun fiyatlara bulun!
        </h2>
        <ReservationCard
          options={options}
          visible={visible}
          handleChangeOption={handleChangeOption}
          handleVisible={handleVisible}
          showCityOption
          btnTitle="Otel Ara"
        />
      </div>
    </div>
  );
}

export default Jumbotron;
