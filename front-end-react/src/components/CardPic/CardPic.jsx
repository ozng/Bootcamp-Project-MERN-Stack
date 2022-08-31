import { Card, Rate } from "antd";

const { Meta } = Card;

const CardPic = ({ item }) => {
  return (
    <Card
      hoverable
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
