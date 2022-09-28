import { Button, Form, Input, Space } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOwnerInfo } from "../../store/actions/reservation";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phoneCode, setPhoneCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const handleFinish = (e) => {
    dispatch(
      setOwnerInfo({
        name: e.name,
        email: e.email,
        phoneNumber: phoneCode + phoneNumber,
      })
    );
    navigate("/reservation");
  };
  return (
    <Form autoComplete="off" onFinish={handleFinish} layout="vertical">
      <Form.Item
        name="name"
        label="İsim/Soyisim"
        rules={[
          {
            required: true,
            message: "İsim boş bırakılamaz",
          },
        ]}
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            required: true,
            message: "E-mail alanı boş bırakılamaz.",
          },
        ]}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item name="phone" label="Telefon Numarası">
        <Input.Group compact>
          <Input
            allowClear
            style={{ width: "20%" }}
            placeholder="530"
            maxLength={3}
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
          />
          <Input
            allowClear
            style={{ width: "30%" }}
            placeholder="1234567"
            maxLength={7}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Input.Group>
      </Form.Item>

      <Form.Item>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Rezervasyonu Tamamla
          </Button>
          <Button type="primary" htmlType="reset">
            Temizle
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default Reservation;
