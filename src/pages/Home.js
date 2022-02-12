import Header from "../components/Header";
import Model from "../components/Model";
import Register from "../auth/Register";
import Login from "../auth/Login";
const Home = () => {
  return (
    <>
      <Header />
      <Model>
        <Register />
      </Model>
      <Model>
        <Login />
      </Model>
    </>
  );
};

export default Home;
