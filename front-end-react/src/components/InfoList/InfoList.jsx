import { Typography } from "antd";
import "./InfoList.css";

const { Text, Title } = Typography;

function InfoList({ shortInfo }) {
  return (
    <div>
      {shortInfo.map((item) => (
        <>
          <Title level={5} className="infolist-title">
            {item.title}
          </Title>
          <Text className="infolist-label">{item.label}</Text>
        </>
      ))}
    </div>
  );
}

export default InfoList;
