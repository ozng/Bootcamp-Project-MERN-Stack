import { List, Typography } from "antd";
import "./VerticalCard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedOtel } from "../../store/actions/otel";

function VerticalCard() {
  const filteredOtels = useSelector((state) => state.otel.filteredOtels);

  const { Title } = Typography;

  const navigation = useNavigate();

  const dispatch = useDispatch();

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
        dataSource={filteredOtels}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            className="vertical-card-list"
            onClick={() => {
              dispatch(setSelectedOtel(item));
              navigation("/detail");
            }}
            extra={
              <img
                className="vertical-card-image"
                alt="logo"
                src={item.imageUrl}
              />
            }
          >
            <List.Item.Meta
              title={<Title level={4}>{item.title}</Title>}
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
