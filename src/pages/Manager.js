import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SideBar from "../components/Admin/SideBar";
import TopBar from "../components/Admin/TopBar";
import Homepage from "../components/Admin/pages/Homepage";

const Manager = () => {
  return (
    <>
      <Helmet>
        <title>Admin page</title>
        <meta name="description" content="etsy , bra , admin page"></meta>
      </Helmet>

      <TopBar />
      <div className="containerAdmin">
        <SideBar />

        <Switch>
          <Route exact path="/manager">
            <Homepage />
          </Route>
          
        </Switch>

      </div>
    </>
  );
};

export default Manager;
