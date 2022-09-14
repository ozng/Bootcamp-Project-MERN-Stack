import { List } from "antd";
import "./VerticalCard.css";
import { otelData } from "../../dummy-data/OtelData";

function VerticalCard() {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={otelData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                className="vertical-card-image"
                alt="logo"
                src={item.imageUrl}
              />
            }
          >
            <List.Item.Meta
              title={<a href="/">{item.title}</a>}
              description={item.address}
            />
            {item.description}
          </List.Item>
        )}
      />
    </>
  );
}

export default VerticalCard;
