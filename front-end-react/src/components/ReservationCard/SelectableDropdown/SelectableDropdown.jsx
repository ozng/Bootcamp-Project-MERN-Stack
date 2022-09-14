import { Select } from "antd";
import "./SelectableDropdown.css";
import { useDispatch } from "react-redux";
import { changeCity } from "../../../store/actions/reservation";

function SelectableDropdown() {
  const dispatch = useDispatch();

  return (
    <div>
      <p className="selectable-dropdown-label">Şehir, ilçe, otel adı</p>
      <Select
        className="selectable-select"
        onChange={(city) => dispatch(changeCity(city))}
      >
        <Select.Option value="ist">İstanbul</Select.Option>
        <Select.Option value="izm">İzmir</Select.Option>
      </Select>
    </div>
  );
}

export default SelectableDropdown;
