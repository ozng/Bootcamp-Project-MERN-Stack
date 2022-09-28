import Navbar from "../components/Navbar/Navbar";
import "./ReservationDetail.css";
import { Typography } from "antd";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const ReservationDetailComp = ({ title, label }) => {
  return (
    <>
      <Title className="reservation-detail-title" level={4}>
        {title}
      </Title>
      <Text className="reservation-detail-title">{label}</Text>
    </>
  );
};

function ReservationDetail() {
  const selectedHotel = useSelector((state) => state.otel.selectedOtel);
  const ownerInfo = useSelector((state) => state.reservation.ownerInfo);
  const date = useSelector((state) => state.reservation.date);
  const selectedHost = useSelector((state) => state.reservation.ownerInfo);

  return (
    <div>
      <Navbar />
      <div className="reservation-detail-container">
        <div className="reservation-detail-title-container reservation-detail-m">
          <Title className="reservation-detail-label" level={2}>
            Rezervasyonunuz Tamamlandı.
          </Title>
          <div className="reservation-detail-info">
            <ReservationDetailComp
              title="Rezervasyon Numaranız"
              label="qe2Er894"
            />
            <ReservationDetailComp
              title="Seçilen Hotel"
              label={selectedHotel.title}
            />
            <ReservationDetailComp
              title="İsim/soyisim"
              label={ownerInfo.name}
            />
            <ReservationDetailComp title="Email" label={ownerInfo.email} />
            <ReservationDetailComp
              title="Telefon"
              label={ownerInfo.phoneNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetail;
