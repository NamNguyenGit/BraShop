import { Helmet } from "react-helmet-async";

import Header from "../components/Header";
import BestProducts from "../components/Products/BestProducts";
import SaleProducts from "../components/Products/SaleProducts";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Your Bra Your Choice</title>
        <meta
          name="description"
          content="Quality is remembered long after the price is forgotten"
        />
        <meta name="keywords" content="etsy , bra , shop bra" />
      </Helmet>
      <Header />
      <BestProducts />
      <SaleProducts />  
      <Footer />
      
    </>
  );
};

export default Home;
