import "./DatePicker.css";
import { DatePicker as AntDDatePicker } from "antd";

const { RangePicker } = AntDDatePicker;

function DatePicker() {
  return (
    <div>
      <p className="date-picker-label">Giriş ve Çıkış Tarihi</p>
      <RangePicker />
    </div>
  );
}

export default DatePicker;
