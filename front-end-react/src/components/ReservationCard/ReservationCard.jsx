import { Button, DatePicker, Select } from "antd";
import Visitor from "../Visitor/Visitor";
import "./ReservationCard.css";

function ReservationCard({
  options,
  handleVisible,
  visible,
  handleChangeOption,
  showCityOption,
  btnTitle,
}) {
  const { RangePicker } = DatePicker;

  return (
    <div className="jumbotron-reservation-container">
      {showCityOption && (
        <div className="jumbotron-location-container">
          <p className="jumbotron-reservation-label">Şehir, ilçe, otel adı</p>
          <Select className="jumbotron-select">
            <Select.Option value="ist">İstanbul</Select.Option>
            <Select.Option value="izm">İzmir</Select.Option>
          </Select>
        </div>
      )}

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
          {btnTitle}
        </Button>
      </div>
    </div>
  );
}

export default ReservationCard;
