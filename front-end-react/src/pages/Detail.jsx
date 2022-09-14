import Navbar from "../components/Navbar/Navbar";
import { Typography } from "antd";
import { useLayoutEffect } from "react";
import "./Detail.css";
import { useSelector } from "react-redux";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import Description from "../components/Description/Description";
import LocationCard from "../components/LocationCard/LocationCard";
import Contact from "../components/Contact/Contact";
import InfoList from "../components/InfoList/InfoList";

const { Title, Text } = Typography;

function Detail() {
  const selectedHotel = useSelector((state) => state.otel.selectedOtel);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

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
          <ReservationCard btnTitle="Rezervasyon Değiştir" />
        </div>

        <div className="detail-reservation-description-container">
          <div className="detail-desc-container">
            <Description description={selectedHotel?.description} />
          </div>

          <div className="detail-map-container">
            <LocationCard />
          </div>
        </div>

        <div className="detail-otel-info">
          <Title level={4} className="detail-reservation-description-title">
            İletişim
          </Title>
          <Contact title={"Telefon"} label={"0555 555 55 55"} />
          <Contact title={"E-mail"} label={"react_node@gmail.com"} />
        </div>
      </div>
    </>
  );
}

export default Detail;
