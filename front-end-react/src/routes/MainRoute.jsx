import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import HotelList from "../pages/HotelList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ReservationDetail from "../pages/ReservationDetail";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/hotellist" element={<HotelList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservation" element={<ReservationDetail />} />
      </Routes>
    </>
  );
}

export default MainRoute;
