import Navbar from "../components/Navbar/Navbar";
import { Typography } from "antd";
import "./Detail.css";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import Description from "../components/Description/Description";
import LocationCard from "../components/LocationCard/LocationCard";
import Contact from "../components/Contact/Contact";

const { Title, Text } = Typography;

function Detail() {
  const otelImages = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1056467/pexels-photo-1056467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

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

        <div>
          <ImageSlider images={otelImages} />
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
