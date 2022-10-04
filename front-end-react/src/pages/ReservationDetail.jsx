import Navbar from "../components/Navbar/Navbar";
import "./ReservationDetail.css";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/tr";

const { Title, Text } = Typography;

const ReservationDetailComp = ({ title, label }) => {
  return (
    <>
      <Title className="reservation-detail-title" level={4}>
        {title}
      </Title>
      <Text code className="reservation-detail-title">
        {" "}
        {label}
      </Text>
    </>
  );
};

function ReservationDetail() {
  const selectedHotel = useSelector((state) => state.otel.selectedOtel);
  const ownerInfo = useSelector((state) => state.reservation.ownerInfo);
  const host = useSelector((state) => state.reservation.host);
  const date = useSelector((state) => state.reservation.date);

  return (
    <div>
      <Navbar />
      <div className="reservation-detail-container">
        <div className="reservation-detail-title-container reservation-detail-m">
          <Title className="reservation-detail-label" level={2}>
            Rezervasyonunuz Tamamlandı.
          </Title>
          {/* <div className="reservation-detail-info"> */}
          <ReservationDetailComp
            title="Rezervasyon numaranız"
            label="qe2Er894"
          />
          <ReservationDetailComp
            title="Seçilen otel"
            label={selectedHotel?.title}
          />
          <ReservationDetailComp title="İsim/soyisim" label={ownerInfo?.name} />
          <ReservationDetailComp title="Email" label={ownerInfo?.email} />
          <ReservationDetailComp
            title="Telefon"
            label={ownerInfo?.phoneNumber}
          />
          <ReservationDetailComp
            title="Giriş tarihi"
            label={moment(date[0]?._d).locale("tr").format("LL")}
          />
          <ReservationDetailComp
            title="Çıkış tarihi"
            label={moment(date[1]?._d).locale("tr").format("LL")}
          />
          {host?.cat.value > 0 && (
            <ReservationDetailComp title="Kedi" label={host?.cat.value} />
          )}
          {host?.dog.value > 0 && (
            <ReservationDetailComp title="Köpek" label={host?.dog.value} />
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ReservationDetail;
