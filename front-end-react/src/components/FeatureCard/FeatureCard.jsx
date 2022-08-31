import "./FeatureCard.css";
import { Typography } from "antd";
import {
  ReadOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function FeatureCard({ item }) {
  return (
    <div className="featured-container">
      <div className="featured-title-container">
        <Title level={4}>{item?.title}</Title>
      </div>
      <div className="featured-icon-desc-container">
        {(item.iconType === "ReadOutlined" && (
          <ReadOutlined className="featured-icon" />
        )) ||
          (item.iconType === "DollarOutlined" && (
            <DollarOutlined className="featured-icon" />
          )) ||
          (item.iconType === "FieldTimeOutlined" && (
            <FieldTimeOutlined className="featured-icon" />
          )) ||
          (item.iconType === "CheckOutlined" && (
            <CheckOutlined className="featured-icon" />
          ))}
        <Text className="featured-desc">{item?.description}</Text>
      </div>
    </div>
  );
}

export default FeatureCard;
