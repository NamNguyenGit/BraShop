import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Your Bra Your Choice</title>
        <meta
          name="description"
          content="Quality is remembered long after the price is forgotten"
        />
        <meta name="keywords" content="bra , shop bra" />
      </Helmet>
      <Header />
    </>
  );
};

export default Home;
