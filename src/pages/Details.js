import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BestProductsContext from "../context/BestProductsContext";

import { DETAILS } from "../context/types/BestProductsTypes";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import DetailsProducts from "../components/Products/DetailsProducts";
const Details = () => {
  const { id } = useParams();
  const { BestProductsData , dispatch } = useContext(BestProductsContext);
  const {details} = BestProductsData  ;
  
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    
  }, [id]);

  return (
    <>
    <Helmet>
        <title>{details.name}</title>
        <meta
          name="description"
          content="bra shop detail page"
        />
      </Helmet>
    <Header heading= {details.name} image={details.banner}></Header>
    <DetailsProducts product={details} />
    <Footer />
    </>
  );
};

export default Details;
