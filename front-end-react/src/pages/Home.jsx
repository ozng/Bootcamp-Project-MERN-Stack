import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";

function Home() {
  const user = null;

  return (
    <>
      <Navbar user={user} />
      <Jumbotron />
    </>
  );
}

export default Home;
