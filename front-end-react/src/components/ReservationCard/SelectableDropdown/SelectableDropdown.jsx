import { Select } from "antd";
import "./SelectableDropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../../../store/actions/reservation";

function SelectableDropdown() {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.reservation.city);
  return (
    <div>
      <p className="selectable-dropdown-label">Şehir, ilçe, otel adı</p>
      <Select
        className="selectable-select"
        onChange={(city) => dispatch(changeCity(city))}
        defaultValue={selectedCity}
      >
        <Select.Option value="Antalya">Antalya</Select.Option>
        <Select.Option value="Girne">Girne</Select.Option>
        <Select.Option value="İstanbul">İstanbul</Select.Option>
        <Select.Option value="Muğla">Muğla</Select.Option>
      </Select>
    </div>
  );
}

export default SelectableDropdown;
