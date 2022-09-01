import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import CardPic from "../components/CardPic/CardPic";
import { otelData } from "../dummy-data/OtelData";
import { featuredLabel, otelsFilteredByHost } from "../dummy-data/DummyData";
import "./Home.css";
import { Typography } from "antd";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import OtelsCard from "../components/OtelsCard/OtelsCard";

function Home() {
  const user = null;
  const { Title } = Typography;

  return (
    <>
      <Navbar user={user} />
      <Jumbotron />
      <Title className="home-margin" level={3}>
        Oteller
      </Title>
      <div className="home-card-container home-margin">
        {otelData.map((item) => (
          <div key={item.id}>
            <CardPic item={item} />
          </div>
        ))}
      </div>
      <Title className="home-margin home-center" level={3}>
        Neden PetHotel kullanmalıyım?
      </Title>
      <div className="home-featured-container home-margin">
        {featuredLabel.map((item) => (
          <FeatureCard item={item} />
        ))}
      </div>

      <div className="home-otels-card-container home-margin">
        {otelsFilteredByHost.map((item) => (
          <OtelsCard item={item} />
        ))}
      </div>

      <div className="placeholder">asdf</div>
    </>
  );
}

export default Home;
