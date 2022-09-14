import "./jumbotron.css";
import ReservationCard from "../ReservationCard/ReservationCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredOtelByCity } from "../../store/actions/otel";

function Jumbotron() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.reservation.city);

  return (
    <div className="jumbotron-container">
      <div className="jumbotron-wrapper">
        <h2 className="jumbotron-title">
          En iyi ve güvenilir evcil hayvan otellerini uygun fiyatlara bulun!
        </h2>
        <ReservationCard
          showCityOption
          btnTitle="Otel Ara"
          onClick={() => {
            dispatch(setFilteredOtelByCity(selectedCity));
            navigation("/hotellist");
          }}
        />
      </div>
    </div>
  );
}

export default Jumbotron;
