import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";


const Featured = () => {
    return ( 
        <>
        <div className="featured">
            <div className="featured__featuredItem">
                <span className="featured__featuredTitle">
                    Overview
                </span>
                <div className="featured__featuredMoneyContainer">
                    <span className="featured__featuredMoneyContainer__featuredMoney">$2,415</span>
                    <span className="featured__featuredMoneyContainer__featuredMoneyRate">-11.4 <AiOutlineArrowDown size={20} className="featuredIcon" /> </span>
                </div>
                <span className="featured__featuredSub">Compared to last month</span>
            </div>
            
            <div className="featured__featuredItem">
                <span className="featured__featuredTitle">
                    Sales
                </span>
                <div className="featured__featuredMoneyContainer">
                    <span className="featured__featuredMoneyContainer__featuredMoney">$2,415</span>
                    <span className="featured__featuredMoneyContainer__featuredMoneyRate">-11.4 <AiOutlineArrowDown size={20} className="featuredIcon" /> </span>
                </div>
                <span className="featured__featuredSub">Compared to last month</span>
            </div>

            <div className="featured__featuredItem">
                <span className="featured__featuredTitle">
                    Cost
                </span>
                <div className="featured__featuredMoneyContainer">
                    <span className="featured__featuredMoneyContainer__featuredMoney">$2,415</span>
                    <span className="featured__featuredMoneyContainer__featuredMoneyRate">+11.4 <AiOutlineArrowUp size={20} className="featuredIconUp" /> </span>
                </div>
                <span className="featured__featuredSub">Compared to last month</span>
            </div>
        </div>
        </>
     );
}
 
export default Featured;