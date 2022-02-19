import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AccountTopBar from "../components/Account/AccountTopBar";
import AccountSideBar from "../components/Account/AccountSideBar";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Profile from "../components/Account/Profile";
import Address from "../components/Account/Address";
import OrderHistory from "../components/Account/OrderHistory";
import WishList from "../components/Account/WishList";
import Cart from "../components/Account/Cart";
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
        <Switch>
          <Route exact path="/account">
            <Profile />
          </Route>
          <Route exact path="/account/address">
            <Address />
          </Route>
          <Route exact path="/account/orderHistory">
            <OrderHistory />
          </Route>
          <Route exact path="/account/wishList">
            <WishList />
          </Route>
          <Route exact path="/account/cart">
            <Cart />
          </Route>
          
        </Switch>
      </div>
     
    </>
  );
};

export default Account;
