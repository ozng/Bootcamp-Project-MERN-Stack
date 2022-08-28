import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import CardPic from "../components/CardPic/CardPic"

function Home() {
  const user = null;

  return (
    <>
      <Navbar user={user} />
      <Jumbotron />
      <CardPic />
    </>
  );
}

export default Home;
