import { Button } from "antd";
import DatePicker from "./DatePicker/DatePicker";
import "./ReservationCard.css";
import SelectableDropdown from "./SelectableDropdown/SelectableDropdown";
import HostSelection from "./HostSelection/HostSelection";

function ReservationCard({
  options,
  handleVisible,
  visible,
  handleChangeOption,
  showCityOption,
  btnTitle,
}) {
  return (
    <div className="jumbotron-reservation-container">
      {showCityOption && <SelectableDropdown />}
      <DatePicker />
      <HostSelection
        handleChangeOption={handleChangeOption}
        options={options}
        handleVisible={handleVisible}
        visible={visible}
      />
      {/* BUTTON */}
      <Button type="primary" size="large">
        {btnTitle}
      </Button>
    </div>
  );
}

export default ReservationCard;
