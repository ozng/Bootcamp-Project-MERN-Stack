import "./Description.css";
import { Typography } from "antd";

const { Title, Text } = Typography;

function Description({ description }) {
  return (
    <div>
      <Title level={4} className="detail-reservation-description-title">
        Otel Bilgisi
      </Title>
      <Text>{description}</Text>
    </div>
  );
}

export default Description;
