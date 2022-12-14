import { Button, Form, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { fetchReservation } from "../../store/actions/reservation";
import { useNavigate } from "react-router-dom";

const FindReservation = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleFinish = (e) => {
    dispatch(fetchReservation(e.number));
    navigation("/reservation");
  };

  return (
    <Form onFinish={handleFinish} autoComplete="off" layout="vertical">
      <Form.Item
        name="number"
        label="Rezervasyon Numaranız"
        rules={[
          {
            required: true,
            message: "Reservation no is required",
          },
          {
            whitespace: true,
            message: "Reservation no cannot be empty",
          },
          {
            min: 24,
            max: 24,
            message: "Reservation no must be least 24 characters",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="633b41e326f7e099d0398966" allowClear />
      </Form.Item>
      <Form.Item>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Ara
          </Button>
          <Button type="primary" htmlType="reset">
            Temizle
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FindReservation;
