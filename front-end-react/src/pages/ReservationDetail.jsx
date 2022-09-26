import Navbar from "../components/Navbar/Navbar";
import "./ReservationDetail.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

function ReservationDetail() {
  return (
    <div>
      <Navbar />
      <div className="reservation-detail-container">
        <div className="reservation-detail-title-container reservation-detail-m">
          <Title className="reservation-detail-label" level={2}>
            Rezervasyonunuz Tamamlandı.
          </Title>
          <Title className="reservation-detail-title" level={3}>
            Rezervasyon Numaranız
          </Title>
          <Text strong className="reservation-detail-title">
            1Qe5T
          </Text>
          <Text className="reservation-detail-m">
            Detayları görmek için <Link to={"/1Qe5T"}>tıklayınız</Link>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetail;
