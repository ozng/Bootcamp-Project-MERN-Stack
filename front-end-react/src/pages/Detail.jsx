import Navbar from "../components/Navbar/Navbar";
import { Typography } from "antd";
import "./Detail.css";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import Description from "../components/Description/Description";
import LocationCard from "../components/LocationCard/LocationCard";
import Contact from "../components/Contact/Contact";
import InfoList from "../components/InfoList/InfoList";
import { shortInfo, otelImages } from "../dummy-data/DummyData";

const { Title, Text } = Typography;

function Detail() {
  const [options, setOptions] = useState({
    cat: { label: "Kedi", value: 0 },
    dog: { label: "Köpek", value: 0 },
  });
  const [visible, setVisible] = useState(false);

  const handleChangeOption = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]:
          operation === "i"
            ? { ...options[name], value: options[name].value + 1 }
            : { ...options[name], value: options[name].value - 1 },
      };
    });
  };

  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="detail-container">
        <div className="detail-title-container">
          <Title id="detail-title" level={3}>
            Grand Pasha Hotel
          </Title>
          <Text>Kadıköy, İstanbul</Text>
        </div>
        <div className="detail-image-info-container">
          <div className="detail-image-slider">
            <ImageSlider images={otelImages} />
          </div>
          <div className="detail-info-container">
            <InfoList shortInfo={shortInfo} />
          </div>
        </div>

        <div className="detail-range-picker-container">
          <ReservationCard
            options={options}
            visible={visible}
            handleChangeOption={handleChangeOption}
            handleVisible={handleVisible}
            btnTitle="Rezervasyon Değiştir"
          />
        </div>

        <div className="detail-reservation-description-container">
          <div className="detail-desc-container">
            <Description />
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
