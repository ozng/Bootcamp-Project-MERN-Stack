import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import CardPic from "../components/CardPic/CardPic";
import { otelData } from "../dummy-data/OtelData";
import "./Home.css";
import { Typography } from "antd";

function Home() {
  const user = null;
  const { Title } = Typography;

  return (
    <>
      <Navbar user={user} />
      <Jumbotron />
      <Title className="home-card-otel-label" level={3}>
        Oteller
      </Title>
      <div className="home-card-container">
        {otelData.map((item) => (
          <div key={item.id}>
            <CardPic item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
