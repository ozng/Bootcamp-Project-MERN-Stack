import "./jumbotron.css";
import Visitor from "../Visitor/Visitor";
import { DatePicker, Select, Button } from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;

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
        {/* TITLE */}
        <h2 className="jumbotron-title">
          En iyi ve güvenilir evcil hayvan otellerini uygun fiyatlara bulun!
        </h2>
        {/* CITY - DISTRICT */}
        <div className="jumbotron-reservation-container">
          <div className="jumbotron-location-container">
            <p className="jumbotron-reservation-label">Şehir, ilçe, otel adı</p>
            <Select className="jumbotron-select">
              <Select.Option value="ist">İstanbul</Select.Option>
              <Select.Option value="izm">İzmir</Select.Option>
            </Select>
          </div>
          {/* DATE */}
          <div className="jumbotron-date-container">
            <p className="jumbotron-reservation-label">Giriş ve Çıkış Tarihi</p>
            <RangePicker className="jumbotron" />
          </div>
          {/* HOST */}
          <div className="jumbotron-host-container">
            <p className="jumbotron-reservation-label">Konuk Sayısı</p>
            <div
              className="jumbotron-reservation-options-container"
              onClick={handleVisible}
            >
              <span className="jumbotron-reservation-options">
                {options.cat.label + "/"}
                {options.cat.value + " - "}
                {options.dog.label + "/"}
                {options.dog.value}
              </span>
            </div>
            <div
              className={
                visible
                  ? "jumbotron-visitor-container jumbotron-visible"
                  : "jumbotron-visitor-container"
              }
            >
              <Visitor
                item={options.cat}
                name="cat"
                handleChangeOption={handleChangeOption}
              />
              <Visitor
                item={options.dog}
                name="dog"
                handleChangeOption={handleChangeOption}
              />
            </div>
          </div>
          {/* BUTTON */}
          <div className="jumbotron-button-container">
            <Button type="primary" size="large">
              Otel Ara
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
