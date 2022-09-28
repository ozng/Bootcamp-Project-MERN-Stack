import { Button, Form, Input, Space } from "antd";

function Reservation() {
  const handleFinish = (e) => {
    console.log(e);
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
      <Form.Item
        name="phone"
        label="Telefon numarası"
        rules={[
          {
            required: true,
            message: "E-mail alanı boş bırakılamaz.",
          },
        ]}
      >
        <Input.Group compact>
          <Input style={{ width: "20%" }} placeholder="530" maxLength={3} />
          <Input style={{ width: "30%" }} placeholder="1234567" maxLength={7} />
        </Input.Group>
      </Form.Item>
      <Form.Item>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
          <Button type="primary" htmlType="reset">
            Clear
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default Reservation;
