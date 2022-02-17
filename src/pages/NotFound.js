import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
 
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="bra shop not found " />
      </Helmet>
      <Header />
      <Footer />
    </>
  );
};

export default NotFound;
