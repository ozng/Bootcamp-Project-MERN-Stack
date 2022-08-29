import { Typography } from "antd";
import "./LocationCard.css";

const { Title } = Typography;

function LocationCard() {
  return (
    <div>
      <Title level={4} className="location-card-title">
        Konum
      </Title>
      <iframe
        className="location-card-map"
        title="otel-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9856916985254!2d28.971939915414538!3d41.02556897929897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1661789352897!5m2!1str!2str"
      ></iframe>
    </div>
  );
}

export default LocationCard;
