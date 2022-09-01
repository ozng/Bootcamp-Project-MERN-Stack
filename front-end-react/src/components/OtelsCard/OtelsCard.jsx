import "./OtelsCard.css";
import { Typography } from "antd";

const { Text } = Typography;

function OtelsCard({ item }) {
  return (
    <div
      className="otels-card-container"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <Text className="otels-card-title">{item.title}</Text>
    </div>
  );
}

export default OtelsCard;
