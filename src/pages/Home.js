import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer/footer";
import Header from "../components/Header";
import BestProducts from "../components/Products/BestProducts";
import SaleProducts from "../components/Products/SaleProducts";
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
      <BestProducts />
      <SaleProducts />  
      <Footer />
      
    </>
  );
};

export default Home;
