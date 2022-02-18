import {MdLineStyle, MdOutlineProductionQuantityLimits, MdRateReview} from "react-icons/md";
import {SiGoogleanalytics} from "react-icons/si";
import {BiTrendingUp} from "react-icons/bi";
import {HiUsers, HiDocumentReport} from "react-icons/hi";
import {AiFillMail,AiFillMessage} from "react-icons/ai";
const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="sideBar__wrapper">
            <div className="sideBar__menu">
                <div className="sideBar__menu__title">
                    Dashboard
                    <ul className="sideBar__menu__list">
                        <li className="sideBar__menu__list__item  ">
                            <MdLineStyle size={25} className="mr-5"/>
                            Home
                        </li>
                        <li className="sideBar__menu__list__item">
                            <SiGoogleanalytics size={25} className="mr-5"/>
                            Analytics
                        </li>
                        <li className="sideBar__menu__list__item">
                            <BiTrendingUp size={25} className="mr-5"/>
                            Sales
                        </li>
                        
                    </ul>
                </div>
                <div className="sideBar__menu__title">
                    Quick Menu
                    <ul className="sideBar__menu__list">
                        <li className="sideBar__menu__list__item  ">
                            <HiUsers size={25} className="mr-5"/>
                            Users
                        </li>
                        <li className="sideBar__menu__list__item">
                            <MdOutlineProductionQuantityLimits size={25} className="mr-5"/>
                            Products
                        </li>
                        <li className="sideBar__menu__list__item">
                            <HiDocumentReport size={25} className="mr-5"/>
                            Reports
                        </li>
                        
                    </ul>
                </div>
                <div className="sideBar__menu__title">
                    Notifications
                    <ul className="sideBar__menu__list">
                        <li className="sideBar__menu__list__item  ">
                            <AiFillMail size={25} className="mr-5"/>
                            Mail
                        </li>
                        <li className="sideBar__menu__list__item">
                            <MdRateReview size={25} className="mr-5"/>
                            Reviews
                        </li>
                        <li className="sideBar__menu__list__item">
                            <AiFillMessage size={25} className="mr-5"/>
                            Messages
                        </li>
                        
                    </ul>
                </div>
                <div className="sideBar__menu__title">
                    Staff
                    <ul className="sideBar__menu__list">
                        <li className="sideBar__menu__list__item  ">
                            <MdLineStyle size={25} className="mr-5"/>
                            Home
                        </li>
                        <li className="sideBar__menu__list__item">
                            <SiGoogleanalytics size={25} className="mr-5"/>
                            Analytics
                        </li>
                        <li className="sideBar__menu__list__item">
                            <HiDocumentReport size={25} className="mr-5"/>
                            Reports
                        </li>
                        
                    </ul>
                </div>
                
            </div>
        </div>

      </div>
    </>
  );
};

export default SideBar;
