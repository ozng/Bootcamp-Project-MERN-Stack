import { Card, Rate } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedOtel } from "../../store/actions/otel";

const { Meta } = Card;

const CardPic = ({ item }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card
      hoverable
      onClick={() => {
        dispatch(setSelectedOtel(item));
        navigation("/detail");
      }}
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={item.imageUrl} style={{ height: 200 }} />}
    >
      <Meta title={item.title} description={item.address} />

      <Rate disabled value={item.star} />

      <Meta description="1 günlük fiyat" />
      <span style={{ fontWeight: "bold", fontSize: 20 }}>{item.price}₺</span>
    </Card>
  );
};

export default CardPic;
