import { Helmet } from "react-helmet-async";
import SideBar from "../components/Admin/SideBar";
import TopBar from "../components/Admin/TopBar";
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
        <div className="others" >other pages</div>
      </div>
    </>
  );
};

export default Manager;
