import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BestProductsContext from "../context/BestProductsContext";
import { DETAILS } from "../context/types/BestProductsTypes";
import Header from "../components/Header"
const Details = () => {
  const { id } = useParams();
  const { BestProductsData, dispatch } = useContext(BestProductsContext);
  
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
  }, [id]);

  return (
    <>
    <Header></Header>
    </>
  );
};

export default Details;
