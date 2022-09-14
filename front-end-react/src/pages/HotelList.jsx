import "./HotelList.css";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Navbar from "../components/Navbar/Navbar";
import VerticalCard from "../components/VerticalCard/VerticalCard";

function HotelList() {
  const user = null;

  return (
    <>
      <Navbar user={user} />
      <Jumbotron />
      <div className="hotel-list-vertical-card-container">
        <VerticalCard />
      </div>
    </>
  );
}

export default HotelList;
