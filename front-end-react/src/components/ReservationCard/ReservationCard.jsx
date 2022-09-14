import { Button } from "antd";
import DatePicker from "./DatePicker/DatePicker";
import "./ReservationCard.css";
import SelectableDropdown from "./SelectableDropdown/SelectableDropdown";
import HostSelection from "./HostSelection/HostSelection";

function ReservationCard({ showCityOption, btnTitle, onClick }) {
  return (
    <div className="jumbotron-reservation-container">
      {showCityOption && <SelectableDropdown />}
      <DatePicker />
      <HostSelection />
      {/* BUTTON */}
      <Button type="primary" size="large" onClick={onClick}>
        {btnTitle}
      </Button>
    </div>
  );
}

export default ReservationCard;
