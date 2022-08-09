import Navbar from "../components/Navbar/Navbar";

function Home() {
  const user = {
    username: "ozangurer",
  };

  return (
    <>
      <Navbar user={user} />
    </>
  );
}

export default Home;
