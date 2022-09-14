import "./DatePicker.css";
import { DatePicker as AntDDatePicker } from "antd";
import { useDispatch } from "react-redux";
import { changeDate } from "../../../store/actions/reservation";

const { RangePicker } = AntDDatePicker;

function DatePicker() {
  const dispatch = useDispatch();

  return (
    <div>
      <p className="date-picker-label">Giriş ve Çıkış Tarihi</p>
      <RangePicker
        onChange={(selectedDate) => dispatch(changeDate(selectedDate))}
      />
    </div>
  );
}

export default DatePicker;
