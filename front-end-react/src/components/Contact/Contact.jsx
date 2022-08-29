import { Typography } from "antd";
import "./Contact.css";

const { Text } = Typography;

function Contact({ title, label }) {
  return (
    <div>
      <div>
        <Text className="contact-title">
          {title} : <Text className="contact-label">{label}</Text>
        </Text>
      </div>
    </div>
  );
}

export default Contact;
