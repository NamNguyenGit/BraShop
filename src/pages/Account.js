import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AccountTopBar from "../components/Account/AccountTopBar";
import AccountSideBar from "../components/Account/AccountSideBar";
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
      <div className="containerAccount">
        <AccountSideBar />
      </div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
       <div>a</div>
       <div>a</div> <div>a</div> <div>a</div> <div>a</div>
       <div>a</div>

       <div>a</div>
       <div>a</div>
       <div>a</div>
       <div>a</div>
       <div>a</div>
       <div>a</div>
       <div>a</div>
       <div>a</div>
       <div>a</div>
       <div>a</div>
        <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div> <div>a</div> <div>a</div> <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div>
         <div>a</div> <div>a</div>
         <div>a</div>
          <div>a</div>
           <div>a</div>
           <div>a</div>
           <div>a</div>
           <div>a</div>
           <div>a</div>
           <div>a</div>
           <div>a</div>
           <div>a</div>
           <div>a</div>
            <div>a</div>
    </>
  );
};

export default Account;
