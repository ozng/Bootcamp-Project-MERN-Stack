import "./jumbotron.css";
import ReservationCard from "../ReservationCard/ReservationCard";
import { useNavigate } from "react-router-dom";

function Jumbotron() {
  const navigation = useNavigate();

  return (
    <div className="jumbotron-container">
      <div className="jumbotron-wrapper">
        <h2 className="jumbotron-title">
          En iyi ve güvenilir evcil hayvan otellerini uygun fiyatlara bulun!
        </h2>
        <ReservationCard
          showCityOption
          btnTitle="Otel Ara"
          onClick={() => navigation("/hotellist")}
        />
      </div>
    </div>
  );
}

export default Jumbotron;
