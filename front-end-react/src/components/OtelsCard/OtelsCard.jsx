import "./OtelsCard.css";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { setFilteredOtelByHost } from "../../store/actions/otel";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function OtelsCard({ item }) {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setFilteredOtelByHost(item.title));
        navigation("/hotellist");
      }}
      className="otels-card-container"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <Text className="otels-card-title">{item.title}</Text>
    </div>
  );
}

export default OtelsCard;
