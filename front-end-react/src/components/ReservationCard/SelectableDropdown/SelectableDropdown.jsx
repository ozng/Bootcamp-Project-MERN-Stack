import { Select } from "antd";
import "./SelectableDropdown.css";

function SelectableDropdown() {
  return (
    <div>
      <p className="selectable-dropdown-label">Şehir, ilçe, otel adı</p>
      <Select className="selectable-select">
        <Select.Option value="ist">İstanbul</Select.Option>
        <Select.Option value="izm">İzmir</Select.Option>
      </Select>
    </div>
  );
}

export default SelectableDropdown;
