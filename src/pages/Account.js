import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AccountTopBar from "../components/Account/AccountTopBar";
const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Helmet>
        <title>Account page</title>
        <meta name="description" content="etsy , bra , account page"></meta>
      </Helmet>

      <AccountTopBar />
      
    </>
  );
};

export default Account;
