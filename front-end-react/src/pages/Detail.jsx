import Navbar from "../components/Navbar/Navbar";
import { Typography } from "antd";
import { useLayoutEffect } from "react";
import "./Detail.css";
import { useSelector } from "react-redux";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import Description from "../components/Description/Description";
import LocationCard from "../components/LocationCard/LocationCard";
import InfoList from "../components/InfoList/InfoList";
import { useState, useEffect } from "react";
import { calculateDays } from "../utils/Calculations";
import ReservationModal from "../components/Forms/Modals/ReservationModal";

const { Title, Text } = Typography;

function Detail() {
  const selectedHotel = useSelector((state) => state.otel.selectedOtel);
  const selectedDays = useSelector((state) => state.reservation.date);
  const hosts = useSelector((state) => state.reservation.host);

  const [price, setPrice] = useState(0);
  const [isReservationModalVisible, setReservationModalVisible] =
    useState(false);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    if (selectedDays) {
      const startDate = selectedDays[0]?._d;
      const endDate = selectedDays[1]?._d;
      const days = calculateDays(endDate, startDate);
      const catHost = hosts.cat.value;
      const dogHost = hosts.dog.value;
      const totalHosts = catHost + dogHost;

      setPrice(selectedHotel.price * days * totalHosts);
    } else {
      setPrice(0);
    }
  }, [selectedHotel, selectedDays, hosts]);

  const shortInfo = [
    { title: "İlan no", label: selectedHotel?.id },
    {
      title: "Veteriner",
      label: selectedHotel?.veterinaryAvailable ? "Evet" : "Hayır",
    },
    { title: "Kapasite", label: selectedHotel?.capacity },
    {
      title: "Kabul edilen hayvanlar",
      label: selectedHotel?.acceptedHosts.map((item) => item + " "),
    },
    { title: "Şehir", label: selectedHotel?.city },
    { title: "Bahçeli", label: selectedHotel?.haveGarden ? "Evet" : "Hayır" },
  ];

  return (
    <>
      <Navbar />
      <div className="detail-container">
        <div className="detail-title-container">
          <Title id="detail-title" level={3}>
            {selectedHotel?.title}
          </Title>
          <Text>{selectedHotel?.adress}</Text>
        </div>
        <div className="detail-image-info-container">
          <div className="detail-image-slider">
            <ImageSlider images={selectedHotel?.images} />
          </div>
          <div className="detail-info-container">
            <InfoList shortInfo={shortInfo} />
          </div>
        </div>

        <div className="detail-range-picker-container">
          <ReservationCard
            btnTitle="Rezervasyon Yap"
            onClick={() => setReservationModalVisible(true)}
          />
          <span className="detail-price">{price} ₺</span>
          <ReservationModal
            isReservationModalVisible={isReservationModalVisible}
            setReservationModalVisible={setReservationModalVisible}
          />
        </div>

        <div className="detail-reservation-description-container">
          <div className="detail-desc-container">
            <Description description={selectedHotel?.description} />
          </div>

          <div className="detail-map-container">
            <LocationCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
